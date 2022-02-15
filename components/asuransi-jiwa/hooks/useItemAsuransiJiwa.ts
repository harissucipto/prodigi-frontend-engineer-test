import React from "react";
import { TypeItemAsuransi } from "../types";
import { useListAsuransiJiwa } from "./useListAsuransiJiwa";

export function useItemAsuransiJiwa(productCode: string) {
  const { isError, isLoading, data: listItem } = useListAsuransiJiwa();
  const data: TypeItemAsuransi | null = React.useMemo(
    () => listItem?.find((item) => item?.product_code === productCode) || null,
    [listItem, productCode]
  );

  return { data, isError, isLoading };
}
