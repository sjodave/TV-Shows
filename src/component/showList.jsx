import React from "react";
import { Link } from "react-router-dom";
import Show from "./show";

function ShowList({ showList, title, display }) {
  const title_Name_Style = { display: "flex", justifyContent: "space-between" };
  const className = display ? display : "element";

  return (
    <div className="showListName">
      <div style={title_Name_Style}>
        <h6 className="category-title">{title}</h6>
        <Link to={title}>Expand</Link>
      </div>
      <div className={className}>
        {showList.map((show, index) => {
          return (
            <div className="col-sm-2 col-4" key={index}>
              <Show shows={show}></Show>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ShowList;
