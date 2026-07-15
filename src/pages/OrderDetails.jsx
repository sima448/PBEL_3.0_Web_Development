/* 
function OrderDetails() {
  return (
    <div className="order-details-page">
      <h1>📦 Order Details</h1>

      <div className="order-details-card">
        <div className="order-details-left">
          <h2>Order #ORD001</h2>

          <p>
            📅 Order Date: <b>15 July 2026</b>
          </p>

          <p>
            💳 Payment: <b>UPI</b>
          </p>

          <p className="order-status">🚚 Delivered ✅</p>

          <div className="items-box">
            <h3>📚 Items</h3>

            <div className="item-row">
              <span>React Basics</span>
              <span>Qty: 1</span>
            </div>
          </div>

          <p>
            📍 Address:
            <br />
            <b>Ghaziabad, Uttar Pradesh</b>
          </p>
        </div>

        <div className="order-details-right">
          <h2 className="order-total">₹500</h2>

          <button className="invoice-btn">Download Invoice</button>
        </div>
      </div>
    </div>
  );
}

export { OrderDetails };
*/

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function OrderDetails() {
  const { id } = useParams();

  const [order, setOrder] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/order/${id}`)
      .then((res) => res.json())
      .then((data) => setOrder(data))
      .catch((err) => console.log(err));
  }, [id]);

  if (!order) {
    return <h2>Loading...</h2>;
  }

  const groupedBooks = {};

  order.books.forEach((book) => {
    if (groupedBooks[book.title]) {
      groupedBooks[book.title]++;
    } else {
      groupedBooks[book.title] = 1;
    }
  });

  return (
    <div className="order-details-page">
      <h1>📦 Order Details</h1>

      <div className="order-details-card">
        <div className="order-details-left">
          <h2>Order #{order._id.slice(-6)}</h2>

          <p>
            📅 Order Date:
            <b> {new Date(order.createdAt).toLocaleDateString()}</b>
          </p>

          <p>
            💳 Payment:
            <b> UPI</b>
          </p>

          <p className="order-status">🚚 Delivered ✅</p>

          <div className="items-box">
            <h3>📚 Items</h3>

            {Object.entries(groupedBooks).map(([title, qty]) => (
              <div className="item-row" key={title}>
                <span>{title}</span>
                <span>Qty: {qty}</span>
              </div>
            ))}
          </div>

          <p>
            📍 Address:
            <br />
            <b>{order.address}</b>
          </p>
        </div>

        <div className="order-details-right">
          <h2 className="order-total">₹{order.totalPrice}</h2>
          <button className="invoice-btn" onClick={() => window.print()}>
            Download Invoice
          </button>{" "}
        </div>
      </div>
    </div>
  );
}

export { OrderDetails };