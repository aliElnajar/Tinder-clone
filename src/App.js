import { Navigate, Route, Routes } from "react-router-dom";
import Navbar from "./components/generalUI/Navbar";
import Chats from "./Pages/Chats";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import SingleChat from "./Pages/SingleChat";
import ProtectedRoutes from "./components/helpers/ProtectedRoutes";
import { onAuthStateChanged, getAuth } from "firebase/auth";
import { useEffect, useState } from "react";

function App() {
  const auth = getAuth();
  const [authenticated, setAuthenticated] = useState("");

  useEffect(() => {
    onAuthStateChanged(auth, (data) => setAuthenticated(data));
  }, []);

  return (
    <>
      <Navbar auth={auth} authenticated={authenticated} />
      <Routes>
        <Route
          path="/login"
          element={!authenticated ? <Login auth={auth} /> : <Navigate to="/" />}
        />
        <Route element={<ProtectedRoutes authenticated={authenticated} />}>
          <Route path="/" element={<Home />} />
          <Route path="/chats" element={<Chats />} />
          <Route path="/chats/:person" element={<SingleChat />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
