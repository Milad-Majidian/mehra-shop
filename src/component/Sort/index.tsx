import { useState } from "react";
import "./sortStyle.css";

const sort = [
  {
    id: 1,
    title: "پرفروش ترین ها",
  },
  {
    id: 2,
    title: "جدیدترین ها",
  },
  {
    id: 3,
    title: "پربازدیدترین ها",
  },
];

function Sort() {
  const [sortSelected, setSortSelected] = useState(0);
  return (
    <>
      <div className="home-products-sort">
        <div className="sort">
          {sort.map((item, index) => (
            <div
              key={index}
              onClick={() => setSortSelected(index)}
              className={`${sortSelected === index && "selected"} sort-item`}
            >
              <span className="">{item.title}</span>
            </div>
          ))}
        </div>
        <div className="observation-all">
          <span>مشاهده همه</span>
          <img src="/images/home/arrow-down.svg" alt="arrow-down" />
        </div>
      </div>
    </>
  );
}

export default Sort;
