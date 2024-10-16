import { IoStar } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { addToCart } from "../Redux/Slices/CartSlice";
const FoodCards = ({ id, img, desc, rating, price, name, handleToast }) => {
  const dispatch = useDispatch();
  return (
    <div className="font-bold w-[250px] bg-white p-5 flex flex-col  rounded-lg gap-2 ">
      <img
        src={img}
        alt=""
        className="w-auto h-[130px] hover:scale-110 cursor-grap tansition-all duration-500 ease-in-out"
      />
      <div className="text-sm flex justify-between">
        <h2>{name}</h2>
        <span className="text-green-500">₹{price}</span>
      </div>
      <p className="text-sm font-normal">{desc.slice(0, 50)}...</p>
      <div className="flex justify-between">
        <span className="flex justify-center items-center">
          <IoStar />
          {rating}
        </span>
        <button
          onClick={() =>
            {dispatch(addToCart({ id, name, price, rating,img, qty: 1 })
          );
          handleToast(name);
            }}
          className="p-1 text-white bg-green-500 hover:bg-green-600 rounded-lg text-sm"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default FoodCards;
