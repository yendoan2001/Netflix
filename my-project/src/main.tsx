import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {LayOut} from "./components/Layout.tsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Login from "./pages/Login.tsx";
import {Provider} from "react-redux";
import {store} from "./store.ts";
import Register from "./pages/Register.tsx";
import Movies from "./pages/Movies.tsx";
import Home from "./pages/Home";
import {Contact} from "./pages/Contact.tsx";
import {ProfileUpdate} from "./pages/ProfileUpdate.tsx";
import {ChangePassword} from "./pages/ChangePassword.tsx";
import {FavoriteMovies} from "./pages/FavoriteMovies.tsx";


ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<LayOut/>}>
                        <Route path="/auth/login" element={<Login/>}/>
                        <Route path="/auth/register" element={<Register/>}/>
                        <Route path="/home/movies" element={<Movies/>}/>
                        <Route path="/home" element={<Home/>}/>
                        <Route path="/home/contact" element={<Contact/>}/>
                        <Route path="/user/profile" element={<ProfileUpdate/>}/>
                        <Route path="/user/password" element={<ChangePassword/>}/>
                        <Route path="/user/favorite" element={<FavoriteMovies/>}/>
                    </Route>
                </Routes>
            </BrowserRouter>
        </Provider>
    </React.StrictMode>,
)
