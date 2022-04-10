import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const Shipment = () => {
  const [user] = useAuthState(auth)
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [error, setError] = useState("");
  // const navigate = useNavigate();

  const handleNameBlur = (e) => {
    setName(e.target.value);
  };
  const handleEmailBlur = (e) => {
    setEmail(e.target.value);
  };
  const handleAddressBlur = (e) => {
    setAddress(e.target.value);
  };
  const handlePhoneNumber = (e) => {
    setPhoneNumber(e.target.value);
  };

  const handleCreateUser = (e) => {
    e.preventDefault();
    const shippingInfo = {name,email,address,phoneNumber}
    console.log(shippingInfo);
  };

  return (
    <div>
      <div className="form-container">
        <div>
          <h1 className="form-title">Shipping Information</h1>
          <form className="input-group" onSubmit={handleCreateUser}>
            <label htmlFor="name">Your Name</label>
            <input onBlur={handleNameBlur} required type="text" name="name" />
            <label htmlFor="email">Your Email</label>
            <input
              value={user?.email} readOnly
              // required
              type="email"
              name="email"
            />
            <label htmlFor="address">Address</label>
            <input
              onBlur={handleAddressBlur}
              required
              type="text"
              name="address"
            />
            <label htmlFor="phoneNumber">Phone Number</label>
            <input
              onBlur={handlePhoneNumber}
              required
              type="text"
              name="phoneNumber"
            />
            <p style={{ color: "red" }}>{error}</p>
            <input className="form-submit" type="submit" value="Add Shipping" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Shipment;
