import { useDispatch } from "react-redux";
import { searchProduct } from "../../redux/features/product/productSlice";

export const useProductActions = () => {
  const dispatch = useDispatch();

  const getAllProducts = () => {
    
  }

  const searchProductByName = (productName) => {
    dispatch(searchProduct(productName));
  };

  return { searchProductByName };
};