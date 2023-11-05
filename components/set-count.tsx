"use client";

import React, { useState, useEffect } from "react";
// import { Counter } from "@/smart-contract/typechain-types";
import Counter from "@/smart-contract/artifacts/contracts/Counter.sol/Counter.json";
import { ethers, Contract } from "ethers";

export const SetCount = () => {
  const [counterValue, setCounterValue] = useState(0);
  const [contract, setContract] = useState<ethers.Contract | null>(null);

  useEffect(() => {
    async function initialize() {
      try {
        if (window.ethereum && window?.ethereum?.request) {
          await window.ethereum.request({ method: "eth_requestAccounts" });
          console.log("Connected to MetaMask");
        } else {
          throw new Error(
            "MetaMask not available or request method not supported"
          );
        }

        const provider = new ethers.BrowserProvider(window.ethereum);

        // Load the contract
        const contractCreation = new Contract(
          "0xD5ab84bCd7f3F997f5B4B65593083110D31e1989",
          Counter.abi,
          provider
        );

        setContract(contractCreation);

        // Display the current counter value
        const value = await contract?.name();
        if (value) {
          setCounterValue(value);
        }
      } catch (error) {
        console.log("Error:", error);
      }
    }

    initialize();
  }, []);

  // const incrementCounter = async () => {
  //   try {
  //     await contract?.incrementCounter();
  //     console.log("Counter incremented");

  //     // Update the counter value in the UI
  //     const value = await contract?.getCounterValue();
  //     setCounterValue(value.toNumber());
  //   } catch (error) {
  //     console.error("Error incrementing counter:", error);
  //   }
  // };

  const setCount = async () => {
    try {
      const tx = await contract?.setNumber(5);
      await tx.wait();
      console.log("Counter incremented");

      // Update the counter value in the UI
      const value = await contract?.number();
      console.log(value);
      // setCounterValue(value.toNumber());
    } catch (error) {
      console.error("Error incrementing counter:", error);
    }
  };

  return (
    <div>
      <h1>Counter Value: {counterValue}</h1>
      <button
        onClick={setCount}
        className="h-12 px-6 m-2 text-lg text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-lg focus:shadow-outline hover:bg-indigo-800"
      >
        Large
      </button>
    </div>
  );
};
