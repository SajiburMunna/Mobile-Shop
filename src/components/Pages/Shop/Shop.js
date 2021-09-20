import React, { useState } from "react";
import { useEffect } from "react";
import { db } from "../../../config/Config";
import { productList } from "../../../redux/action.js";
import { useDispatch, useSelector } from "react-redux";
import BlackSaleDay from "../../../Images/BlackSaleDay.png";
import "./Shop.css";
import Footer from "../../../components/Footer/Footer";

const Shop = () => {
  const filterList = [
    {
      id: 11,
      name: "Samsung",
      value: "Samsung",
    },
    {
      id: 12,
      name: "Apple",
      value: "apple",
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
        <div className="filter-div">
          <h2>BRANDS</h2>
          <form>
            <label htmlFor="myInput">All</label>
            <input
              id="myInput"
              type="checkbox"
              onClick={() => onFilterChange("ALL")}
              checked={activeFilter.length === filterList.length}
            />
            <br />
            {filterList.map((filter) => (
              <React.Fragment>
                <label htmlFor={filter.id}>{filter.name}</label>
                <input
                  id={filter.id}
                  type="checkbox"
                  checked={activeFilter.includes(filter.value)}
                  onClick={() => onFilterChange(filter.value)}
                />
                <br />
              </React.Fragment>
            ))}
          </form>
        </div>

        <div>
          <div>
            <img
              style={{ width: "930px", height: "300px", marginRight: "100px" }}
              src={BlackSaleDay}
              alt=""
            />
          </div>
          <div className="shopcard-div">
            {filteredList.map((post) => (
              <div>
                <div className="shopcard">
                  <div>
                    <img
                      className="shopimg"
                      src={post.ProductImg}
                      alt="Denim Jeans"
                    />
                  </div>

                  <h4 style={{ marginTop: "5px" }}>{post.ProductName}</h4>
                  <p>Model-{post.ProductModel}</p>
                  <p className="shopprice">{post.ProductPrice} TK</p>

                  <p>
                    <button>Add to Cart</button>
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
