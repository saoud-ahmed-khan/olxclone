import React from "react";
import { FeaturedItems } from "../Featured items/FeaturedItems";
import { Fresh } from "../FreshRecomendation/Fresh";
import { Banner } from "../Banner/Banner";
import { MiniCat } from "../MiniCat/MiniCat";



export function Home() {
  return (
    <div>
      <MiniCat />
      <Banner />
      <FeaturedItems />
      <Fresh />
    </div>
  );
}
