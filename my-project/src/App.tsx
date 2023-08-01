import {BrowserRouter, Route, Routes} from "react-router-dom";
import {NavBar} from "./components/Layout.tsx";
import Home from "./pages/Home.tsx";
import {Register} from "./pages/Register.tsx";

function App() {
  return (
    <>
        <BrowserRouter>
            <Routes>
                <Route path="auth/login" element={<NavBar/>}>
                    <Route index element={<Home/>}/>
                    <Route path="/auth/register" element={<Register/>}/>
                    <Route path="auth/login" element={<NavBar/>}/>
                    {/*<Route path="*" element={<NoPage/>}/>*/}
                </Route>
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
