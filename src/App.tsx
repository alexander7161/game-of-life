import React from "react";
import { useSelector } from "react-redux";
import "./App.css";

const App = () => {
  const hello = useSelector<{ hello: string }, string>((state) => state.hello);
  return <div>{hello}</div>;
};

export default App;
