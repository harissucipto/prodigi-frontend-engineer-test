import { ChipIcon } from "@heroicons/react/solid";

const DataNotFoundBlock = () => {
  return (
    <div
      data-testid="data-not-found"
      className="w-full my-5 border p-20 shadow-sm flex justify-center items-center gap-3 "
    >
      <ChipIcon className="w-5 h-5" />
      <p className="">Data Not Found</p>
    </div>
  );
};

export default DataNotFoundBlock;
