import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Home from "../Home";

export default function ShowDetails() {
  const { currentShow, api } = useSelector((state) => state.show);
  const {
    name,
    status,
    image,
    runtime,
    language,
    schedule,
    network,
    genres,
    rating,
  } = currentShow;
  const [showData, setShowData] = useState("");
  useEffect(() => {
    if (api) {
      fetch(api)
        .then((resp) => resp.json())
        .then((data) => setShowData(data));
    }
  }, [api]);
  if (currentShow) {
    return (
      <>
        <div className="row">
          <h2 className="text-primary">{name}</h2>
          <div className="col-sm-3">
            <div className="card">
              <div className="card-body">
                <img className="card-img-top" src={image.medium} alt=""></img>
                <button href="#" className="btn btn-primary mt-2">
                  Watch Trailer
                </button>
              </div>
            </div>
          </div>
          <div className="col-sm-6 ">
            <div className="card-body">
              <h6 className="card-title text-primary">Summary</h6>
              <p className="card-text">{currentShow.summary}</p>
            </div>
          </div>
          <div className="col-sm-3 ">
            <div className="card">
              <ul className="list-group list-group-flush">
                <li className="list-group-item text-primary">
                  <h6>Show Info</h6>
                </li>
                <li className="list-group-item">
                  Genres: {genres[0]}|{genres[1]}|{genres[2]}
                </li>
                <li className="list-group-item">Network: {network.name}</li>
                <li className="list-group-item">
                  Schedule: {schedule.days} {schedule.time}
                </li>
                <li className="list-group-item">Status: {status}</li>
                <li className="list-group-item">Runtime: {runtime}</li>
                <li className="list-group-item">Language: {language}</li>
                <li className="list-group-item">
                  County: {network.country.name}
                </li>
                <li className="list-group-item">
                  Rating : {rating.average}/10
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-3">
            <div className="card">
              <ul className="list-group list-group-flush">
                <li className="list-group-item ">
                  <h6 className="text-primary">
                    Latest Episode: {showData.name}
                  </h6>
                </li>
                <li className="list-group-item">
                  Air Date: {showData.airdate}
                </li>
                {console.log(rating)}
                <li className="list-group-item">
                  Air Time: {showData.airtime}
                </li>
                <li className="list-group-item">
                  Episode: {showData.season}X{showData.number}
                </li>
              </ul>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="card">
              <ul className="list-group list-group-flush">
                <li className="list-group-item ">{showData.summary}</li>
              </ul>
            </div>
          </div>
          <div className="col-sm-3">
            <div className="card">
              <ul className="list-group list-group-flush">
                <li className="list-group-item ">
                  <img src={showData ? showData.image.medium : ""}></img>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </>
    );
  }
  return <Home></Home>;
}
