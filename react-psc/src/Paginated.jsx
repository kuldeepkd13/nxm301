import React, { useState, useEffect } from "react";
import style from "./Paginated.module.css";

// my api will give me a
// 1. few array of object
// 2. current page
// 3. Total no of pages

// ! https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-coffee?limit=5&&page=1
function Paginated() {
  const [curr_page, setCurr_page] = useState(1);
  const [fetchedData, setFetchedData] = useState([]);
  const [pages, setPages] = useState([]);
  useEffect(() => {
    fetch(
      `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-coffee?limit=5&&page=${curr_page}`
    )
      .then((res) => res.json())
      .then((data) => {
        setFetchedData(data.data);
        const page = []; // [1,2,3,4]
        for (let i = 1; i <= data.totalPages; i++) {
          page.push(i);
        }
        setPages(page);
      });
  }, [curr_page]);

  return (
    <div>
      {fetchedData.map((element) => {
        return (
          <h1 className={style.red} key={element.id}>
            {element.title}
          </h1>
        );
      })}
      {pages.map((ele) => {
        return (
          <button
            onClick={() => {
              setCurr_page(ele);
            }}
            key={ele}
          >
            {ele}
          </button>
        );
      })}
    </div>
  );
}

export default Paginated;
