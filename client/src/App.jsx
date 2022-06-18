import React from "react";
import Chatbot from "react-chatbot-kit";
import "./App.css";
import "react-chatbot-kit/build/main.css";

import ActionProvider from "./ActionProvider";
import MessageParser from "./MessageParser";
import config from "./config";
import Return from "./Return";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App(){
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" 
        element={
        <>
          <div className="App">
            <header className="App-header">
              <Chatbot config={config} actionProvider={ActionProvider} messageParser={MessageParser} />
            </header>
          </div>
        </>}>
        </Route>
        <Route path="/return" element={<Return />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;