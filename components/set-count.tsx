"use client";

import React, { useState, useEffect } from "react";
import { Counter } from "@/smart-contract/typechain-types";
import { Counter__factory } from "../smart-contract/typechain-types/factories/contracts/Counter__factory";
import { ethers } from "ethers";

export const SetCount = () => {
  const [counterValue, setCounterValue] = useState(0);
  const [contract, setContract] = useState<Counter | null>(null);

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

        const signer = await provider.getSigner();

        // Load the contract
        const contractCreation = Counter__factory.connect(
          "0x35AA9705aF37d72D631E164Cc2B98C7dC2cB99F8",
          signer
        );

        Counter__factory;

        const sup = await contractCreation?.totalSupply();
        setContract(contractCreation);

        console.log("sup", sup);

        // Display the current counter value
        const value = await contractCreation?.number();
        console.log("value", value);

        setCounterValue(Number(value));
      } catch (error) {
        console.log("Error:", error);
      }
    }

    initialize();
  }, []);

  const incrementCounter = async () => {
    try {
      const tx = await contract?.increment();
      console.log("Counter incremented");
      await tx?.wait();

      // Update the counter value in the UI
      const value = await contract?.number();
      if (value) {
        setCounterValue(Number(value));
      }
    } catch (error) {
      console.error("Error incrementing counter:", error);
    }
  };

  const decrementCounter = async () => {
    try {
      const tx = await contract?.decrement();
      console.log("Counter incremented");
      await tx?.wait();

      // Update the counter value in the UI
      const value = await contract?.number();
      if (value) {
        setCounterValue(Number(value));
      }
    } catch (error) {
      console.error("Error incrementing counter:", error);
    }
  };

  return (
    <div className="flex justify-between items-center">
      <button
        onClick={decrementCounter}
        className="h-12 px-6 m-2 text-lg text-indigo-100 transition-colors duration-150 bg-gray-900 rounded-lg focus:shadow-outline hover:bg-gray-700"
      >
        Decrease
      </button>
      <h1 className="text-red-500 font-bold text-xl">Counter: {counterValue}</h1>
      <button
        onClick={incrementCounter}
        className="h-12 px-6 m-2 text-lg text-indigo-100 transition-colors duration-150 bg-gray-900 rounded-lg focus:shadow-outline hover:bg-gray-700"
      >
        Increase
      </button>
    </div>
  );
};
