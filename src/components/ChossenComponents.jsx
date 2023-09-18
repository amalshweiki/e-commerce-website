import { useParams } from "react-router";
import { myProducts } from "../data.js";
import { Link } from "react-router-dom";

const ChosenComponent = () => {
  const { productId } = useParams();
  const parsedProductId = parseInt(productId, 10); // Parse as an integer

  const productSelect = myProducts.find((p) => p.id === parsedProductId);
// const image=productSelect.imageUrl
  if (!productSelect) {
    console.log('Product not found!');
    return <div>Product not found!</div>;
  }

  return(
    <div className="products">
        <h2>{productSelect.title}</h2>
         <h6>{productSelect.size}</h6>
         <img src={productSelect.imageUrl}/>
         <h6>{productSelect.price}</h6>
         <Link  className="link" to='/products'>back </Link>
    </div>
    )
};

export default ChosenComponent;
