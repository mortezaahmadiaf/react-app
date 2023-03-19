import  React from "react";
import {
  RouterProvider,
} from "react-router-dom";
import {router} from './router'


const Spinner=()=>{
    return<div>loading...</div>
}


   export const App= ()=>{return<RouterProvider router={router}  fallbackElement={<Spinner/>}/>}
