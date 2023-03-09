import * as React from 'react'
import { createRoot } from "react-dom/client";
import './styles/index.css'
import './styles/index.scss'
import  image from 'assets/image/morteza.jpg'
const appContainer = document.getElementById("root");
const root = createRoot(appContainer);
root.render(<div className='test d-flex bg-dark text-white'>
    <img
    
    src={image}
    />
</div>);
