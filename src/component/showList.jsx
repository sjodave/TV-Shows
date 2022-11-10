import React from "react";
import { Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Pages from "./Pages";
import Show from "./show";

function ShowList({ showList, title, display }) {
  const title_Name_Style = { display: "flex", justifyContent: "space-between" };
  const className = display ? display : "element";

  return (
    <div className="showListName">
      <div style={title_Name_Style}>
        <h6 className="category-title">{title}</h6>
        {!display ? <Link to={title}>Expand</Link> : <Link to={"/"}>Home</Link>}
      </div>
      <div className={className}>
        {showList.map((show, index) => {
          return (
            <div className="col-4 col-md-3 col-lg-2" key={index}>
              <Show shows={show}></Show>
            </div>
          );
        })}
      </div>
      {display ? <Pages></Pages> : ""}
    </div>
  );
}

export default ShowList;
