import React from "react";
import Image from "next/image";
import CustomHead from "@/components/common/CustomHead";
import NavHeader from "@/components/common/NavHeader";
import Layout from "@/components/common/Layout";
import { BanIcon, EyeIcon } from "@heroicons/react/solid";
import Sort from "@/components/asuransi-jiwa/Sort";
import { useRouter } from "next/router";
import Filter, { TypeInputFilter } from "@/components/asuransi-jiwa/Filter";
import { useListAsuransiJiwa } from "@/components/asuransi-jiwa/hooks/useListAsuransiJiwa";
import { toRupiah } from "@/utils/convertToPrice";
import LoadingBlock from "@/components/common/LoadingBlock";
import DataNotFoundBlock from "@/components/common/DataNotFoundBlock";
import ErrorBlock from "@/components/common/ErrorBlock";

const ProductPage: React.FC = () => {
  const [sort, setSort] = React.useState<undefined | string>();
  const [filter, setFilter] = React.useState<TypeInputFilter>({});
  const router = useRouter();
  const { birthdate, gender } = router.query;
  const { data, isLoading, isError } = useListAsuransiJiwa(filter, sort);

  return (
    <>
      <CustomHead title="Asuransi Jiwa" />
      <Layout className="relative">
        <NavHeader title="Asuransi Jiwa" />
        <div className="flex gap-3 py-4  fixed bg-white w-full max-w-md  z-10 top-[3rem]">
          <Sort defaultValue={sort} setValue={setSort} />
          <Filter defaultValue={filter} setValue={setFilter} />
          <button className="flex-1 btn btn-xs h-9 normal-case justify-start pointer-events-none">
            <BanIcon className="w-4 h-4 mr-1" />
            <span>Bandingkan</span>
          </button>
        </div>

        <div className="mt-[3.8rem] overflow-y-auto no-scrollbar max-h-screen pb-[10rem]">
          {isLoading && <LoadingBlock />}
          {isError && !isLoading && <ErrorBlock />}
          {!data?.length && !isLoading && !isError && <DataNotFoundBlock />}
          {data?.length &&
            data?.map((item) => {
              return (
                <ProductItem
                  key={item?.product_code}
                  alias={item?.insurance?.alias}
                  logo={item?.insurance?.logo}
                  name={item?.name}
                  preimium={item?.premium}
                  excerpt={item?.detail?.excerpt}
                  productCode={item?.product_code}
                  query={{ birthdate, gender }}
                  label={item?.detail?.label}
                />
              );
            })}
        </div>
      </Layout>
    </>
  );
};

export default ProductPage;

interface ProductItemProps {
  name: string;
  alias: string;
  logo: string;
  excerpt: string[];
  preimium: number;
  productCode: string;
  query: any;
  label: any;
}

const ProductItem: React.FC<ProductItemProps> = (props) => {
  const router = useRouter();

  return (
    <div
      id={props.productCode}
      className="mt-6 p-5 shadow-sm border"
      data-testid="product-insurance"
    >
      <div className="flex items-center w-full mb-6">
        <Image
          alt="logo"
          src={props.logo}
          width={40}
          height={40}
          className=" object-contain"
        />

        <div className="flex-1 ml-3">
          <p className="text-sm font-light">{props.alias}</p>
          <p className="font-semibold text-blue-600">{props.name}</p>
          <div className="flex gap-2 flex-wrap mt-1">
            {props?.label?.map &&
              props.label.map((item: any) => (
                <div
                  className="flex items-center bg-blue-100 px-2 rounded"
                  key={item.key}
                >
                  <EyeIcon className="w-2 h-2 mr-2 text-blue-500" />
                  <span className="text-xs font-lg">Produk {item.key}</span>
                </div>
              ))}
          </div>
        </div>
      </div>
      <Features items={props.excerpt} />
      <div className="flex justify-between items-center">
        <div>
          <p className="font-light">Premi per Tahun</p>
          <div className="font-bold text-blue-500">
            {toRupiah(props.preimium)}
          </div>
        </div>
        <div className="flex gap-2 items-center">
          <button
            data-testid={`btn-detail-${props.productCode}`}
            title="Lihat Detail"
            className="btn btn-xs w-[5rem] h-[2rem] normal-case btn-active"
            onClick={() => {
              router.push(
                `/asuransi/jiwa/info/produk/${
                  props.productCode
                }?${new URLSearchParams(props.query).toString()}`
              );
            }}
          >
            Detail
          </button>
          <button className="btn btn-xs w-[5rem] h-[2rem] normal-case btn-active pointer-events-none">
            Beli
          </button>
        </div>
      </div>
    </div>
  );
};

interface FeaturesProps {
  items: string[];
  defaultIsShowMore?: boolean;
}

const Features: React.FC<FeaturesProps> = ({ items, defaultIsShowMore }) => {
  const [isShowMore, setIsShowMore] = React.useState(!!defaultIsShowMore);
  const minimumToShow = 1;
  const list = isShowMore ? items : items.slice(0, minimumToShow);

  const toggleShowMore = () => {
    setIsShowMore(!isShowMore);
  };

  return (
    <div className="flex gap-2 flex-col mb-4">
      {list?.map((item, index) => (
        <div className="flex items-center" key={index}>
          <EyeIcon className="w-2 h-2 mr-2 text-green-500" />
          <span className="text-xs">{item}</span>
        </div>
      ))}
      <button
        className="text-sm font-bold text-blue-400 text-left"
        onClick={() => {
          toggleShowMore();
        }}
      >
        {!isShowMore ? "Lihat Selengkapnya" : "Lihat Sedikit"}
      </button>
    </div>
  );
};
