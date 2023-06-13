import React from "react";
import configs from "../hooks/BinBins.json";
import {useContractRead} from "wagmi"





const BinBinCompenent = ({ name, id, image, saleFee, rentFee, binbinStatus,due }) => {






  const { data: checkOut } = useContractRead({
    address :"0x5fbdb2315678afecb367f032d93f642f64180aa3",
    abi : configs.abi,
    functionName: 'checkOut',
    args: [id],
    onError: (err) => { console.error(err) }

  });

  

  const handleCheckOut = async () => {
    const res = await checkOut(id);
    console.log(res);
  };

  

  const handleCheckIn = async () => {
    await CheckIn(id);
  };


  let binbinName = name.toString()
  let ids = Number(id);
  let salefee = Number(saleFee)
  let rentfee = Number(rentFee)


  return (
    <div className=" grid-cols-3 justify-center items-center">
      <div className="flex justify-center items-center ">
        <div className="group flex flex-col h-full bg-white border border-gray-200 shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7]">
          <img
            className="h-52 w-[29rem] flex flex-col justify-center items-center bg-amber-500 rounded-t-xl"
            src={image}
          />
          <div className="p-4 md:p-6">
            <span className="block mb-1 text-xs font-semibold uppercase text-amber-500">
              {name} - id: {ids}
            </span>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-300 dark:hover:text-white">
              <p>House fee : {rentfee} </p>
              <p>Sale fee: {salefee} </p>
              <p>{binbinStatus === "2" ? "Available" : "Not Available"}</p>
            </h3>
            <p className="mt-3 text-gray-500">House Description</p>
          </div>
          <div className="mt-auto flex border-t border-gray-200 divide-x divide-gray-200 dark:border-gray-700 dark:divide-gray-700">
            <button
              disabled={due > 0 ? true : false}
              onClick={() => handleCheckOut(ids)}
              className=" disabled:cursor-not-allowed w-full py-3 px-4 inline-flex justify-center items-center gap-2 rounded-br-xl font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50   transition-all text-sm sm:p-4 dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white"
            >
              Check In
            </button>
            <button
              disabled={due > 0 ? true : false}
              onClick={() => handleCheckIn()}
              className="  disabled:cursor-not-allowed w-full py-3 px-4 inline-flex justify-center items-center gap-2 rounded-br-xl font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50   transition-all text-sm sm:p-4 dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white"
            >
              Check Out
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};


export default BinBinCompenent