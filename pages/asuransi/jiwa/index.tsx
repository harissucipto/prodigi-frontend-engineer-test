import React from "react";
import CustomHead from "components/common/CustomHead";
import ProductList from "components/asuransi-jiwa/ProductList";

interface Item {
  imgSrc: string;
  title: string;
  description: string;
}

const items: Item[] = [
  {
    imgSrc:
      "https://assets.qoala.app/images/purchase/lifeInsurance/lifeProtection-ID.png",
    title: "Tanpa Pengembalian Premi",
    description:
      "Asuransi jiwa berjangka yang preminya hangus di akhir periode polis, ada maupun tidak ada klaim.",
  },
  {
    imgSrc: "https://assets.qoala.app/images/purchase/lifeInsurance/ROP.png",
    title: "Dengan Pengembalian Premi",
    description:
      "Asuransi jiwa berjangka dengan fitur premi kembali hingga >100% di akhir periode polis apabila tidak terjadi klaim.",
  },
];

const Jiwa: React.FC = () => {
  return (
    <>
      <CustomHead title="Asuransi Jiwa" />
      <div>
        <ProductList />
      </div>
    </>
  );
};

export default Jiwa;
