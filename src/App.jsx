import { useState } from "react";
import "./App.css";
import WindowManager from "./components/WindowManager";
function App() {
  return (
    <>
      <h1 className="text-3xl font-bold w-full text-center">Welcome</h1>
      <WindowManager />
    </>
  );
}

export default App;
