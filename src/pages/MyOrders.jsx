
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function MyOrders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));

    fetch(`http://localhost:5000/orders/${currentUser.email}`)
      .then((res) => res.json())
      .then((data) => setOrders(data))
      .catch((err) => console.log(err));
  }, []);

  const handleCancelOrder = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to cancel this order?",
    );

    if (!confirmDelete) return;

    try {
      await fetch(`http://localhost:5000/order/${id}`, {
        method: "DELETE",
      });

      setOrders(orders.filter((order) => order._id !== id));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="orders-page">
      <h1>📦 My Orders</h1>

      {orders.map((order) => (
        <div className="order-card" key={order._id}>
          <div className="order-left">
            <h3>{order.books[0]?.title}</h3>

            <p>📅 {new Date(order.createdAt).toLocaleDateString()}</p>

            <p className="order-status">Delivered ✅</p>
          </div>

          <div className="order-right">
            <h2 className="order-price">₹{order.totalPrice}</h2>

            <div className="order-buttons">
              <Link to={`/order/${order._id}`}>
                <button className="details-btn">Order Details</button>
              </Link>

              <button
                className="cancel-btn"
                onClick={() => handleCancelOrder(order._id)}
              >
                Cancel Order
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export { MyOrders };


