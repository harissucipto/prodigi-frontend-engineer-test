import { ChipIcon } from "@heroicons/react/solid";

const ErrorBlock = () => {
  return (
    <div
      data-testid="display-error"
      className="w-full my-5 border p-20 shadow-sm flex mt-2 justify-center items-center gap-3 "
    >
      <ChipIcon className="w-5 h-5" />
      <p className="">Error, Something Bad Happend!</p>
    </div>
  );
};

export default ErrorBlock;
