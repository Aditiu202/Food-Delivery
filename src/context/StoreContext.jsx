import { createContext, useState } from "react";
import { food_list } from "../assets/assets";
import { useEffect } from "react";



export const StoreContext = createContext(null);

const StoreContextProvider=(props)=>{


      const[carditem,setcardItem] = useState({});

     
      const addToCard=(itemId)=>{
         
        if(!carditem[itemId]){
            setcardItem((prev)=>({...prev,[itemId]:1}))
        }

        else{
            setcardItem((prev)=>({...prev,[itemId]:prev[itemId]+1}))
        }
      }


      const removecarditem=(itemId)=>{
        setcardItem((prev)=>({...prev,[itemId]:prev[itemId]-1}))
      }

    const contextvalue={
        food_list,
        carditem,
        setcardItem,
        addToCard,
        removecarditem,
    }

    useEffect(()=>{
      console.log(carditem);
    },[carditem])

    return (
       < StoreContext.Provider value={contextvalue}>
            {props.children}
       </StoreContext.Provider>
    )
}

export default StoreContextProvider;