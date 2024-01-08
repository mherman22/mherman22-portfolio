import React from "react";
import ReactDOM from 'react-dom/client';
import { BrowserRouter as BRouter, Routes, Route } from 'react-router-dom';

import App from "./App";
import Resume from './pages/Resume.jsx';

const app = ReactDOM.createRoot(document.getElementById('app'));

app.render(
    <BRouter>
        <Routes>
            <Route path='/' element={<App />} />
            <Route path='resume' element={<Resume />} />
        </Routes>
    </BRouter>
);
