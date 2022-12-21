import Product from "./Product";

import { IProduct } from "../constants/types";

interface ProductListProps {
  products: Array<IProduct>;
}

const ProductList = ({ products }: ProductListProps) => {
  const productsToRender = products.map((p: IProduct) => (
    <Product productToRender={p} key={p.id} />
  ));
  return <div className="product-list__container">{productsToRender}</div>;
};

export default ProductList;
