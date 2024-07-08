
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/pages/Home';
import Filme from  './components/pages/Filme';
import Favoritos from './components/pages/Favoritos'

import Erro from './components/pages/Erro'

import Header from './components/Header'



function RoutesApp(){
    return(
        
        <BrowserRouter>
        <Header/>
        <Routes>
            <Route path="/" element={ <Home/>} />
            <Route path="/filme/:id" element={ <Filme/> } />
            <Route path="/favoritos" element={ <Favoritos/> } />


            <Route path="*" element={ <Erro/> } />
        </Routes>
        </BrowserRouter>
    )
}

export default RoutesApp;
