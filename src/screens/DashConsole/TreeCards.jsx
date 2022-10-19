import React, { useState } from "react";
import { useEffect } from "react";
import { useCookies } from "react-cookie";
import { Footprinticon } from "../../components/Dashboard/Footprinticon";
import { Locate } from "../../components/Dashboard/locate";
import treepic from "../../components/Dashboard/treepic.png";
import UModal from "../universal/Modal";
import PlantedTree from "./PlantedTree";
import TreeBG from "/assets/landing/home-bg.png";

export const TreeCards = () => {
  const [cookies, setCookie] = useCookies();
  const [isLoading, setIsLoading] = useState(false);
  const [err, setErr] = useState("");

  const [selectedTree,setSelectedTree] = useState(null)

  const [openModal,setOpenModal] = useState(false)

  const selectingTree = (treeObj)=> {
    console.log('selecting tree')
    console.log('selected is ',treeObj)
      setOpenModal(true)
      setSelectedTree(treeObj)
  }

  function getTrees() {
    setIsLoading(true);

    console.log("posting");
    console.log(cookies.key);
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", `Token ${cookies.key}`);

    var requestOptions = {
      method: "GET",
      headers: myHeaders,
    };
    console.log(requestOptions);
    console.log(myHeaders);

    try {
      fetch("https://api.greeeth.com/trees/", requestOptions)
        .then((response) => response.json())
        .then((result) => {
          setCookie(`treesData`, result, {
            path: "/",
          });

          console.log(result);
        });
    } catch (err) {
      setErr(err.message);
    } finally {
      setIsLoading(false);
    }
  }
  useEffect(() => {
    getTrees();
  }, [cookies.key]);
  console.log(cookies.treesData);



  const TreeCard = ({ tree }) => {
    return (
      <div className="">
        <div className="dash-card mt-6 sm:max-w-400px  shadow-lg rounded-2xl">
          <img
            // src={tree.image}
            src={TreeBG}
            alt="Tree illustration"
            className="w-[300px] sm:h-[310px] h-[300px] m-3 p-3 rounded-2xl"
          />

      

        <div className="w-full p-3">
          <div className="w-full rounded-2xl flex flex-col items-start  border border-green-600 px-3 py-3">
            <p className="text-gray-600 font-bold text-sm my-1">Tree Name: &nbsp; <span className="capitalize">{tree.tree_type ? tree.tree_type : 'N/A' }</span></p>
            <p className="text-gray-600 font-bold text-sm my-1">Tree Location: &nbsp;  {tree.address}</p>
            <p className="text-gray-600 font-bold text-sm my-1">Planted: {tree.age} Days Ago</p>
            {!tree.to_be_maintained ? 
                
                <p className="py-1 px-3 rounded text-sm text-red-600 border-2 inline-flex border-red-600">Not Suitable For Maintainance</p>
                :
                <p className="py-1 px-3 rounded text-sm text-green-600 border-2 inline-flex border-green-600">Suitable For Maintainance</p>
                
            
            }

    

        </div>
        </div>


          <div onClick={()=>selectingTree(tree)} className="bg-lgreen cursor-pointer text-white rounded-2xl p-2 text-sm font-bold text-center">
            Tree ID - #{tree.id}
          </div>
        </div>
      </div>
    );
  };
  return (
    <div className="flex flex-wrap justify-center gap-10 mt-10">
      {cookies.treesData !== undefined && !cookies.treesData.detail ? (
        cookies.treesData.length !== 0 ? (
          <>
            {cookies.treesData.map((tree, i) => (
              <TreeCard tree={tree} key={i} />
            ))}
          </>
        ) : (
          // <></>
          <></>
        )
      ) : (
        <></>
      )}


      { openModal && 
        selectedTree &&
          <UModal open={openModal} show={setOpenModal} title={`Tree #${selectedTree.id}`} >
             <PlantedTree tree={selectedTree} />
          </UModal>
      }

    </div>
  );
};
