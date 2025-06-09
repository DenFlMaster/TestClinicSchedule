import {createRoot} from 'react-dom/client'
import './index.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import WelcomePage from "@/routes/WelcomePage.tsx";
import Schedule from "@/routes/schedule/Schedule.tsx";
import Header from "@/routes/header/Header.tsx";
import NotFoundPage from "@/routes/not-found/NotFoundPage.tsx";

createRoot(document.getElementById('root')!).render(
    <BrowserRouter>
        <Routes>
            <Route element={<Header/>}>
                <Route path="/" element={<WelcomePage/>}/>
                <Route path="/schedule" element={<Schedule/>}/>
                <Route path="*" element={<NotFoundPage/>}/>
            </Route>
        </Routes>
    </BrowserRouter>
)
