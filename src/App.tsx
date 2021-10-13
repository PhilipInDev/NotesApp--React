import React from 'react';
import './App.scss';
import NotesPage from "./pages/NotesPage/NotesPage";
import {BrowserRouter} from "react-router-dom";

const App = () => {
  return (
      <BrowserRouter>
          <div className="app-wrapper">
              <NotesPage/>
          </div>
      </BrowserRouter>
  );
}

export default App;
