import TreeBG from "../../assets/landing/home-bg.png";
import Drone from "../../assets/landing/Drone.png";
import calc from "../../assets/landing/calc.png";
import reduce from "../../assets/landing/reduce.png";
import offemission from "../../assets/landing/offemission.png";
import monitor from "../../assets/landing/monitor.png";
import analyze from "../../assets/landing/analyze.png";
import garden from "../../assets/landing/garden.png";
import plant from "../../assets/landing/plant.png";
import offset from "../../assets/landing/offset.png";
import reward from "../../assets/landing/reward.png";
import csr from "../../assets/landing/csr.png";
import loyalty from "../../assets/landing/loyalty.png";
import gift from "../../assets/landing/gift.png";
import engage from "../../assets/landing/engage.png";
import maintain from "../../assets/landing/maintain.png";
import track from "../../assets/landing/track.png";
import legal from "../../assets/landing/legal.png";
import illegal from "../../assets/landing/illegal.png";
import shop from "../../assets/landing/shop.png";
import shoper from "../../assets/landing/shoper.png";
import map from "../../assets/landing/map.png";

import droneplant from "../../assets/landing/drone plant.png";

import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { PlantTree } from "./PlantTree";

// import Steps from "./Steps";

const LandingPage = () => {
  function Facts() {
    const [activeSlide, setActiveSlide] = useState(1);

    useEffect(() => {
      // This variable prevents race condition
      let current = 1;
      const cycleReviews = () => {
        if (current === 3) {
          current = 1;
        } else {
          current += 1;
        }
        setActiveSlide(current);
      };
      // intervalId identified so it can be canceled on unmount
      const intervalId = setInterval(() => {
        cycleReviews();
      }, 10000);
      // Removes interval on unmount
      return () => clearInterval(intervalId);
    }, []);

    const reviews = [
      {
        name: "Jonathan D.",
        citation: "Sale Closed in 2019",
        quote:
          "Planting trees remains one of the cheapest, most effective means of drawing excess carbon  from the atmosphere.",
      },
      {
        name: "Peter C.",
        citation: "Sale Closed in 2019",
        quote:
          " In recent times, half of all amphibians are at risk of extinction due to climate change. Many argue that extinction is a natural phenomenon, claiming about five species per year.",
      },
      {
        name: "Paulette H.",
        citation: "Sale Closed in 2019",
        quote:
          " Above 600,000 deaths occur worldwide every year due to climate change. 95% of these deaths take place in developing countries.",
      },
    ];

    return (
      <>
        <h2 className="text-3xl mt-5rem ligreen font-bold md:text-5xl">
          Facts
        </h2>
        <div className="Facts">
          <ul className="carousel__list">
            {reviews.map((review, index) => {
              const { citation, name, quote } = review;
              const count = index + 1;
              return (
                <li
                  className={`carousel__item
                ${count === activeSlide ? " active" : ""}
                ${count < activeSlide ? " left" : ""}
                ${count > activeSlide ? " right" : ""}
              `}
                  key={count}
                >
                  <blockquote className="carousel__quote">
                    {/* <cite>
                    <span className="carousel__name">{name}</span>
                    <span className="carousel__citation">{citation}</span>
                  </cite> */}
                    <p className="text-xl bold">"{quote}"</p>
                  </blockquote>
                </li>
              );
            })}
            <li className="carousel__indicator">
              <span
                className={`carousel__dot${activeSlide === 1 ? " active" : ""}`}
              />
              <span
                className={`carousel__dot${activeSlide === 2 ? " active" : ""}`}
              />
              <span
                className={`carousel__dot${activeSlide === 3 ? " active" : ""}`}
              />
            </li>
          </ul>
          {/* <p>Active Slide = {activeSlide}</p> */}
        </div>
      </>
    );
  }
  const componentsArray = [
    {
      // background: BG1,
      Illustration: calc,
      TextList: {
        text: "The calculator allows you to convert your emissions of carbon dioxide to the equivalent amount of carbon-dioxide emissions generated by your actions and activities.",
        title: "Calculate your carbon footprint",
      },
    },
    {
      // background: BG2,
      Illustration: reduce,
      TextList: {
        text: "One of the most immediate actions you can take to limit climate change is to reduce your emission. Our platform gives effective ways to reduce individual or organization carbon emissions.",
        title: "Reduce emission",
      },
    },
    {
      // background: BG3,
      Illustration: offemission,
      TextList: {
        text: "To compensate for your footprint, you can plant tree equivalent to the amount of emission you were responsible for. This will inform of any carbon reduction project.",
        title: "Offset emission ",
      },
    },
    {
      // background: BG3,
      Illustration: monitor,
      TextList: {
        text: "Tracking how much carbon dioxide is produced by particular activities at a particular time. With our database, we can gather and present the best available estimate of CO2 emission.",
        title: "Monitor emission ",
      },
    },
    {
      // background: BG3,
      Illustration: analyze,
      TextList: {
        text: "Get your overall carbon footprint, offset and reduction in one place and examine it. Check your contribution to the climate system.",
        title: "Analyze",
      },
    },
  ];
  const servicesArray = [
    {
      // background: BG1,
      Illustration: maintain,
      TextList: {
        text: "Our platform monitors tree health and sends maintenance.",
        title: "Tree maintenance",
      },
    },
    {
      // background: BG2,
      Illustration: track,
      TextList: {
        text: "One of the most immediate actions you can take to limit climate change is to reduce your emission. Our platform gives effective ways to reduce individual or organization carbon emissions.",
        title: "Track tree",
      },
    },
    {
      // background: BG3,
      Illustration: legal,
      TextList: {
        text: "With Silviculture, we can control the growth composition/structure, and quality of forest to meet values and needs, specifically timber production.",
        title: "Legal deforestation",
      },
    },
    {
      // background: BG3,
      Illustration: illegal,
      TextList: {
        text: "Planters can flag an attempt for illegal deforestation in a particular location",
        title: "Illegal deforestation",
      },
    },
  ];
  const treesArray = [
    {
      // background: BG1,
      Illustration: offset,
      TextList: {
        //  text: "The calculator allows you to convert your emissions of carbon dioxide to the equivalent amount of carbon-dioxide emissions generated by your actions and activities.",
        title: "Calculate your carbon footprint",
      },
    },
    {
      // background: BG2,
      Illustration: gift,
      TextList: {
        //  text: "One of the most immediate actions you can take to limit climate change is to reduce your emission. Our platform gives effective ways to reduce individual or organization carbon emissions.",
        title: "Gifting",
      },
    },
    {
      // background: BG3,
      Illustration: engage,
      TextList: {
        //  text: "To compensate for your footprint, you can plant tree equivalent to the amount of emission you were responsible for. This will inform of any carbon reduction project.",
        title: "Employee engagement",
      },
    },
    {
      // background: BG3,
      Illustration: reward,
      TextList: {
        //  text: "Tracking how much carbon dioxide is produced by particular activities at a particular time. With our database, we can gather and present the best available estimate of CO2 emission.",
        title: "Reward",
      },
    },
    {
      // background: BG3,
      Illustration: loyalty,
      TextList: {
        //  text: "Get your overall carbon footprint, offset and reduction in one place and examine it. Check your contribution to the climate system.",
        title: "Loyalty program",
      },
    },
    {
      // background: BG3,
      Illustration: csr,
      TextList: {
        //  text: "Get your overall carbon footprint, offset and reduction in one place and examine it. Check your contribution to the climate system.",
        title: "Corporate Social Responsibility",
      },
    },
  ];

  const Steps = () => {
    return (
      <div className="w-90vw py-6">
        <div className="flex">
          <div className="bg-white BG1 lg:w-3/11 px-5 h-370px flex flex-col items-flex-start justify-center mx-2 py-3rem lg:mb-4 mb-4 card">
            <div className="mb-8">
              <img
                src={calc}
                alt="Location pins illustration"
                loading="lazy"
                className="w-3rem"
              />
            </div>
            <div className="text-left ">
              <h2 className="text-2xl ligreen my-2 font-bold md:text-3xl">
                Detect planting location
              </h2>
            </div>
          </div>

          <div className="w-1/4">
            <div className="relative mb-2">
              <div className="absolute flex align-center items-center align-middle content-center sect">
                <div className="w-full bg-gray-200 rounded items-center align-middle align-center flex-1">
                  <div className="w-0 bg-green-300 py-1 rounded w-full"></div>
                </div>
              </div>

              <div className="bg-white BG1 lg:w-3/11 px-5 h-370px flex flex-col items-flex-start justify-center mx-2 py-3rem lg:mb-4 mb-4 card">
                <div className="mb-8">
                  <img
                    src={calc}
                    alt="Location pins illustration"
                    loading="lazy"
                    className="w-3rem"
                  />
                </div>
                <div className="text-left ">
                  <h2 className="text-2xl ligreen my-2 font-bold md:text-3xl">
                    Detect planting location
                  </h2>
                </div>
              </div>
            </div>

            <div className="text-xs text-center md:text-base">Add User</div>
          </div>

          <div className="w-1/4">
            <div className="relative mb-2">
              <div className="absolute flex align-center items-center align-middle content-center sect">
                <div className="w-full bg-gray-200 rounded items-center align-middle align-center flex-1">
                  <div className="w-0 bg-green-300 py-1 rounded w-1/3"></div>
                </div>
              </div>

              <div className="w-10 h-10 mx-auto bg-white border-2 border-gray-200 rounded-full text-lg text-white flex items-center">
                <span className="text-center text-gray-600 w-full">
                  {/* <svg
                    className="w-full fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                  >
                    <path
                      className="heroicon-ui"
                      d="M9 4.58V4c0-1.1.9-2 2-2h2a2 2 0 0 1 2 2v.58a8 8 0 0 1 1.92 1.11l.5-.29a2 2 0 0 1 2.74.73l1 1.74a2 2 0 0 1-.73 2.73l-.5.29a8.06 8.06 0 0 1 0 2.22l.5.3a2 2 0 0 1 .73 2.72l-1 1.74a2 2 0 0 1-2.73.73l-.5-.3A8 8 0 0 1 15 19.43V20a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2v-.58a8 8 0 0 1-1.92-1.11l-.5.29a2 2 0 0 1-2.74-.73l-1-1.74a2 2 0 0 1 .73-2.73l.5-.29a8.06 8.06 0 0 1 0-2.22l-.5-.3a2 2 0 0 1-.73-2.72l1-1.74a2 2 0 0 1 2.73-.73l.5.3A8 8 0 0 1 9 4.57zM7.88 7.64l-.54.51-1.77-1.02-1 1.74 1.76 1.01-.17.73a6.02 6.02 0 0 0 0 2.78l.17.73-1.76 1.01 1 1.74 1.77-1.02.54.51a6 6 0 0 0 2.4 1.4l.72.2V20h2v-2.04l.71-.2a6 6 0 0 0 2.41-1.4l.54-.51 1.77 1.02 1-1.74-1.76-1.01.17-.73a6.02 6.02 0 0 0 0-2.78l-.17-.73 1.76-1.01-1-1.74-1.77 1.02-.54-.51a6 6 0 0 0-2.4-1.4l-.72-.2V4h-2v2.04l-.71.2a6 6 0 0 0-2.41 1.4zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0-2a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"
                    />
                  </svg> */}
                </span>
              </div>
            </div>

            <div className="text-xs text-center md:text-base">Setting</div>
          </div>

          <div className="w-1/4">
            <div className="relative mb-2">
              <div className="absolute flex align-center items-center align-middle content-center sect">
                <div className="w-full bg-gray-200 rounded items-center align-middle align-center flex-1">
                  <div className="w-0 bg-green-300 py-1 rounded"></div>
                </div>
              </div>

              <div className="w-10 h-10 mx-auto bg-white border-2 border-gray-200 rounded-full text-lg text-white flex items-center">
                <span className="text-center text-gray-600 w-full">
                  {/* <svg
                    className="w-full fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                  >
                    <path
                      className="heroicon-ui"
                      d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-2.3-8.7l1.3 1.29 3.3-3.3a1 1 0 0 1 1.4 1.42l-4 4a1 1 0 0 1-1.4 0l-2-2a1 1 0 0 1 1.4-1.42z"
                    />
                  </svg> */}
                </span>
              </div>
            </div>

            <div className="text-xs text-center md:text-base">Finished</div>
          </div>
        </div>
      </div>
    );
  };
  function TreesInfo({ Pic, TextList }) {
    return (
      <div className="bg-white BG1 lg:w-3/11 px-5 text-center sm:h-28rem flex flex-col items-flex-start justify-center mx-2 py-1rem lg:mb-4 mb-4 card">
        <div className="mb-8">
          <img
            src={Pic}
            alt="Location pins illustration"
            loading="lazy"
            className=""
          />
        </div>
        <div className="text-center ">
          <h2 className="text-xl ligreen my-2 font-bold md:text-2xl">
            {TextList.title}
          </h2>
        </div>
      </div>
    );
  }

  function AmbassadorsInfo({ Pic, TextList }) {
    return (
      <div className="bg-white BG1 lg:w-3/11 px-5 h-370px flex flex-col items-flex-start justify-center mx-2 py-3rem lg:mb-4 mb-4 card">
        <div className="mb-8">
          <img
            src={Pic}
            alt="Location pins illustration"
            loading="lazy"
            className="w-3rem"
          />
        </div>
        <div className="text-left ">
          <h2 className="text-2xl ligreen my-2 font-bold md:text-3xl">
            {TextList.title}
          </h2>
          <p>{TextList.text}</p>
        </div>
      </div>
    );
  }

  function ServicesInfo({ Pic, TextList }) {
    return (
      <div className="bg-white BG1 lg:w-5/11 sm:h-180px px-2 flex items-center justify-center gap-2rem mx-2 py-1rem  card">
        <div className="">
          <img
            src={Pic}
            alt="Location pins illustration"
            loading="lazy"
            className="w-3rem"
          />
        </div>
        <div className="text-left w-7/10">
          <h2 className="text-2xl ligreen my-2 font-bold md:text-3xl">
            {TextList.title}
          </h2>
          <p>{TextList.text}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-milkgreen flex justify-center">
      <div className="container flex flex-col items-center">
        <section className=" grad-ligreen flex-wrap items-center justify-center  flex flex-col">
          <div className="h-full  lg:mx-6 my-3 flex flex-col items-center justify-around lg:max-w-screen-xl px-2 py-2 lg:ml-12 lg:h-full  lg:items-center lg:flex text-zinc-800">
            <div className="lg:max-w-9/11 text-center darkgreen">
              <h1 className="text-3xl  sm:(text-7xl !leading-tight) font-medium capitalize text-zinc-800">
                Offset your carbon blueprint with
                <span className="ligreen"> GREEETH</span>
              </h1>

              <p className="mt-6 sm:leading-relaxed px-2 sm:text-xl">
                The best way for individuals and organizations to plant trees,
                offset their carbon footprint to save the planet.
              </p>
              <div className="gap-4 mt-10 mx-auto text-center w-1/2">
                <a
                  className="block  py-4 text-base font-normal bg-lgreen rounded-lg shadow-md text-white sm:w-auto hover:text-white hover:bg-green-900 hover:border-white hover:border-2 active:text-rose-500 focus:outline-none focus:ring animate-bounce"
                  href="/get-involved/sponsors/apply"
                >
                  Plant Now
                </a>
              </div>
            </div>
            <div className="relative ">
              <img
                src={Drone}
                alt="Tree illustration"
                className="absolute left-0 sm:(top-30 w-13rem) top-10 w-7rem"
              />

              <img
                src={TreeBG}
                alt="Tree illustration"
                className="mx-auto lg:max-w-7/11"
              />
              <img
                src={Drone}
                alt="Tree illustration"
                className="absolute right-0 top-0 sm:w-13rem w-7rem"
              />
            </div>
          </div>
        </section>

        <div className="pt-20 flex flex-col items-center justify-center  px-2 py-2    lg:items-center lg:flex text-zinc-800">
          <div className="lg:max-w-9/11 text-center darkgreen">
            <h1 className="text-3xl  sm:(text-5xl !leading-tight) font-medium capitalize text-zinc-800">
              Manage your carbon emission
            </h1>

            <p className="mt-6 sm:leading-relaxed px-2 sm:text-lg">
              Take a step to measure and manage your carbon emission for
              yourself, your household, and your organization to mitigate the
              potential emission on the climate system.
            </p>
          </div>
          <div className="relative flex flex-wrap lg:flex-row flex-col items-center justify-center gap-1rem mt-2rem">
            {componentsArray.map((comp, i) => (
              <AmbassadorsInfo
                Pic={comp.Illustration}
                TextList={comp.TextList}
                Index={i}
              />
            ))}
          </div>
        </div>
        <div className="pt-20 flex flex-col items-center justify-center  px-2 py-2    lg:items-center lg:flex text-zinc-800">
          <div className="lg:max-w-9/11 text-center darkgreen">
            <h1 className="text-3xl  sm:(text-5xl !leading-tight) font-medium capitalize text-zinc-800">
              How Greeeth Tree Planting Works
            </h1>
          </div>

          <PlantTree />
        </div>

        <div className="flex flex-col items-center max-w-screen-xl m-auto sm:py-20 sm:px-15 pb-10 px-5 text-gray-600 md:px-12">
          <div className="space-y-6 md:space-y-0 md:flex justify-center py-5rem m-auto md:gap-6 lg:items-center lg:gap-12 ">
            <div className="text-left md:6/12 lg:w-6/12 sm:ml-12">
              <h2 className="text-2xl ligreen font-bold md:text-4xl">
                Plant by human
              </h2>
              <div className="mt-6 text-gray-600 sm:text-lg leading-loose">
                Allows trees to be planted in locations easily accessible by
                human . Planters plants the tree wirb selected planting pattern
                and geo-tag with our Geospatial technology getting the GPS
                coordinate. Tree planted is visible in the 3D environment with
                the planting process and tree data which can be seen by the
                sponsors.
              </div>
            </div>
            <div className="md:6/12 lg:w-6/12">
              <img
                src={garden}
                alt="Location pins illustration"
                loading="lazy"
                className="mx-auto"
              />
            </div>
          </div>
          <div className="space-y-6 md:space-y-0 md:flex justify-center m-auto md:gap-6 lg:items-center lg:gap-12 ">
            <h2 className="text-2xl text-left sm:hidden ligreen font-bold md:text-4xl">
              Plant with drone
            </h2>
            <div className="md:6/12 lg:w-6/12">
              <img
                src={droneplant}
                alt="Location pins illustration"
                loading="lazy"
                className="mx-auto"
              />
            </div>
            <div className="text-left md:6/12 lg:w-6/12 sm:ml-12">
              <h2 className="text-2xl hidden sm:block ligreen font-bold md:text-4xl">
                Plant with drone
              </h2>
              <div className="mt-6 text-gray-600 sm:text-lg leading-loose">
                We use unmanned drone to plant tree on a large area (e.g Forest)
                or location that are not easily accessible by human by seed
                bombing or seed firing with predefined planting patterns. Trees
                planted are geo-tag with our Geospatial technology getting the
                GPS coordinate. Tree planted is visible in the 3D environment
                with the planting process and tree data which can be seen by the
                sponsors.
              </div>
            </div>
          </div>
        </div>
        <div className="BG1 max-w-3xl px-2 flex flex-col items-center mb-30">
          <h2 className="text-3xl my-2rem ligreen font-bold md:text-5xl">
            Virtual Tree
          </h2>
          <div className="md:4/12 lg:w-6/12 mb-8">
            <img
              src={plant}
              alt="Location pins illustration"
              loading="lazy"
              className="mx-auto bg-white px-2rem py-1rem rounded-2xl shadow-md"
            />
          </div>
          <div className="text-center sm:max-w-9/12 flex flex-col items-center">
            <div className="flex justify-between w-10/12 lg:w-8/12">
              <div className="flex flex-wrap gap-4 text-center">
                <a
                  className="block w-full  p-3 px-8 ligreen text-base font-normal bg-grey rounded-lg shadow-md  sm:w-auto hover:text-white hover:bg-green-900 hover:border-white hover:border-2 active:text-rose-500 focus:outline-none focus:ring"
                  href="sponsors/individuals/gift-tree"
                >
                  Previous
                </a>
              </div>
              <div className="flex flex-wrap gap-4 text-center">
                <a
                  className="block w-full  p-3 px-12 white text-base font-normal bg-lgreen rounded-lg shadow-md text-white sm:w-auto hover:text-white hover:bg-green-900 hover:border-white hover:border-2 active:text-rose-500 focus:outline-none focus:ring"
                  href="sponsors/individuals/gift-tree"
                >
                  Next
                </a>
              </div>
            </div>

            <p className="mt-6 text-gray-900 list-disc">
              For every tree planted a virtual tree is generated with longitude
              and latitude of the planted tree. The tree can be gifted and sent
              on the platform.
            </p>
          </div>
        </div>

        <div className="pt-20 flex flex-col items-center justify-center  px-2 py-2    lg:items-center lg:flex text-zinc-800">
          <div className="lg:max-w-9/11 text-center darkgreen">
            <h1 className="text-3xl  sm:(text-5xl !leading-tight) font-medium capitalize text-zinc-800">
              What can we do we with Tree?
            </h1>
          </div>
          <div className="relative flex flex-wrap lg:flex-row flex-col items-center justify-center gap-1rem mt-2rem">
            {treesArray.map((comp, i) => (
              <TreesInfo
                Pic={comp.Illustration}
                TextList={comp.TextList}
                Index={i}
              />
            ))}
          </div>
        </div>

        <Facts />
        <div className="container flex items-center max-w-screen-xl rounded-3xl m-auto py-10 md:py-20 text-gray-600  md:px-12 xl:px-22  bg-lgreen w-screen">
          <div className="space-y-6 md:space-y-0 px-4 lg:items-center">
            <h1 className="text-3xl text-left sm:(text-5xl !leading-tight) font-medium capitalize text-white">
              Interactive map to explore
            </h1>
            <div className="mx-auto rounded-xl overflow-hidden">
              <iframe
                className="mx-auto sm:w-80vw w-95vw sm:h-70vh h-50vh"
                src="https://my.gfw-mapbuilder.org/v1.latest/?appid=b6cd16603b95427ba7dddc5b30133de6"
              ></iframe>
            </div>
          </div>
        </div>
        <div className="py-20 flex flex-col items-center justify-center  px-2  lg:items-center lg:flex text-zinc-800">
          <div className="lg:max-w-9/11 text-left darkgreen">
            <h1 className="text-3xl text-left sm:(text-5xl !leading-tight) font-medium capitalize text-zinc-800">
              Other services we offer
            </h1>
          </div>
          <div className="relative flex flex-wrap lg:flex-row flex-col items-center justify-center gap-1rem mt-2rem">
            {servicesArray.map((comp, i) => (
              <ServicesInfo
                Pic={comp.Illustration}
                TextList={comp.TextList}
                Index={i}
              />
            ))}
          </div>
        </div>
        <div className="container flex items-center max-w-screen-xl m-auto py-10 md:py-20 text-gray-600  md:px-12 xl:px-22  bg-white w-screen">
          <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
            <div className="md:5/12 lg:w-6/12 w-9/10 mx-auto">
              <img
                src={shoper}
                alt="Location pins illustration"
                loading="lazy"
                className="mx-auto"
              />
            </div>
            <div className="text-left md:6/12 lg:w-6/12 md:ml-12 mx-3">
              <h2 className="text-2xl ligreen font-bold md:text-4xl">Shop</h2>
              <div className="mt-6 text-gray-600 leading-loose">
                Represent carbon offsetting in real world and show that you care
                about it by purchasing carbon neutral and zero carbon product.
              </div>
              <div className="flex flex-wrap gap-4 mt-10 text-center">
                <a
                  className="block md:w-3/4 w-2/4 px-4 py-4 text-base font-normal bg-lgreen rounded-lg shadow-md text-white sm:w-auto hover:text-white hover:bg-green-900 hover:border-white hover:border-2 active:text-rose-500 focus:outline-none focus:ring"
                  href="/shop"
                >
                  Go to Shop
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="relative forestBG centerize w-100vw">
          <h2 className="text-4xl md:leading-relaxed my-2rem font-bold md:text-7xl sm:w-10/12 px-2 text-white">
            The Fastest Way To Offset Carbon Emission.
          </h2>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
