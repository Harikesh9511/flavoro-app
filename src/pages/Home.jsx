import CategoryMenu from "../Components/CategoryMenu"
import FoodItems from "../Components/FoodItems"
import Navbar from "../Components/Navbar"
import Card from "../Components/Card"
const Home = () => {
  return (
    <>
   <Navbar/>
   <CategoryMenu/>
   <FoodItems/>
   <Card></Card>
   </>
  )
}

export default Home