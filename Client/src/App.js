import React from "react";
import "./App.css";
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header/header";
import Footer from "./components/Footer/footer";
import { router } from "../src/routes/index";

function App() {
  return (
    <Router>
      <div className="fixed top-0 w-full z-50">
        <Header />
      </div>
      <div className="h-screen min-w-[680px] flex flex-col">
        <main className="flex-grow">
          <Routes>
            {router.map((route) => (
              <Route
                key={route.path}
                path={route.path}
                element={<route.component />}
              />
            ))}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;