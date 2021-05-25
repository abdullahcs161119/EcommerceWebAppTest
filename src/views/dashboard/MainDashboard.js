import React from "react";
import { MyNavbar } from "../../components/header/Navbar";
import { ProductCard } from "./../../components/ProductCard/ProductCard";

export const MainDashboard = () => {
  return (
    <section>
      <MyNavbar />
      <ProductCard />
    </section>
  );
};
