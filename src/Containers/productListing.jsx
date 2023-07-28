import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setProducts } from "../Redux/actions/productActions";
import ProductComponent from "./productComponent";

const ProductPage = () => {
  // const products = useSelector((state) => state.allPr);
  const dispatch = useDispatch();

  
  useEffect(() => {
    const fetchProduct = async () => {
      const response = await axios
        .get("https://fakestoreapi.com/products")
        .catch((err) => {
          console.log("Err", err);
        });
      dispatch(setProducts(response.data));
    };
    fetchProduct();
  }, [dispatch]); //useEffect it will run every time on render


  return (
    <div className="ui grid container">
      <ProductComponent />
    </div>
  );
};

export default ProductPage;
