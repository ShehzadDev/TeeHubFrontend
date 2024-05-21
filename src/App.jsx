import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Design from "./pages/Design";
import Home from "./pages/Home";
import SizeSelector from "./components/Configurator/SizeSelector";
import Payment from "./pages/Payment";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import ResetPassword from "./pages/ResetPassword";

const App = () => {
  const handleAddToCart = (data) => {
    console.log("Item added to cart:", data);
  };

  const handleDiscard = () => {
    console.log("Discarded");
  };

  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/design" element={<Design />} />
          <Route
            path="/size-selector"
            element={
              <SizeSelector
                onAddToCart={handleAddToCart}
                onDiscard={handleDiscard}
              />
            }
          />
          <Route path="/payment" element={<Payment />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="*" element={<Navigate to="/" />} />{" "}
          {/* Redirect any unmatched route to home */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
