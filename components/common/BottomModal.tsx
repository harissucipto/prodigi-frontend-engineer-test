import React from "react";
import classNames from "classnames";

interface BottomModalProps {
  Button: React.FC<{
    toggleModal: () => void;
  }>;
  Content: React.FC<{
    toggleModal: () => void;
  }>;
}

const BottomModal: React.FC<BottomModalProps> = ({ Button, Content }) => {
  // trigger the modal
  const [showModal, setShowModal] = React.useState(false);

  const toggleModal = React.useCallback(() => {
    setShowModal(!showModal);
  }, [showModal]);

  return (
    <>
      {Button && <Button toggleModal={toggleModal} />}
      {showModal && (
        <>
          <div
            onClick={() => toggleModal()}
            className="fixed min-h-screen min-w-full opacity-40  z-40 bg-gray-500 top-0 left-0 "
          ></div>
          <div
            className="z-50 fixed bottom-0 left-50 w-full max-w-md  
        rounded-t-xl p-5 bg-white shadow-lg"
          >
            {Content && <Content toggleModal={toggleModal} />}
          </div>
        </>
      )}
    </>
  );

  //(
  // <div className={classNames('fixed bottom-0 inset-x-0 p-4 sm:inset-0 sm:p-0 sm:flex sm:items-center sm:justify-center', className)}>
  //   <div className="fixed inset-0 transition-opacity">
  //     <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
  //   </div>
  // )
};

export default BottomModal;
