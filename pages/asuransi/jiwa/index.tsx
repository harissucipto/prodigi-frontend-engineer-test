import React from "react";
import CustomHead from "@/components/common/CustomHead";
import ProductList from "@/components/asuransi-jiwa/ProductList";
import NavHeader from "@/components/common/NavHeader";
import LayoutMainContent from "@/components/common/LayoutMainContent";
import Contact from "@/components/common/Contact";
import Layout from "@/components/common/Layout";

const Jiwa: React.FC = () => {
  return (
    <>
      <CustomHead title="Asuransi Jiwa" />
      <Layout>
        <NavHeader title="Asuransi Jiwa" />
        <LayoutMainContent
          title={
            <p className="text-white font-medium text-lg">
              Berikan yang terbaik untuk <br />
              keluargamu dengan asuransi jiwa
            </p>
          }
        >
          <div>
            <p className="font-bold text-blue-600 mb-5">
              Asuransi Jiwa Terbaik untuk Lindungi Keluargamu{" "}
            </p>
            <ProductList />
            <Contact />
          </div>
        </LayoutMainContent>
      </Layout>
    </>
  );
};

export default Jiwa;
