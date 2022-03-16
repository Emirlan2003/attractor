import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Auth from '../component/Auth/Auth';
import AuthComeback from '../component/AuthComeback/AuthComeback';
import HomePage from '../component/HomePage/HomePage';
import OtherDetails from '../component/OtherDetails/OtherDetails';
import OtherUser from '../component/OtherUser/OtherUser';

const MainRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Auth />} />
                <Route path="/comeback" element={<AuthComeback />} />
                <Route path="/home" element={<HomePage />} />
                <Route path="/other" element={<OtherUser />} />
                <Route path="/other/details/:id" element={<OtherDetails />} />
            </Routes>
        </BrowserRouter>
    );
};

export default MainRoutes;