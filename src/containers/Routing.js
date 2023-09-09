import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { MainPage } from '../pages';

const Routing = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Routing;
