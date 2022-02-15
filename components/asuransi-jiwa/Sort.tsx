import React from "react";
import BottomModal from "@/components/common/BottomModal";
import { BanIcon, ColorSwatchIcon } from "@heroicons/react/solid";

interface SortProps {
  defaultValue: string | undefined;
  setValue: (value: string | undefined) => void;
}

const sortOptions = [
  { label: "Harga premi rendah ke tinggi", value: "lowest" },
  { label: "Harga premi tinggi ke rendah", value: "highest" },
  { label: "Rekomendasi", value: "recommend" },
];

const Sort: React.FC<SortProps> = ({ defaultValue, setValue }) => {
  const [selectedSort, setSelectedSort] = React.useState(defaultValue);

  return (
    <BottomModal
      Button={({ toggleModal }) => (
        <button
          data-testid="sort-button"
          title="Urutkan"
          className="flex-1 btn btn-xs h-9 normal-case justify-start"
          onClick={() => {
            toggleModal();
          }}
        >
          <ColorSwatchIcon className="w-4 h-4 mr-2" />
          <span>Urutkan</span>
        </button>
      )}
      Content={({ toggleModal }) => (
        <>
          <p className="mb-2 text-sm font-bold text-blue-500">Urutkan Dari</p>
          <div className="flex flex-col gap-2">
            {sortOptions.map((item) => (
              <div key={item.value}>
                <input
                  className="mr-2 font-bold"
                  type="radio"
                  name="sort"
                  value={item.value}
                  id={item.value}
                  onChange={() => setSelectedSort(item.value)}
                  checked={selectedSort === item.value}
                />
                <label htmlFor={item.value} className="text-sm font-bold">
                  {item.label}
                </label>
              </div>
            ))}
          </div>
          <button
            data-testid="apply-sort"
            className="btn btn-primary btn-xs w-full h-10 mt-4"
            onClick={() => {
              setValue(selectedSort);
              toggleModal();
            }}
          >
            Terapkan
          </button>
        </>
      )}
    />
  );
};

export default Sort;
