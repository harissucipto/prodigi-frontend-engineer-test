import React from "react";
import Axios from "axios";
import { TypeItemAsuransi } from "@/components/asuransi-jiwa/types";
import {
  TypeInputFilter,
  filtersToQuries,
} from "@/components/asuransi-jiwa/Filter";
import { queryKeys } from "@/utils/react-query/constants";
import { useQuery } from "react-query";
import { useRouter } from "next/router";

type TypeParams =
  | {
      [key: string]: string | undefined;
    }
  | undefined;

type TypeSearch = {
  birthdate: string;
  gender: string;
};

const getProducts = async ({
  params,
  filter,
  search,
}: {
  params: TypeParams;
  filter?: TypeInputFilter;
  search: TypeSearch;
}): Promise<TypeItemAsuransi[]> => {
  const filterQuery = filtersToQuries(filter);
  const res = await Axios.post(
    "https://api.qoala.app/api/products/life",
    {
      covereds: [
        {
          datas: [search],
        },
      ],
      ...(filter && Object.keys(filterQuery).length > 0
        ? { filter: filterQuery }
        : {}),
      type: "TL",
      uuid: "29e116ef-8097-4815-98a3-b3ea90ca331b",
    },
    {
      params,
    }
  );
  return res.data.data;
};

export function useListAsuransiJiwa(filter?: TypeInputFilter, sort?: string) {
  const { query } = useRouter();
  const { birthdate, gender } = query;
  const search = { birthdate: birthdate as string, gender: gender as string };

  const { data, isLoading, isError } = useQuery(
    [queryKeys.products, sort, filter, search],
    () =>
      getProducts({
        params: { sort },
        filter,
        search,
      })
  );
  return { data, isLoading, isError };
}
