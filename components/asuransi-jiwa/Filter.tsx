import React from "react";
import BottomModal from "@/components/common/BottomModal";
import { FilterIcon } from "@heroicons/react/solid";

export type TypeInputFilter = {
  [key: string]: boolean | number | undefined;
};

interface FilterProps {
  defaultValue: TypeInputFilter;
  setValue: (input: TypeInputFilter) => void;
}

const labels = {
  covereds: [{ datas: [{ birthdate: "1997-12-10", gender: "MALE" }] }],
  type: "TL",
  uuid: "fa8f7332-056a-4c3f-17b2-69555d09f077",
  filter: {
    price: 5203500,
    feature: [
      { name: "Santunan Meninggal Dunia", min: 1, max: 100000001 },
      { name: "Santunan Meninggal Dunia", min: 101000000, max: 250000001 },
      { name: "Santunan Meninggal Dunia", min: 251000000, max: 500000001 },
      { name: "Santunan Meninggal Dunia", min: 501000000, max: 1000000001 },
      { name: "Santunan Meninggal Dunia", min: 1000000000, max: 100000000000 },
      {
        name: "Biaya Pengobatan/Perawatan di Rumah Sakit (akibat kecelakaan)",
        min: 1,
        max: 100000000000,
      },
      { name: "Santunan Cacat Tetap Total", min: 1, max: 100000000000 },
    ],
    label: ["syariah"],
  },
};

const keysFilter: { [key: string]: { type: string; value: any } } = {
  "Santunan Meninggal < 100 juta": {
    type: "feature",
    value: { name: "Santunan Meninggal Dunia", min: 1, max: 100000001 },
  },
  "Santunan Meninggal 101 - 250 juta": {
    type: "feature",
    value: { name: "Santunan Meninggal Dunia", min: 101000000, max: 250000001 },
  },
  "Santunan Meninggal 251 -500 juta": {
    type: "feature",
    value: { name: "Santunan Meninggal Dunia", min: 251000000, max: 500000001 },
  },
  "Santunan Meninggal 501 juta - 1 milyar": {
    type: "feature",
    value: {
      name: "Santunan Meninggal Dunia",
      min: 501000000,
      max: 1000000001,
    },
  },
  "Santunan Meninggal > 1 milyar": {
    type: "feature",
    value: {
      name: "Santunan Meninggal Dunia",
      min: 1000000000,
      max: 100000000000,
    },
  },
  "Manfaat Penggantian Biaya Pengobatan (Kecelakaan)": {
    type: "feature",
    value: {
      name: "Biaya Pengobatan/Perawatan di Rumah Sakit (akibat kecelakaan)",
      min: 1,
      max: 100000000000,
    },
  },
  "Manfaat Cacat Tetap Total": {
    type: "feature",
    value: { name: "Santunan Cacat Tetap Total", min: 1, max: 100000000000 },
  },
  Syariah: {
    type: "label",
    value: "syariah",
  },
};

export const filtersToQuries = (filters: TypeInputFilter | undefined) => {
  if (!filters) return undefined;

  const queries = Object.entries(filters)
    .map(([key]) => {
      console.log(key);
      const filter = keysFilter[key];
      if (!filter) {
        return undefined;
      }
      return filter;
    })
    .filter((item) => item !== undefined)
    .reduce((acc: any, curr: any) => {
      if (curr.type === "feature") {
        let feature = acc.feature || [];

        let addFeature = [...feature, curr.value];
        return {
          ...acc,
          feature: addFeature,
        };
      }

      if (curr.type === "label") {
        let label = acc.label || [];
        let addLabel = [...label, curr.value];
        return {
          ...acc,
          label: addLabel,
        };
      }
    }, {});
  return queries;
};

const sortOptions = [
  {
    label: "Santunan Meninggal < 100 juta",
    value: "Santunan Meninggal < 100 juta",
  },
  {
    label: "Santunan Meninggal 101 - 250 juta",
    value: "Santunan Meninggal 101 - 250 juta",
  },
  {
    label: "Santunan Meninggal 251 -500 juta",
    value: "Santunan Meninggal 251 -500 juta",
  },
  {
    label: "Santunan Meninggal 501 juta - 1 milyar",
    value: "Santunan Meninggal 501 juta - 1 milyar",
  },
  {
    label: "Santunan Meninggal > 1 milyar",
    value: "Santunan Meninggal > 1 milyar",
  },
  {
    label: "Manfaat Penggantian Biaya Pengobatan (Kecelakaan)",
    value: "Manfaat Penggantian Biaya Pengobatan (Kecelakaan)",
  },
  { label: "Manfaat Cacat Tetap Total", value: "Manfaat Cacat Tetap Total" },
  { label: "Syariah", value: "Syariah" },
];

const Filter: React.FC<FilterProps> = ({ defaultValue, setValue }) => {
  const [selectedFeatures, setSelectedFeatures] =
    React.useState<TypeInputFilter>(defaultValue);

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { checked, value } = e.target;
    const newSelectedFeatures = { ...selectedFeatures };
    if (checked) {
      newSelectedFeatures[value] = true;
    } else {
      delete newSelectedFeatures[value];
    }
    setSelectedFeatures(newSelectedFeatures);
  };

  return (
    <BottomModal
      Button={({ toggleModal }) => (
        <button
          data-testid="filter-button"
          title="Filter"
          className="flex-1 btn btn-xs h-9 normal-case justify-start"
          onClick={() => {
            toggleModal();
          }}
        >
          <FilterIcon className="w-4 h-4 mr-2" />
          <span>Filter</span>
        </button>
      )}
      Content={({ toggleModal }) => (
        <>
          <p className="mb-2 text-sm font-bold text-blue-500">Filter Fitur</p>
          <div className="flex flex-col gap-2">
            {sortOptions.map((item) => (
              <div key={item.value}>
                <input
                  className="mr-2 font-bold"
                  type="checkbox"
                  name="features"
                  value={item.value}
                  id={item.value}
                  data-testid={item.value}
                  onChange={handleCheckboxChange}
                  checked={(selectedFeatures[item.value] as boolean) || false}
                />
                <label htmlFor={item.value} className="text-sm font-bold">
                  {item.label}
                </label>
              </div>
            ))}
          </div>
          <button
            data-testid="apply-filter"
            className="btn btn-primary btn-xs w-full h-10 mt-4"
            onClick={() => {
              setValue(selectedFeatures);
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

export default Filter;
