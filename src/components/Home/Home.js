import React from "react";
import { useContext } from "react";
import { useSelector } from "react-redux";
import { AuthContext } from "../../Context/auth";
function Home() {
  const context = useContext(AuthContext);
  const total = useSelector((state) => state.Cart.total);
  const products = useSelector((state) => state.Cart.products);
  return (
    <div>
      <h1>Items in Cart: {total}</h1>
      <h1>
        Total Price:{" "}
        {products.reduce((acc, ele) => (acc += ele.price), 0).toFixed(2)} $
      </h1>
      <h1>Login State: {context.loggedIn.toString()}</h1>
    </div>
  );
}

export default Home;
