import * as React from 'react'
import { createRoot } from "react-dom/client";
import './styles/index.css'
import './styles/index.scss'
import  image from 'assets/images/morteza.jpg'

const appContainer = document.getElementById("root");
const root = createRoot(appContainer);
root.render(<div className='test d-flex bg-dark text-white  gotham-Light-font'>
    <img
    
    src={image}
    />
font added with classname  gotham-Light-font and vazir-regular-font
</div>);
