import React from "react";

import Show from "./show";
function ShowList(props) {
  const { showList } = props;
  return (
    <>
      <h3 className="text-primary">{props.title}</h3>
      <div
        className="element"
        style={{
          display: "flex",
          overflowX: "auto",
          // height: "400px",
          // msOverflowStyle: "none",
        }}
      >
        {showList.map((show) => {
          return <Show shows={show}></Show>;
        })}
      </div>
    </>
  );
}

export default ShowList;
