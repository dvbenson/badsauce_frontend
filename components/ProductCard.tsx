'use client';
import { useCart } from '../src/store';
import { CardProps } from '../app/shop/page';

export default function ProductCard({
  product_id,
  product_price,
  product_desc,
  product_name,
  product_img,
  metadata,
}: CardProps) {
  const [product, setProduct] = useCart((state) => [
    state.product,
    state.setProduct,
  ]);

  function onProductClick() {
    const newProduct = {
      product_id,
      product_price,
      product_desc,
      product_name,
      product_img,
      metadata,
    };
    setProduct({ newProduct });
  }
  //need to handle the null values above
  //e.g. const displayPrice = product_price ?? 0;

  return (
    <div
      id="card-container"
      className="relative h-[300px] w-[300px]"
      onClick={() => {
        onProductClick();
      }}
    >
      <div
        id="card"
        className="flex h-full w-full cursor-pointer items-center justify-center overflow-hidden shadow hover:shadow-lg"
      >
        <img
          src={product_img[0]}
          alt={product_name}
          className="h-full w-full object-cover"
        />
      </div>
      <div className="absolute right-0 top-0 p-2">
        <button disabled className="rounded-full bg-white p-2 font-bold shadow">
          {product_name}
        </button>
      </div>
    </div>
  );
}