import React from "react";
import { Link } from "react-router-dom";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import "./styles/AccountListsItem.css";

function AccountListsItem({ link, signOut, placeholder, click }) {
  const [{ cart, user }, dispatch] = useStateValue();

  return (
    <Link to={signOut ? !user && "/login" : link} onClick={click}>
      <span className="account-lists-item">{placeholder}</span>
    </Link>
  );
}

export default AccountListsItem;
