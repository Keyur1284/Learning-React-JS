/* eslint-disable no-unused-vars */
import "./App.css";
import React, { useEffect, useState } from "react";
import Axios from "axios"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Profile } from "./pages/Profile";
import { Contact } from "./pages/Contact";
import { Navbar } from "./pages/Navbar";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

function App() {

  const client = new QueryClient ({defaultOptions:{
    queries: {
      refetchOnWindowFocus: true,
    }
  }});

  return (
    <div className="App container">
      <QueryClientProvider client={client}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<h1 className="display-1 text-danger">Error 404! Page not Found!</h1>} />
        </Routes>
      </Router>
      </QueryClientProvider>
    </div>
  );
}

export default App;