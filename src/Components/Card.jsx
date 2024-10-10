import { IoIosCloseCircle } from "react-icons/io";
import ItemCard from "./ItemCard";
import { useSelector } from "react-redux";
import { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { useNavigate} from "react-router-dom"
const Card = () => {
  const [activeCart, setActiveCart] = useState(false);
  const cartItems = useSelector((state) => state.cart.cart);

  const totalQty  = cartItems.reduce((totalQty,items)=> totalQty + items.qty, 0);
  const totalPrice = cartItems.reduce((total,item) =>total + item.qty * item.price, 0);
  // console.log(cartItems);
  const navigate = useNavigate();
  return (
    <>
      <div
        className={`fixed right-0 top-0 w-full lg:w-[25vw] bg-white h-full p-5 mb-3 ${
          activeCart ? "translate-x-0" : "translate-x-full"
        } transition-all duration-500 z-50`}
      >
        <div className="flex justify-between item-center my-3">
          <span className="text-xl font-bold text-gray-800">My Order</span>
          <IoIosCloseCircle
            onClick={() => setActiveCart(!activeCart)}
            className="border-2 border-gray-600 text-gray-600 font-bold padding-1 text-xl rounded-md hover:text-red-600 hover:border-red-300 cursor-pointer"
          />
        </div>
        { cartItems.length > 0? cartItems.map((food) => {
          return (
            <ItemCard
              key={food.id}
              id={food.id}
              name={food.name}
              price={food.price}
              img={food.img}
              qty={food.qty}
            />
          );
        }): <h2 className="text-center text-xl font-bold text-gray-600">Your Cart is empty!</h2>}

        {/* <ItemCard/> */}

        <div className="absolute bottom-0">
          <h3 className="font-semibold text-gray-800">Items: {totalQty}</h3>
          <h3 className="font-semibold text-gray-800">Total Amount: {totalPrice}</h3>
          <hr className="w-[90vw] lg:w-[18vw] my-2 " />
          <button 
          onClick={()=>navigate("/success")}
          className="bg-green-500 font-bold px-3   text-white py-2 mb-5 rounded-lg w-[90vw] lg:w-[18vw]">
            CheckOut
          </button>
        </div>
      </div>
      <FaShoppingCart
        className={`rounded-full bg-white shadow-md text-5xl p-3 fixed bottom-4 right-4 ${totalQty > 0 && "animate-bounce delay-500 transition-all "} `}
        onClick={() => setActiveCart(!activeCart)}
      />
    </>
  );
};

export default Card;
