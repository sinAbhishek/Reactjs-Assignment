import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./detail.css";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { pink } from "@mui/material/colors";
import CloseIcon from "@mui/icons-material/Close";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
const Detail = () => {
  const location = useLocation();
  const [details, setdetails] = useState("");
  const [modalShow, setModalShow] = useState(false);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    console.log(location);
    setdetails(location.state.show);
  }, []);

  return (
    <>
      {details && (
        <div className="">
          <div
            className="back-cover"
            style={{
              backgroundImage: `linear-gradient(to top,rgba(0,0,0,1)10%,rgba(0,0,0,0)90%),url(${details.image.original})`,
            }}
          ></div>
          <div className="detCont pt-48 pl-24 flex ">
            <img
              src={details.image.original}
              alt=""
              className=" imgPos w-80 h-96 rounded-xl"
            />
            <div className="summary mt-2 ml-12 bg-slate-800 w-4/6 p-4 rounded-xl">
              <div className="hide">
                <h1 className=" text-5xl text-white"> {details.name}</h1>
                <p className=" bg-red-400 text-white rounded-md px-4 py-1 w-max mt-4">
                  {details.genres[0]}
                </p>
              </div>

              <div className=" w-full mt-6 ">
                <p className="sumDet text-white">{details.summary}</p>
              </div>
              <div className=" w-full flex justify-center mt-4">
                <button
                  onClick={handleOpen}
                  className=" w-max px-4 bg-emerald-400 rounded-lg font-medium py-1"
                >
                  Book Ticket
                </button>
              </div>
            </div>
          </div>

          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style} bgcolor={pink} className="modalmx">
              <div className=" bg-gray-700 h-full w-full flex flex-col  items-center relative">
                <div
                  onClick={handleClose}
                  className=" absolute top-0 right-0 hover:cursor-pointer"
                >
                  <CloseIcon />
                </div>
                <form
                  className=" flex justify-center items-center flex-col px-4 py-2"
                  action=""
                >
                  <h1 className=" text-3xl text-white">{details.name}</h1>

                  <input
                    className=" bg-red-400 w-42 h-8 rounded-lg my-2 p-2 text-white"
                    type="date"
                  />
                  <div className="">
                    <p className=" text-white">Show time</p>
                    <div className="">
                      <button className=" w-max px-4 bg-sky-800 h-8 mr-2">
                        12:30 P.M
                      </button>
                      <button className=" w-max px-4 bg-sky-800 h-8 mr-2">
                        6:00 P.M
                      </button>
                      <button className=" w-max px-4 bg-sky-800 h-8 mr-2">
                        9:00 P.M
                      </button>
                    </div>
                  </div>
                  <input
                    className=" bg-white  w-64 h-12 rounded-lg my-4 p-4"
                    type="text"
                    placeholder="Your name"
                  />
                </form>
                <button className=" bg-pink-800 text-white px-4 py-2 w-max mx-auto rounded-md">
                  BOOK
                </button>
              </div>
            </Box>
          </Modal>
        </div>
      )}
    </>
  );
};

export default Detail;
