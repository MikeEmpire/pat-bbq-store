import Image from "next/image";

import { IProduct } from "../constants/types";

interface ProductProps {
  productToRender: IProduct;
}

const Product = ({ productToRender }: ProductProps) => {
  const {
    id,
    name,
    description,
    image: imageData,
    price,
    url,
  } = productToRender;
  return (
    <div>
      <h2>{name}</h2>
      <p>{description}</p>
      <figure>
        <Image src={imageData} alt={imageData.src} />
      </figure>
      <section>
        <article>{price}</article>
        <button
          data-item-id={id}
          data-item-name={name}
          data-item-price={price}
          data-item-url={url}
          data-item-image={imageData.src}
        >
          Add To Cart
        </button>
      </section>
    </div>
  );
};

export default Product;
