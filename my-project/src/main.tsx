import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {Provider} from "react-redux";
import {store} from "./store.ts";
import {LayOut} from "./components/Layout.tsx";

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <Provider store={store}>
            <LayOut/>
        </Provider>
    </React.StrictMode>,
)
