import React from "react";
import LayoutClient from "./LayoutClient";
import Navbar from "@/components/Navbar";

export async function generateMetadata({ params }) {
  return {
    title: `Crypto Currencies Details of ${params.coinId}`,
  };
}

export default function Layout({ children, coinDetail, coinGraph }) {
  return (
    <LayoutClient coinDetail={coinDetail} coinGraph={coinGraph}>
      <Navbar />
      {children}
    </LayoutClient>
  );
}
