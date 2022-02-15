import React from "react";
import classNames from "classnames";
import { useRouter } from "next/router";
import format from "date-fns/format";

import CustomHead from "@/components/common/CustomHead";
import Layout from "@/components/common/Layout";
import LayoutMainContent from "@/components/common/LayoutMainContent";
import NavHeader from "@/components/common/NavHeader";

const genderList = [
  { label: "Pria", value: "MALE" },
  { label: "Wanita", value: "FEMALE" },
];

// create a component return hello world
export const AsuransiJiwaTanpaPengembalianPremi = () => {
  const [gender, setGender] = React.useState("");
  const [birthdate, setBirthdate] = React.useState<string>("");

  const isFormValid = React.useMemo(() => {
    return birthdate && genderList.some((item) => item.value === gender);
  }, [gender, birthdate]);

  const router = useRouter();

  return (
    <>
      <CustomHead title="Asuransi Jiwa" />
      <Layout>
        <NavHeader title="Asuransi Jiwa" />
        <LayoutMainContent
          title={
            <p className="text-white font-medium text-lg">
              Jamin masa depan keluargamu dengan <br />
              asuransi jiwa terbaik
            </p>
          }
        >
          <div id="cari-produk">
            <p className="font-bold  mb-2">Pilih Tanggal Lahirmu,</p>
            <div>
              <div className="form-control mb-4">
                <label htmlFor="birthDate" className="label">
                  <span className="text text-sm font-bold ">Tanggal Lahir</span>
                </label>
                <input
                  required
                  value={birthdate}
                  onChange={(evt) => {
                    setBirthdate(evt.currentTarget.value);
                  }}
                  data-date-format="DD MMMM YYYY"
                  type="date"
                  id="birthDate"
                  name="birthDate"
                  className="input input-xs h-10 input-primary"
                />
              </div>
            </div>
            {/* create input type date with setState */}
            <div className="form-control mb-6">
              <label htmlFor="gender" className="mb-2">
                <span className="text text-sm font-bold">Jenis Kelamin</span>
              </label>
              <div id="gender" className="flex justify-center gap-4">
                {genderList.map((item) => (
                  <button
                    data-testid="gender"
                    key={item.value}
                    className={classNames(
                      "btn btn-xs h-7 gap-3 flex-1 btn-outline",
                      {
                        "btn-primary": item.value === gender,
                      }
                    )}
                    onClick={() => {
                      setGender(item.value);
                    }}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
            <button
              onClick={() => {
                router.push(
                  `/asuransi/jiwa/info/produk?${new URLSearchParams({
                    birthdate: format(new Date(birthdate), "yyyy-MM-dd"),
                    gender,
                  }).toString()}`
                );
              }}
              className={classNames("btn  w-full", {
                "btn-disabled": !isFormValid,
                "btn-primary": isFormValid,
              })}
            >
              Cari Produk
            </button>
          </div>
        </LayoutMainContent>
      </Layout>
    </>
  );
};

export default AsuransiJiwaTanpaPengembalianPremi;
