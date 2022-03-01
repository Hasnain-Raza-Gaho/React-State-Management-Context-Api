import React,{useContext} from "react";
import { GlobalContext } from "./Store/GlobalState";

 const DecData=()=> {
    
    const {DecData} = useContext(GlobalContext)

    const Data =()=>{
        console.log("Fun call0")
        DecData()
    }

     return(
         <>
         <button onClick={()=>Data()}>Decrement Data</button>
         </>
     )

}

export default DecData