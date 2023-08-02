import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {LayOut} from "./components/Layout.tsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Login from "./pages/Login.tsx";
import {Provider} from "react-redux";
import {store} from "./store.ts";
import Register from "./pages/Register.tsx";

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<LayOut/>}>
                        <Route path="/auth/login" element={<Login/>}/>
                        <Route path="/auth/register" element={<Register/>}/>
                    </Route>
                    {/*<Route path="/" element={<AuthLayout/>}>*/}
                    {/*    <Route path="/layout" element={<LayOut/>}/>*/}
                    {/*</Route>*/}
                </Routes>
            </BrowserRouter>
        </Provider>
    </React.StrictMode>,
)
