import React from "react";
import "./App.css";
import Home from "./Home";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import ShowDetails from "./component/ShowDetails";
import NavigationBar from "./component/Navbar";

function App() {
  return (
    <BrowserRouter>
      <NavigationBar></NavigationBar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/show" element={<ShowDetails />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
