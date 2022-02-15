import React from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import classNames from "classnames";

export interface ProductProps {
  imgSrc: string;
  title: string;
  description: string;
  route: string;
  className?: string;
}

const Product: React.FC<ProductProps> = (props) => {
  const router = useRouter();

  return (
    <div
      className={classNames(
        props.className,
        "cursor-pointer",
        "flex border-b border-blue-100"
      )}
      onClick={() => router.push(props.route)}
    >
      <Image src={props.imgSrc} alt="" width={90} height={90} />
      <div data-testid="product" className="pl-5 flex-1">
        <h3 data-testid="product-title" className="text-sm font-bold mb-2">
          {props.title}
        </h3>
        <p className="text-xs">{props.description}</p>

        <div className="flex justify-end m-3">
          <button className=" btn btn-xs normal-case" title={props.title}>
            Pilih Produk
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
