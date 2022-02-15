import CustomHead from "@/components/common/CustomHead";
import Layout from "@/components/common/Layout";
import NavHeader from "@/components/common/NavHeader";
import {
  AnnotationIcon,
  DocumentDownloadIcon,
  KeyIcon,
  ShareIcon,
  ShieldCheckIcon,
} from "@heroicons/react/solid";
import React from "react";
import { TypeItemAsuransi } from "../types";
import classNames from "classnames";
import { useItemAsuransiJiwa } from "@/components/asuransi-jiwa/hooks/useItemAsuransiJiwa";
import { useRouter } from "next/router";
import Image from "next/image";
import { toRupiah, toDecimal } from "@/utils/convertToPrice";
import LoadingBlock from "@/components/common/LoadingBlock";
import DataNotFoundBlock from "@/components/common/DataNotFoundBlock";
import ErrorBlock from "@/components/common/ErrorBlock";

interface ProductDetailProps {
  item: TypeItemAsuransi;
}

const listDetail = [
  { label: "Manfaat", value: "manfaat", Icon: ShieldCheckIcon },
  { label: "S & K", value: "s&k", Icon: AnnotationIcon },
  { label: "Klaim", value: "klaim", Icon: DocumentDownloadIcon },
];

const ProductDetail: React.FC<ProductDetailProps> = () => {
  const { query } = useRouter();
  const { data, isError, isLoading } = useItemAsuransiJiwa(query.id as string);
  const [activeView, setActiveView] = React.useState<string>("manfaat");

  const Manfaat = data?.detail.product.coverages?.filter(
    (item) => item?.name === "Manfaat"
  )[0]?.content;
  const Pengecualian = data?.detail.product.coverages?.filter(
    (item) => item?.name === "Pengecualian (Tidak Dijamin)"
  )[0]?.content;
  const terms = data?.detail?.terms;
  const claim = data?.detail?.claim?.flow;
  const support = data?.detail?.claim?.support;

  const [isShowMore, setIsShowMore] = React.useState(false);
  const minimumToShow = 3;
  const listPengecualian = isShowMore
    ? Pengecualian
    : Pengecualian?.slice(0, minimumToShow) ?? [];

  return (
    <>
      <CustomHead title="Asuransi Jiwa" />
      <Layout className="relative">
        <NavHeader title="Asuransi Jiwa" />
        <div className="flex gap-3 py-4 fixed w-full max-w-md left-50 top-12 bg-white z-10">
          {listDetail.map((item) => (
            <button
              key={item.value}
              className={classNames("flex-1 btn btn-xs h-9 normal-case", {
                "btn-active": activeView === item.value,
              })}
              onClick={() => setActiveView(item.value)}
            >
              <item.Icon width={16} height={16} className="mr-2 " />
              <p>{item.label}</p>
            </button>
          ))}
        </div>
        <div className="max-h-screen overflow-y-auto no-scrollbar">
          <div className="relative mt-[4rem] pb-[7rem]">
            {isLoading && <LoadingBlock />}
            {isError && !isLoading && <ErrorBlock />}
            {!data && !isError && !isLoading && <DataNotFoundBlock />}
            {/* Manfaat View */}
            {data && activeView === "manfaat" && (
              <div>
                <div className="mb-4 p-4">
                  <div className="flex items-center mb-2 gap-3">
                    <Image
                      alt="logo"
                      src={data?.logo as any}
                      width={48}
                      height={48}
                      className="mr-2 object-contain"
                    />
                    <p
                      data-testid="detail-product-name"
                      className="font-medium text-blue-500 text-sm"
                    >
                      {data?.detail.product.name}
                    </p>
                  </div>
                  <div className="text-xs">
                    {data?.detail.product.description}
                  </div>
                </div>

                <div className=" border shadow-xs mb-4">
                  <div className="border-b p-4">
                    <p className="font-medium text-blue-500 text-sm">Manfaat</p>
                  </div>
                  {Manfaat?.map((item, index) => {
                    if (item === "string")
                      return (
                        <div className="p-4 text-xs" key={index}>
                          {item}
                        </div>
                      );
                    return (
                      <div className="p-4 text-xs" key={index}>
                        <p className="font-medium text-blue-500 text-sm">
                          {(item as any).name}
                        </p>
                        <div className="flex gap-3 w-full">
                          <p className="flex-1 flex-wrap">
                            {(item as any).text}
                          </p>
                          <p className="font-bold text-sm text-blue-600">
                            {toDecimal((item as any).value)}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="border shadow-xs">
                  <div className="border-b p-4">
                    <p className="font-medium text-blue-500 text-sm">
                      Pengecualian (Tidak Dijamin)
                    </p>
                  </div>

                  <div className="text-xs">
                    <div className=" p-4">
                      <p>
                        Pihak Asuransi berhak menolak membayar klaim apabila
                        Tertanggung meninggal dunia sebagai akibat dari salah
                        satu hal di bawah ini :
                      </p>
                      <ul className="list-disc pl-8 mt-2">
                        {listPengecualian?.map((item, index) => {
                          return <li key={index}>{item}</li>;
                        })}
                      </ul>
                    </div>
                    <div className="flex py-4 border-t">
                      <button
                        className="flex-1 font-bold text-blue-600"
                        onClick={() => setIsShowMore(!isShowMore)}
                      >
                        {isShowMore ? "Lihat Sedikit" : " Lihat Selengkapnya"}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* S&K */}
            {data && activeView === "s&k" && (
              <div>
                <ul className="list-disc text-xs p-4">
                  {terms?.map((item, index) => (
                    <li
                      className="mb-1"
                      key={index}
                      dangerouslySetInnerHTML={{ __html: item }}
                    ></li>
                  ))}
                </ul>
              </div>
            )}

            {/* Klaim */}
            {data && activeView === "klaim" && (
              <div className="text-xs p-4">
                <div className="mb-4">
                  <p className="text-sm font-bold text-blue-500 mb-2">Klaim</p>
                  <ul className="list-disc ml-4">
                    {claim?.map((item, index) => (
                      <>
                        <li className="mb-2">{item.step}</li>
                        <ul className="list-decimal mt-2 ml-3"></ul>
                        {item?.flow.map((flow, index) => (
                          <li className="mb-2" key={index}>
                            {flow}
                          </li>
                        ))}
                      </>
                    ))}

                    <li className="mb-2">
                      <p>
                        Dokumen pendukung yang dibutuhkan (scan asli /
                        legalisir):
                      </p>
                      <ul className="list-decimal mt-2 ml-3">
                        <li className="mb-2">
                          Identitas (KTP / KK) Pemegang Polis / Tertanggung &
                          Ahli Waris
                        </li>
                        <li className="mb-2">
                          Surat Keterangan Meninggal Dunia dari Kelurahan /
                          Kecamatan setempat atau Akta Kematian
                        </li>
                        <li>
                          Surat Keterangan Meninggal Dunia dari KBRI setempat
                          (jika meninggal dunia di luar negeri)
                        </li>
                      </ul>
                    </li>
                    <li className="mb-2">
                      Melengkapi formulir klaim dan semua dokumen yang
                      diperlukan maksimum 30 hari kalender sejak tanggal
                      pengajuan klaim
                    </li>
                  </ul>
                </div>
                <div className="tracking-wider leading-relaxed">
                  <p className="font-bold text-blue-500 mb-2 ">Layanan Klaim</p>
                  <div
                    className="mb-1"
                    dangerouslySetInnerHTML={{
                      __html: support?.call as any,
                    }}
                  />
                  <div
                    className="mb-1"
                    dangerouslySetInnerHTML={{
                      __html: support?.email as any,
                    }}
                  ></div>
                </div>
              </div>
            )}
          </div>
        </div>
        {!isLoading && !isError && data && (
          <div className="absolute bottom-10 z-10 w-full py-2  bg-white">
            <div className="flex justify-between  gap-4">
              <div className="flex-1">
                <p className="text-md font-bold">Premi per Tahun</p>
                <p className="pb-1 font-semibold text-blue-600">
                  {toRupiah(data?.premium)}
                </p>
              </div>
              <div className="flex items-center">
                <ShareIcon className="text-blue-500 w-7 h-8 mr-2" />
                <button className="btn btn-primary btn-xs h-10 w-40 pointer-events-none">
                  Beli
                </button>
              </div>
            </div>
          </div>
        )}
      </Layout>
    </>
  );
};

export default ProductDetail;
