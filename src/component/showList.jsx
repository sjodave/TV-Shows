import React from "react";
import "../App.css";
import Show from "./show";
function ShowList(props) {
  const { showList } = props;
  return (
    <>
      <h5 className="text-primary">{props.title}</h5>
      <div className={props.className ? props.className : "element"}>
        {showList.map((show) => {
          return <Show shows={show}></Show>;
        })}
      </div>
    </>
  );
}

export default ShowList;
