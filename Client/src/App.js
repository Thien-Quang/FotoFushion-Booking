import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from "./components/Header/header";
import Footer from './components/Footer/footer';
import { router } from '../src/routes/index';

function App() {
  return (
    <Router>
      <div className="h-screen min-w-[680px] flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            {router.map((route) => (
              <Route key={route.path} path={route.path} element={<route.component />} />
            ))}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;