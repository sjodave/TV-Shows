import React from "react";
import { useNavigate } from "react-router-dom";
import { setCurrentShow } from "../redux/reducer";
import { useDispatch } from "react-redux";
function Show(props) {
  const { name } = props.shows;
  const { original } = props.shows.image;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <>
      <div
        className="showGrid"
        value={props}
        onClick={(e) => {
          dispatch(setCurrentShow(props.shows));
          navigate("/show");
        }}
      >
        <img
          src={original}
          alt={name}
          style={{
            height: "250px",
            width: "250px",
            borderRadius: "5px",
          }}
        />
      </div>
    </>
  );
}
export default Show;
