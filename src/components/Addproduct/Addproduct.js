import React, { useState } from "react";
import { storage } from "../../config/Config";
import { db } from "../../config/Config";

const Addproduct = () => {
  const [productName, setProductName] = useState("");
  const [productModel, setProductModel] = useState("");
  const [productPrice, setProductPrice] = useState(0);
  const [productImg, setProductImg] = useState(null);
  const [error, setError] = useState("");

  const types = ["image/png", "image/jpeg"]; // image types

  const productImgHandler = (e) => {
    let selectedFile = e.target.files[0];
    if (selectedFile && types.includes(selectedFile.type)) {
      setProductImg(selectedFile);
      setError("");
    } else {
      setProductImg(null);
      setError("Please select a valid image type (jpg or png)");
    }
  };

  // add product
  const addProduct = (e) => {
    e.preventDefault();
    const uploadTask = storage
      .ref(`product-images/${productImg.name}`)
      .put(productImg);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log(progress);
      },
      (err) => setError(err.message),
      () => {
        storage
          .ref("product-images")
          .child(productImg.name)
          .getDownloadURL()
          .then((url) => {
            db.collection("Products")
              .add({
                ProductModel: productModel,
                ProductName: productName,
                ProductPrice: Number(productPrice),
                ProductImg: url,
              })
              .then(() => {
                setProductModel("");
                setProductName("");
                setProductPrice(0);
                setProductImg("");
                setError("");
                document.getElementById("file").value = "";
              })
              .catch((err) => setError(err.message));
          });
      }
    );
  };
  return (
    <div>
      <h1>Add Products</h1>
      <form onSubmit={addProduct}>
        <label htmlFor="product-name">Model</label>
        <br />
        <input
          type="text"
          required
          onChange={(e) => setProductModel(e.target.value)}
          value={productModel}
        />
        <br />
        <label htmlFor="product-name">Product Name</label>
        <br />
        <input
          type="text"
          required
          onChange={(e) => setProductName(e.target.value)}
          value={productName}
        />
        <br />
        <label htmlFor="product-name">Price</label>
        <br />
        <input
          type="number"
          required
          onChange={(e) => setProductPrice(e.target.value)}
          value={productPrice}
        />
        <br />
        <label htmlFor="image">Image</label>
        <br />
        <input type="file" onChange={productImgHandler} />
        <br />
        <br />
        <button>Add Product</button>
      </form>

      {error && <span>{error}</span>}
    </div>
  );
};

export default Addproduct;
