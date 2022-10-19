import React, { useEffect } from "react";
import Modal from "react-modal";
import TreeBG from "/assets/landing/home-bg.png";

// import Map from "../../components/Dashboard/Map";

// import CircularSlider from "@fseehawer/react-circular-slider";

import { useContext, useState, useId } from "react";
import { POST } from "../../../utils/request";
import PlantTree from "./PlantTree";
import Maintenance from "./Maintenance";
import { GeotagIcon } from "../../components/Dashboard/GeotagIcon";
import { TreeCards } from "./TreeCards";
import { useCookies } from "react-cookie";
import { UploadImage } from "../../components/UploadImage";
import { Footprinticon } from "../../components/Dashboard/Footprinticon";
import { Walleticon } from "../../components/Dashboard/Walleticon";
import { Treeicon } from "../../components/Dashboard/Tree";
import { Locate } from "../../components/Dashboard/locate";
import { ThreeDots } from "react-loader-spinner";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Tree = () => {
  const [treeSection, settreeSection] = useState("Plant New Trees");
  // useEffect(() => {
  //   navigator.geolocation.getCurrentPosition(function (position) {
  //     console.log("Latitude is :", position.coords.latitude);
  //     console.log("Longitude is :", position.coords.longitude);
  //     location = `${position.coords.latitude}`;
  //   });
  // });

  var pic;
  var locationLon;
  var locationLat;
  function locate() {
    navigator.geolocation.getCurrentPosition(function (position) {
      console.log("Latitude is :", position.coords.latitude);
      console.log("Longitude is :", position.coords.longitude);
      locationLat = position.coords.latitude;
      locationLon = position.coords.longitude;
    });
  }
  // console.log(cookies);

  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [cookies, setCookie] = useCookies();
  const [isLoading, setIsLoading] = useState(false);
  const [err, setErr] = useState("");
  const [image, setImage] = useState("no image");
  const [geotag, setgeotag] = useState(false);
  const [imageURL, setImageURL] = useState("no image");

  const [treeNameInput, setTreeNameInput] = useState("");
  const [treeHeightInput, setTreeHeightInput] = useState(0);

  function openModal() {
    setIsOpen(true);
  }

  // function afterOpenModal() {
  //   // references are now sync'd and can be accessed.
  //   subtitle.style.color = "#f00";
  // }

  function closeModal() {
    setIsOpen(false);
  }

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      maxHeight: "90vh",
      overflow: "scroll",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      fontFamily: "DM Sans",
    },
  };
  // console.log(locationLat);

  function postTree() {
    setIsLoading(true);
    console.log(locationLat);
    var myHeaders = new Headers();
    // myHeaders.append("Content-Type", "application/json");

    myHeaders.append("Authorization", `Token ${cookies.key}`);
    let form_data = new FormData();
    form_data.append("image", image);
    form_data.append(
      "location",
      `{"type":"Point","coordinates": [${cookies.locationLat},${cookies.locationLong}]
    }`
    );
    form_data.append("height", treeHeightInput);
    form_data.append("tree_type", treeNameInput)

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: form_data,
    };



    try {
      fetch("https://api.greeeth.com/trees/", requestOptions)
        .then((response) => response.json())
        .then((result) => {
          // setCookie(`token`, result.key, {
          //   path: "/",
          // });
          console.log(result);
          // if (result.key) {
          //   navigate("/dashboard");
          // }
        });
    } catch (err) {
      setErr(err.message);
    } finally {
      setIsLoading(false);
      setgeotag(false);
    }
  }

  const TreeNavItem = ({ name }) => {
    return (
      <div
        onClick={() => {
          settreeSection(name);
          console.log(name);
        }}
        className={
          treeSection === `${name}`
            ? "sm:px-6 px-2 py-2 border-2 text-sm sm:text-base font-bold rounded-md cursor-pointer bg-lgreen text-white"
            : "sm:px-6 px-2 py-2 border-2 text-sm sm:text-base font-bold rounded-md cursor-pointer bg-white text-lgreen"
        }
      >
        {name}
      </div>
    );
  };

  const TreeSection = () => {
    switch (treeSection) {
      case "Planted Trees":
        return <TreeCards />;
      case "Plant New Trees":
        return <PlantTree />;
      case "Maintenance Task":
        return <Maintenance />;

      default:
        return <TreeCards />;
    }
  };
  return (
    // <DashboardLayout>

    <div className="my-2 py-6">
      <div className="flex flex-wrap sm:gap-6 gap-2">
        {geotag ? (
          <div className="left flex gap-4 items-center mr-5 ">
            <div className="p-2 cursor-pointer bg-lgreen border   rounded-full flex justify-between items-center">
              <div className="bg-lightgreen p-2 rounded-full">
                {/* <Treeicon clr="#008000" /> */}
              </div>
              <div className="flex flex-col text-left ml-2">
                <div className="text-md font-bold text-white">
                  Provide Tree Catalogue
                </div>
              </div>
            </div>
          </div>
        ) : (
          <UploadImage
            setImage={setImage}
            image={image}
            setGeotag={setgeotag}
            setImageURL={setImageURL}
          />
        )}
      </div>
      <div className="mx-auto my-auto flex justify-center">
        <div
          className={
            geotag
              ? "dash-card mt-6 sm:max-w-400px  shadow-lg rounded-2xl"
              : "hidden"
          }
        >
          <div className="bg-lgreen flex text-white rounded-2xl p-2 justify-end items-center">
            <div className="bg-lightgreen p-1 rounded-full my-auto mr-2">
              <Locate clr="#008000" />
            </div>
            <div className="mr-4">
              {cookies.locationLat}&#176;N, {cookies.locationLong}&#176;E
            </div>
          </div>
          {/* <img
            src={imageURL}
            alt="Tree illustration"
            className="sm:max-w-[350px] max-w-[300px] m-4 rounded-2xl"
          /> */}


          <div className="sm:p-6 sm:pb-4 p-4 flex flex-col gap-2">


          <label htmlFor="" className="text-sm font-bold text-gray-600 text-left">Enter Tree Type</label>


            <div className="p-1 border cursor-pointer hover:bg-lightgreen bd-lgreen border w-full rounded-full flex  items-center">
              <div className="bg-lightgreen p-2 ml-1 mr-4 rounded-full my-auto">
                <Treeicon clr="#008000" />
              </div>
              <input
                type="text"
                placeholder="Enter Tree type"
                id="treeName"
                value={treeNameInput}
                onInput={(e) => setTreeNameInput(e.target.value)}
                className="text-gray-900 text-base"
              />
            </div>



            <label htmlFor="" className="text-sm font-bold text-gray-600 text-left">Select Tree Height</label>

            <div className="p-1 border cursor-pointer hover:bg-lightgreen bd-lgreen border w-full rounded-full flex  items-center">
              <div className="bg-lightgreen p-2 ml-1 mr-4 rounded-full my-auto">
                <Treeicon clr="#008000" />
              </div>


             

              <select id="employeenum" placeholder="Enter Tree Height" name="employeenum" onInput={(e)=> setTreeHeightInput(e.target.value)}>
                {/* <option value="one">Enter tree Height</option> */}
                <option value="10mm - 49mm">10mm - 49mm</option>
                <option value="50mm - 99mm">50mm - 99mm</option>
                <option value="100mm - 499mm">100mm - 499mm</option>
                <option value="500mm+">500mm+</option>
              </select>
            </div>
            <div className="p-4 cursor-pointer bg-lgreen border   rounded-full">
              <div
                onClick={() => {
                  postTree();
                }}
                className="text-md font-bold text-white"
              >
                {isLoading ? (
                  <ThreeDots
                    height="20"
                    width="100"
                    color="white"
                    ariaLabel="loading"
                  />
                ) : (
                  "Submit"
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <TreeCards />
    </div>
    // </DashboardLayout>
  );
};

export default Tree;
