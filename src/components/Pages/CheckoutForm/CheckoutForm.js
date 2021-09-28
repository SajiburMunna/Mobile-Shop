import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { auth, db } from "../../../config/Config";

const CheckoutForm = () => {
  const history = useHistory();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        db.collection("SignedUpUsersData")
          .doc(user.uid)
          .onSnapshot((snapshot) => {
            setName(snapshot.data().Name);
            setEmail(snapshot.data().Email);
          });
      } else {
        history.push("/signuppage");
      }
    });
  });

  return (
    <div>
      <h1> {name}</h1>
      <h1> {email}</h1>
    </div>
  );
};

export default CheckoutForm;
