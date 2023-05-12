//import logo from './logo.svg';
//import './App.css';
import './components/css/anh.css';
//import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout";
import Home from "./components/navbar/home";
import Login from './components/navbar/login';
import UserProfile from './components/userProfile';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />}/>
          
        </Route>
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;

