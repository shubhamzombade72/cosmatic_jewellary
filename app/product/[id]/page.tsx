import { products, jewelleryCatalog } from "@/data/products";
import ProductDetail from "@/components/ProductDetail";

export function generateStaticParams() {
  return [...products, ...jewelleryCatalog].map((product) => ({
    id: product.id,
  }));
}

export default function ProductPage({ params }: { params: { id: string } }) {
  const productId = params.id;
  const product = [...products, ...jewelleryCatalog].find(p => p.id === productId) || jewelleryCatalog[0];

  return <ProductDetail product={product} />;
}
