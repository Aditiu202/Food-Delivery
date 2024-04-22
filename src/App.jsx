import Navbar from "./components/Navbar/Navbar"
import {Routes ,Route} from 'react-router-dom'
import Home from './pages/Home/Home'
import Carts from "./pages/Carts/Carts"
import PlaceOrders from "./pages/PlaceOrders/PlaceOrders"
import StoreContextProvider from "./context/StoreContext"
import Footer from "./components/Footer/Footer"
import LoginPopUp from "./components/LoginPopUp/LoginPopUp"
import { useState } from "react"

function App() {
  const[showlogin,setshowlogin]=useState(false);
   return (
     <>
       {showlogin ? <LoginPopUp setshowlogin={setshowlogin} /> : <></>}
       <StoreContextProvider value="NULL">
         <div className="app">
           <Navbar setshowlogin={setshowlogin} />
           <Routes>
             <Route path="/" element={<Home />} />
             <Route path="/cart" element={<Carts />} />
             <Route path="/placeholder" element={<PlaceOrders />} />
           </Routes>
         </div>
         <Footer />
       </StoreContextProvider>
     </>
   );
}

export default App
