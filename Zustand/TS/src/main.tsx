
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import {BrowserRouter, Route, Routes} from "react-router";
import CountPage from "./pages/countPage.tsx";

createRoot(document.getElementById('root')!).render(
     <BrowserRouter>
        <Routes>
            <Route path={'/'} element={<App/>}></Route>
            <Route path={'/count'} element={<CountPage/>}></Route>
        </Routes>
     </BrowserRouter>
)
