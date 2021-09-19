/* eslint-disable array-callback-return */
import React, { useEffect } from "react";
import { db } from "../../config/Config";
import { productList } from "../../redux/action";
import { useDispatch, useSelector } from "react-redux";

export const Product = () => {
  const dispatch = useDispatch();
  const reduxStore = useSelector((state) => state);
  console.log(reduxStore);
  useEffect(() => {
    const getPostsFromFirebase = [];
    const subscriber = db.collection("Products").onSnapshot((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        getPostsFromFirebase.push({
          ...doc.data(), //spread operator
          key: doc.id, // `id` given to us by Firebase
        });
      });

      dispatch(productList(getPostsFromFirebase));
    });
    return () => subscriber();
  }, []);

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>New Arival</h1>
      {reduxStore.List.length > 0 ? (
        reduxStore.List.map((post) => <h2>{post.ProductName}</h2>)
      ) : (
        <h1>No products Available:(</h1>
      )}
    </div>
  );
};
