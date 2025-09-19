import ProductCard from "./ProductCard";

const ProductList = ({ products, compareList, onToggleCompare }) => {
  return (
    <div className="row">
      {products.map((p) => (
        <ProductCard
          key={p.id}
          product={p}
          onToggleCompare={onToggleCompare}
          isSelected={compareList.some((c) => c.id === p.id)}
        />
      ))}
    </div>
  );
};

export default ProductList;
