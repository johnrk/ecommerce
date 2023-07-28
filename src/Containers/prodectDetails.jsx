import React, { useEffect } from "react";
import { useParams ,Link} from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {
  selectedProduct,
  removeSelectedPrduct,
} from "../Redux/actions/productActions";

const ProdectDetails = () => {
  let { productId } = useParams();
  const product = useSelector((state) => state.product);
  const { title, image, price, category, description } = product;
  const dispatch = useDispatch();
  
  useEffect(() => {
    const fetchDetaild = async () => {
      const response = await axios
        .get(`https://fakestoreapi.com/products/${productId}`)
        .catch((err) => console.log("Error", err));

      dispatch(selectedProduct(response.data));
    };

    if (productId && productId !== "") {
      fetchDetaild(productId);
    } else if(!productId) {
      console.log("page not found")
    }
    return () => {
      dispatch(removeSelectedPrduct());
    };
  }, [dispatch,productId]);

  return (
    <div className="ui grid container">
      {Object.keys(product).length === 0 ? (
        <div>Loading....</div>
      ) : (
        <div className="ui placeholder segment">
          <div className="ui two column stackable center aligned grid">
            <div className="ui vertical divider">AND</div>
            <div className="middle aligned row">
              <div className="column lp">
                <img className="ui fluid image" src={image} alt={title} />
              </div>
              <div className="column rp">
                <h1>{title}</h1>
                <h2>
                  <Link className="ui tag label">${price}</Link>
                </h2>
                <h3 className="ui brown block header">{category}</h3>
                <p>{description}</p>
                <div className="ui vertical animated button" tabIndex="0">
                  <div className="hidden content">
                    <i className="shop icon"></i>
                  </div>
                  <div className="visible content">Add to Cart</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProdectDetails;
