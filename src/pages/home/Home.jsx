import React, { useState } from "react";
import { datas } from "../../datas";
import Datas from "./Datas";
import CategoryBtns from "../categoryBtns/CategoryBtns";

function Home() {
  const allButtons = ["All", "Films", "Fruits", "Phones"];
  const [products, setProducts] = useState(datas);
  const [categories, setCategories] = useState({
    All: true,
    Phones: false,
    Fruits: false,
    Films: false,
  });

 
  const changeCategory = (category, ) => {
    const filteredData = datas.filter((item) => item.category === category);
    category === "All" ? setProducts(datas) : setProducts(filteredData);
  

  };
  return (
    <div>
      <div className="flex w-full justify-center gap-4 my-3">
        {allButtons.map((item, index) => (
          <CategoryBtns
            key={index}
            categories={categories}
            setCategories={setCategories}
            changeCategory={changeCategory}
            item={item}
          />
        ))}
      </div>
      <div className="grid grid-cols-5 gap-5 px-10">
        {products.map((item) => (
          <Datas key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
}

export default Home;
