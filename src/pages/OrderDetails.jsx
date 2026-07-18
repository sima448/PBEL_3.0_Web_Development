import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

function OrderDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [order, setOrder] = useState(null);

  useEffect(() => {
    fetch(`https://bookverse-backend-ti49.onrender.com/order/${id}`)
      .then((res) => res.json())
      .then((data) => setOrder(data))
      .catch((err) => console.log(err));
  }, [id]);

 if (!order) {
   return <h2>Loading...</h2>;
 }

 if (order.message) {
   return <h2>Order Not Found</h2>;
 }
 const groupedBooks = {};

 if (order?.books) {
   order.books.forEach((book) => {
     if (groupedBooks[book.title]) {
       groupedBooks[book.title]++;
     } else {
       groupedBooks[book.title] = 1;
     }
   });
 }

 const handleCancelOrder = async () => {
   const confirmCancel = window.confirm(
     "Are you sure you want to cancel this order?",
   );

   if (!confirmCancel) return;

   try {
     const response = await fetch(
       `https://bookverse-backend-ti49.onrender.com/order/${order._id}`,
       {
         method: "DELETE",
       },
     );

     const data = await response.json();

     if (!response.ok) {
       alert(data.message);
       return;
     }

     alert("❌ Order Cancelled Successfully");

     navigate("/orders");
   } catch (error) {
     console.log(error);
     alert("Something went wrong");
   }
 };

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
            <b>{order.address || "Address Not Available"}</b>
          </p>
        </div>

        <div className="order-details-right">
          <h2 className="order-total">₹{order.totalPrice}</h2>

          <button className="invoice-btn" onClick={() => window.print()}>
            Download Invoice
          </button>

          <button className="cancel-btn" onClick={handleCancelOrder}>
            Cancel Order
          </button>
        </div>
      </div>
    </div>
  );
}

export { OrderDetails };