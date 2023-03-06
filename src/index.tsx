
import React from 'react'
import './styles/index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { createRoot } from "react-dom/client";
import * as React from 'react'
import './styles/index.css'
import './styles/index.scss'
const appContainer = document.getElementById("root");
const root = createRoot(appContainer);
root.render(<div className='test d-flex bg-dark text-white'>hello</div>);
