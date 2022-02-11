import classNames from "classnames";
import React from "react";
import Product, { ProductProps } from "./Product";

export const ProductListData: ProductProps[] = [
  {
    imgSrc:
      "https://assets.qoala.app/images/purchase/lifeInsurance/lifeProtection-ID.png",
    title: "Tanpa Pengembalian Premi",
    description:
      "Asuransi jiwa berjangka yang preminya hangus di akhir periode polis, ada maupun tidak ada klaim.",
    route: "/asuransi/jiwa/tanpa-pengembalian-premi",
  },
  {
    imgSrc: "https://assets.qoala.app/images/purchase/lifeInsurance/ROP.png",
    title: "Dengan Pengembalian Premi",
    description:
      "Asuransi jiwa berjangka dengan fitur premi kembali hingga >100% di akhir periode polis apabila tidak terjadi klaim.",
    route: "/asuransi/jiwa/dengan-pengembalian-premi",
  },
];

const ProductList = () => {
  return (
    <div>
      {ProductListData.map((product, index) => (
        <Product
          key={product.title}
          {...product}
          className={classNames({
            "pointer-events-none": index === 1,
          })}
        />
      ))}
    </div>
  );
};

export default ProductList;
