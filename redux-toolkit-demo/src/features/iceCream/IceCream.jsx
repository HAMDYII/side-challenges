import { useDispatch, useSelector } from "react-redux";
import { ordered, reStocked } from "./iceCreamSlice";
import { useState } from "react";

const IceCream = () => {
  const IceCreams = useSelector((state) => state.iceCream.numberOfIceCream);
  const dispatch = useDispatch();
  const [numberOfRestock, setNumberOfRestock] = useState("");

  const RestockedNumber = Number(numberOfRestock) || 0;

  return (
    <section>
      <h2>IceCreams: {IceCreams}</h2>
      <form>
        <input
          type="text"
          value={RestockedNumber}
          onChange={(e) => setNumberOfRestock(e.target.value)}
        />
      </form>
      <div>
        <button onClick={() => dispatch(ordered())}>Order an IceCream</button>
        <button onClick={() => dispatch(reStocked(5))}>
          Restock IceCreams
        </button>
      </div>
    </section>
  );
};

export default IceCream;
