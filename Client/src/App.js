import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from "./components/Header/header"
import Footer from './components/Footer/footer';
import Home from './components/Home/home';


function App() {
  return (
    <Router>
      <div className="h-screen min-w-[680px] flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/home" element={<Home />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
