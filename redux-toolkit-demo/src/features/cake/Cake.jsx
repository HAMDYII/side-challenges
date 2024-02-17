import { useDispatch, useSelector } from "react-redux";
import { ordered, reStocked } from "./cakeSlice";
import { useState } from "react";

const Cake = () => {
  const cakes = useSelector((state) => state.cake.numberOfCakes);
  const dispatch = useDispatch();
  const [numberOfRestock, setNumberOfRestock] = useState("");

  const RestockedNumber = Number(numberOfRestock) || 0;

  return (
    <section>
      <h2>Cakes: {cakes}</h2>
      <form>
        <input
          type="text"
          value={RestockedNumber}
          onChange={(e) => setNumberOfRestock(e.target.value)}
        />
      </form>
      <div>
        <button onClick={() => dispatch(ordered())}>Order a Cake</button>
        <button onClick={() => dispatch(reStocked(RestockedNumber))}>
          Restock Cakes
        </button>
      </div>
    </section>
  );
};

export default Cake;
