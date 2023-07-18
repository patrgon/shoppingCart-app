import { useDispatch } from "react-redux";
import { add, remove } from "../../redux/features/cart/cartSlice";

export const useCartActions = () => {
  const dispatch = useDispatch();

  const addProduct = (product) => {
    dispatch(add(product));
  };

  const removeProduct = (productId) => {
    dispatch(remove(productId));
  };

  return { addProduct, removeProduct };
};
