import { useDispatch } from "react-redux";
import { add, remove, addQuantity, removeQuantity } from "../../redux/features/cart/cartSlice";

export const useCartActions = () => {
  const dispatch = useDispatch();

  const addProduct = (product) => {
    dispatch(add(product));
  };

  const removeProduct = (productId) => {
    dispatch(remove(productId));
  };

  const add_quantity = (product) => {
    dispatch(addQuantity(product));
  };

  const remove_quantity = (product) => {
    dispatch(removeQuantity(product));
  };

  return { addProduct, removeProduct, add_quantity, remove_quantity};
};
