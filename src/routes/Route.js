import React from 'react'
import {
    BrowserRouter,
    Routes,
    Route,
    useLocation,
    useHistory,
    useHref,
} from "react-router-dom";
import Login from '../pages/Login/Login';
import Dashboard from '../pages/Dashboard/Dashboard';
const Routing = () => {
  return (
    <>
        <BrowserRouter>
            <Routes>
                <Route path="login" element={<Login/>}/>
                <Route path="/" element={<Dashboard/>}/>
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default Routing