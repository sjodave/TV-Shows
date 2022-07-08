import React from "react";
import "../App.css";
import Show from "./show";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function ShowList(props) {
  const { showList } = props;
  const className = props.className ? props.className : "element";
  const { loading } = useSelector((state) => state.show);
  const navigate = useNavigate();
  return (
    <div className="showListRow">
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h6 className="category-title">{loading ? null : props.title}</h6>
        <a
          href="#"
          onClick={() => {
            navigate(`/${props.title}`);
          }}
        >
          Expand
        </a>
      </div>
      <div className={className}>
        {showList.map((show) => {
          return (
            <div className="col-sm-2 col-4">
              <Show shows={show}></Show>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ShowList;
