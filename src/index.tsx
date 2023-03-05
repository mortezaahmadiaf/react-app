import React from 'react'
import './styles/index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { createRoot } from "react-dom/client";
const appContainer = document.getElementById("root");
const root = createRoot(appContainer);
root.render(<div className='test bg-primary'>hello</div>);
