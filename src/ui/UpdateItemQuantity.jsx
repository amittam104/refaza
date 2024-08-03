import { useDispatch, useSelector } from "react-redux";
import Button from "./Button";
import {
  decreaseItemQuantity,
  increaseItemQuantity,
  setItemQuantity,
} from "../features/cart/CartSlice";

function UpdateItemQuantity({ pizzaId }) {
  const dispatch = useDispatch();
  const currentItemQuantity = useSelector(setItemQuantity(pizzaId));

  return (
    <div className="flex items-center gap-3">
      <Button
        type="round"
        onClick={() => dispatch(decreaseItemQuantity(pizzaId))}
      >
        -
      </Button>
      <span>{currentItemQuantity}</span>
      <Button
        type="round"
        onClick={() => dispatch(increaseItemQuantity(pizzaId))}
      >
        +
      </Button>
    </div>
  );
}

export default UpdateItemQuantity;
