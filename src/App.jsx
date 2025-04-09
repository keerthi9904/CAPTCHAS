import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Mainpage from "./pages/Mainpage";
import CategoryMeals from "./components/CategoryMeals";
import Layout from "./components/Layout";
import { CartContextProvider } from "./store/CartContext";
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";

function App() {
  return (
    <CartContextProvider> {/* Shared cart across pages */}
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/LoginPage" element={<LoginPage/>}/>
          
          {/* Layout wraps Mainpage and CategoryMeals */}
          <Route element={<Layout />}>
            <Route path="/main" element={<Mainpage />} />
            <Route path="/main/category/:categoryName" element={<CategoryMeals />} />
          </Route>
        </Routes>
      </Router>
    </CartContextProvider>
  );
}

export default App;
