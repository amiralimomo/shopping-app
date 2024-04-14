import { useEffect, useState } from "react";
import {  useAllCategories} from "../service/useAllCategories";
export const Home=()=>{
    
   const  [data, isLoading, isError, error, refetch]=useAllCategories();
  
    return (<div>
      <h1>home</h1>
      {isLoading && <h4>isloading</h4>}
      {isError && <h4>error : {error}</h4>}
      {data}
     
  
    </div>)
}