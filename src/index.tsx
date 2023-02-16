import React from 'react'
import './styles/index.css'
import { createRoot } from "react-dom/client";
const appContainer = document.getElementById("root");
const root = createRoot(appContainer);
root.render(<div className='test'>hello</div>);
