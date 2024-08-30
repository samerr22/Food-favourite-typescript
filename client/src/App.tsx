import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signin from "./pages/Signin";
import SignUp from "./pages/SignUp.tsx";
import Header from "./components/Header.tsx";
import Footer from "./components/Footer.tsx";
import PrivateRoute from "./components/PrivateRoute.tsx";

import Home from "./pages/Home.tsx";

import Profil from "./pages/profil.tsx";
import Fa from "./pages/favorite.tsx";
import Update from "./pages/update.tsx";



export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Signin />} />
        <Route path="/sign-up" element={<SignUp />} />


        <Route element={<PrivateRoute />}>
        <Route path="/profile" element={<Profil  />} />
        <Route path="/favourite" element={<Fa  />} />
        <Route path="/update/:upId" element={<Update />} />

          
          <Route path="/add" element={<Home />} />
         
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
