import React from "react";
import HeaderBanner from "../HeaderBannner/HeaderBanner";

import { Product } from "../Product/Product";
import CategoriesCarousel from "./CategoriesCarousel/CategoriesCarousel";
import Flagship from "./FlagshipPhone/Flagship";

export const Home = () => {
  return (
    <div>
      <HeaderBanner></HeaderBanner>
      <CategoriesCarousel></CategoriesCarousel>
      <Flagship></Flagship>
      <Product></Product>
    </div>
  );
};
