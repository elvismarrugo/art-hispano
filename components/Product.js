import Button from "components/Button";

const Product = ({ product }) => {
  return (
    <div className="Product-item">
      <img src={product.image} alt={product.title} />
      <div className="Product-item-info">
        <h2>
          {product.title}
          <span>$ {product.price}</span>
        </h2>
        <p>{product.description}</p>
      </div>
      <button type="button">Comprar</button>
    </div>
  );
};

export default Product;
