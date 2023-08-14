import React from 'react';
import { BrowserRouter } from "react-router-dom";
import All_routes from "./All_routes";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <All_routes />
      </BrowserRouter>
    </div>
  );
}

export default App;
