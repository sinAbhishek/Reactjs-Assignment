import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import LiveTvIcon from "@mui/icons-material/LiveTv";
import axios from "axios";
import "./home.css";
const Home = () => {
  const [data, setdata] = useState([]);
  useEffect(() => {
    const call = async () => {
      const res = await axios.get("https://api.tvmaze.com/search/shows?q=all");
      setdata(res.data);
    };
    call();
  }, []);
  return (
    <div className="main-home w-screen ">
      <div className=" flex justify-center">
        <LiveTvIcon style={{ fontSize: "5rem", color: "#f02e54" }} />
      </div>

      <div className="w-screen h-screen  z-40 flex flex-wrap justify-center ">
        {data[0] &&
          data.map((c) => (
            <div className="wrapper w-1/5 h-1/2 m-2 rounded-md flex flex-col justify-center items-center">
              <div
                style={{
                  backgroundImage: `url(${c.show.image.medium})`,
                  backgroundPosition: "center center",
                  width: "80%",
                  height: "80%",
                }}
                className="card w-full h-full bg-cover rounded-lg"
              ></div>
              <div className="title text-lg text-white">
                <p>{c.show.name}</p>
              </div>
              <NavLink to={{ pathname: "/detail" }} state={c}>
                <button className="w-max bg-pink-500 text-white px-4 rounded-md mx-auto hover:bg-purple-600 transition duration-500">
                  Details
                </button>
              </NavLink>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Home;
