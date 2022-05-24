import { collection, doc, getDocs } from "firebase/firestore/lite";
import React, { useEffect, useState } from "react";
import { db } from "./firebase";
import Order from "./Order";
import "./Orders.css";
import { useStateValue } from "./StateProvider";

function Orders() {
  const [{ cart, user }, dispatch] = useStateValue();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if (user) {
      const snapshotFn = async () => {
        const ordersRef = collection(db, "users", user?.uid, "orders");
        const ordersSnapshot = await getDocs(ordersRef); /* .orderBy(
          "created",
          "desc"
        ); */
        console.log("Snapshot log >>>", ordersSnapshot.docs);
        setOrders(
          ordersSnapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        );
      };
      snapshotFn();
    } else {
      setOrders([]);
    }
  }, [user]);
  console.log("Orders log >>>", orders);

  return (
    <div className="orders-container">
      <h1>Your Orders</h1>
      <div className="orders-inner">
        <div className="orders">
          {orders?.map((order) => (
            <Order order={order} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Orders;
