import React from "react";
import { Search } from "./search";
import CardInfo from "./CardInfo";

const Home = () => {
  return (
    <div className="p-6">
      <Search />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
        <CardInfo title="React" description="JS library for UI." />
        <CardInfo title="Vite" description="Fast build tool." />
      </div>
    </div>
  );
};

export default Home;
