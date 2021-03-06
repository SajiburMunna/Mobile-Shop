import React, { useState } from "react";
import { useEffect } from "react";
import { db } from "../../../config/Config";
import { productList, addToCart } from "../../../redux/action.js";
import { useDispatch, useSelector } from "react-redux";
import BlackSaleDay from "../../../Images/BlackSaleDay.png";
import "./Shop.css";
import Footer from "../../../components/Footer/Footer";
import { useHistory } from "react-router";

const Shop = () => {
  let history = useHistory();

  function handleClick(key) {
    history.push(`/productshow/${key}`);
  }
  const filterList = [
    {
      id: 11,
      name: "Samsung",
      value: "Samsung",
    },
    {
      id: 12,
      name: "Apple",
      value: "Apple",
    },
    {
      id: 13,
      name: "GOOGLE",
      value: "Google",
    },
    {
      id: 14,
      name: "XIAOMI",
      value: "Xiaomi",
    },
  ];

  const [activeFilter, setActiveFilter] = useState([]);

  const dispatch = useDispatch();
  const reduxStore = useSelector((state) => state.List);
  const [searchLists, setSearchLists] = useState(reduxStore);
  console.log(searchLists);

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
      setSearchLists(getPostsFromFirebase);
    });
    return () => subscriber();
  }, []);

  const onFilterChange = (filter) => {
    if (filter === "ALL") {
      if (activeFilter.length === filterList.length) {
        setActiveFilter([]);
      } else {
        const f = filterList.map((filter) => filter.value);
        setActiveFilter(f);
      }
    } else {
      if (activeFilter.includes(filter)) {
        const filterIndex = activeFilter.indexOf(filter);
        const newFilter = [...activeFilter];
        newFilter.splice(filterIndex, 1);
        setActiveFilter(newFilter);
      } else {
        const a = [...activeFilter, filter];
        setActiveFilter(a);
      }
    }
  };

  var filteredList;
  if (activeFilter.length === 0 || activeFilter.length === filterList.length) {
    filteredList = searchLists;
  } else {
    filteredList = searchLists.filter((item) =>
      activeFilter.includes(item.ProductName)
    );
  }
  console.log(filteredList);

  return (
    <>
      <div className="flex-div">
        <div className="brand-div">
          <h2>BRANDS</h2>
          <form>
            <input
              id="myInput"
              type="checkbox"
              onClick={() => onFilterChange("ALL")}
              checked={activeFilter.length === filterList.length}
            />
            <label htmlFor="myInput">All</label>
            <br />
            {filterList.map((filter) => (
              <React.Fragment>
                <input
                  id={filter.id}
                  type="checkbox"
                  checked={activeFilter.includes(filter.value)}
                  onClick={() => onFilterChange(filter.value)}
                />
                <label htmlFor={filter.id}>{filter.name}</label>
                <br />
              </React.Fragment>
            ))}
          </form>
        </div>

        <div>
          <div>
            <img className="BlackSaleDay-img " src={BlackSaleDay} alt="" />
          </div>
          <div className="Shop-row">
            {filteredList.map((post) => (
              <div className="Shop-column">
                <div className="Shop-card">
                  <div
                    style={{ cursor: "pointer" }}
                    onClick={() => handleClick(post.key)}
                  >
                    <div>
                      <img
                        className="Shop-img"
                        src={post.ProductImg}
                        alt="Denim Jeans"
                      />
                    </div>

                    <h4 style={{ marginTop: "5px" }}>{post.ProductName}</h4>
                    <p>Model-{post.ProductModel}</p>
                    <p className="shopprice">{post.ProductPrice} TK</p>
                  </div>
                  <p>
                    <button
                      onClick={() => dispatch(addToCart({ ...post, qty: 1 }))}
                    >
                      Add to Cart
                    </button>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Shop;
