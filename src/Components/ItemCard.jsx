import { CiCircleMinus, CiCirclePlus } from "react-icons/ci";
import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../Redux/Slices/CartSlice";
import {incrementQty } from "../Redux/Slices/CartSlice";
import { decrement } from "../Redux/Slices/CartSlice";
import toast, { Toaster } from 'react-hot-toast';

const ItemCard = ({id,name,price,img,qty}) => {
  const dispatch = useDispatch();
  return (
    <div className="flex gap-2 shadow-md rounded-lg p-2 mb-3">
      <MdDelete onClick={()=> {dispatch(removeFromCart({id,img,name,price,qty}));
      toast(`${name}Removed!`, {
        icon: '👋',
      });
      }} 
      className="absolute right-7 text-gray-600 cursor-pointer"/>
      <img
        src={img}
        alt=""
        className="w-[50px] h-[50px]  "
      />
      <div className="leading-5">
        <h2 className="font-bold text-gray-600">{name}</h2>
        <div className="flex justify-between items-center w-full">
          <span className="text-green-500 font-bold">₹{price}</span>
          <div className="flex  justify-center items-center gap-2 absolute right-7">
            <CiCirclePlus className="  text-gray-600 hover:text-white hover:bg-green-500 hovet:border-none rounded-md p-1 text-xl transition-all ease-linear cursor-pointer" onClick={()=> qty>=1  ? dispatch(incrementQty({id})): (qty=0)}/>
            <span>{qty}</span>
            <CiCircleMinus className="  text-gray-600 hover:text-white hover:bg-green-500 hovet:border-none rounded-md p-1 text-xl transition-all ease-linear cursor-pointer" onClick={()=> qty>1 ? dispatch(decrement({id})):(qty = 0)}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
