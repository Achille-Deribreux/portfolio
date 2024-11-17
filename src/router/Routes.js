import React from "react";
import HomeDark from "../views/all-home-version/HomeDark";
import NotFound from "../views/NotFound";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ScrollTopBehaviour from "../components/ScrollTopBehaviour";

const RoutesComponent = () => {
    return (
        <>
            <Router>
                <ScrollTopBehaviour />
                <Routes>  {/* Utilisation de Routes au lieu de Switch */}
                    <Route path="/" element={<HomeDark />} />  {/* Remplacer `component` par `element` */}
                    <Route path="*" element={<NotFound />} />  {/* Ajouter path="*" pour gérer les routes non définies */}
                </Routes>
            </Router>
        </>
    );
};

export default RoutesComponent;
