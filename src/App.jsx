import React from "react";
import HomePage from "./pages/Home";
import RoomPage from "./pages/Room";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div className="app_container">
    <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/room/:roomId" element={<RoomPage/>}/>
    </Routes>
    </div>
  );
};

export default App;
