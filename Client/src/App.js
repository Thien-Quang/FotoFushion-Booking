import React from "react";
import "./App.css";
import "react-big-calendar/lib/css/react-big-calendar.css";
import BookingPage from "./pages/BookingPage_v2";
import AlbumPage from "./pages/AlbumPage";
import EquipmentPage from "./pages/Equipment/EquipmentPage";

function App() {
  return (
    <div style={{ background: "#000" }} className="py-5">
      <EquipmentPage />
    </div>
  );
}

export default App;
