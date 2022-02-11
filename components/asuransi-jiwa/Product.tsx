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
      className={classNames(props.className, "cursor-pointer")}
      onClick={() => router.push(props.route)}
    >
      <Image src={props.imgSrc} alt="" width={90} height={116.5} />
      <div data-testid="product">
        <h3 data-testid="product-title">{props.title}</h3>
        <p>{props.description}</p>
        <button>Pilih Produk</button>
      </div>
    </div>
  );
};

export default Product;
