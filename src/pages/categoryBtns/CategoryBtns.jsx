import React from "react";

function CategoryBtns({ item, changeCategory, categories, setCategories }) {

  // console.log(categories);
// console.log(active);
  const handleChangeBtn = () => {
    changeCategory(item);
      const obj = {
        All:true,
        Films: false,
        Phones:false,
        Fruits: false,
        [item]:true
      }
      setCategories(obj)
  // categories[item] === true ? categories[item] === "bg-red-400" : categories[item]
  }
  return (
    <button
      onClick={handleChangeBtn}
      className={`${
        categories[item] ? "bg-amber-600" : "bg-black"
      } text-white p-5 rounded-xl`}
    >
      {item}
    </button>
  );
}

export default CategoryBtns
