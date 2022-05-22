import "./App.css";
import Header from "./Header";
import Home from "./Home";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useLocation,
  Navigate,
} from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login";
import { useEffect } from "react";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import Payment from "./Payment";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

/* const location = useLocation(); */
const stripePromise = loadStripe(
  "pk_test_51HDhgKLaiTqOxKULrwu4c6bA4kvN74wnU1A8eYPl96prqh38N8HkRg1AdBRe06vnjDzmpDC2fOVMrmdQyforQ9Ko00VQyaJnk5"
);

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log("User is ", authUser);
      if (authUser) {
        // user just logged in / user was logged in
        dispatch({
          type: "setUser",
          user: authUser,
        });
      } else {
        // user is logged out
        dispatch({
          type: "setUser",
          user: null,
        });
      }
    });
  }, []);

  return (
    <Router>
      <div className="app">
        {/* {location.pathname !== "/login" && <Header />} */}
        <Header />
        <div className="main">
          <Routes>
            <Route
              path="/payment"
              element={
                <Elements stripe={stripePromise}>
                  <Payment />
                </Elements>
              }
            />
            <Route path="/login" element={<Login />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/*" element={<Home />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
