import "./App.css";
import RenderUsers from "./components/Users_Table";
import axios from "axios";
import { useState } from "react";
import { Outlet } from "react-router-dom";

function App() {
  const [users, setUsers] = useState([]);

  async function fetchUserData() {
    const response = await axios.get("https://randomuser.me/api/?results=10");
    setUsers(response.data.results);
  }

  return (
    <>
      <Outlet context={{ users, onLoadUsers: fetchUserData }} />
    </>
  );
}

export default App;
