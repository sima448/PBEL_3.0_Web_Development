import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Profile() {
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("currentUser"));

  const [editing, setEditing] = useState(false);

  const [name, setName] = useState(user?.name || "");
  const [phone, setPhone] = useState(user?.phone || "");
  const [address, setAddress] = useState(user?.address || "");

  const handleLogout = () => {
    localStorage.removeItem("currentUser");
    navigate("/login");
  };

  const saveProfile = () => {
    if (!/^[0-9]{10}$/.test(phone)) {
      alert("Enter a valid 10 digit phone number");
      return;
    }

    const updatedUser = {
      ...user,
      name,
      phone,
      address,
    };

    localStorage.setItem("currentUser", JSON.stringify(updatedUser));

    setEditing(false);

    alert("Profile Updated Successfully");
  };

  return (
    <div className="profile-page">
      <div className="profile-card">
        <div className="profile-image">👤</div>

        <h1>{name}</h1>

        <p className="email">{user.email}</p>

        {editing ? (
          <>
            <input
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <input
              type="text"
              placeholder="Phone Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />

            <textarea
              placeholder="Address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            ></textarea>

            <button className="save-btn" onClick={saveProfile}>Save Profile</button>
          </>
        ) : (
          <>
            <div className="info-box">
              <h3>Personal Information</h3>

              <p>
                👤 Name :<span>{name}</span>
              </p>

              <p>
                📧 Email :<span>{user.email}</span>
              </p>

              <p>
                📱 Phone :<span>{phone || "Not Added"}</span>
              </p>

              <p>
                📍 Address :<span>{address || "Not Added"}</span>
              </p>
            </div>

            <button className="edit-btn" onClick={() => setEditing(true)}>
              Edit Profile
            </button>

            <div className="activity">
              <h3>My Activity</h3>

              <Link to="/orders" className="activity-link">
                📦 My Orders
              </Link>

              <Link to="/wishlist" className="activity-link">
                ❤️ Wishlist
              </Link>
            </div>

            <button className="logout-btn" onClick={handleLogout}>
              Logout
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export { Profile };
