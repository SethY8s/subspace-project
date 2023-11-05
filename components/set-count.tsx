"use client";

import React, { useState, useEffect } from "react";
import { Counter } from "@/smart-contract/typechain-types";
import { ethers } from "ethers";

export const SetCount = () => {
  const [counterValue, setCounterValue] = useState(0);
  const [contract, setContract] = useState(null);

  console.log(Counter.interface);

  useEffect(() => {
    async function initialize() {
      // Connect to MetaMask
      if (window?.ethereum?.request) {
        await window.ethereum.request({ method: "eth_requestAccounts" });
        console.log("Connected to MetaMask");
      }

      // Load the contract

      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(
        "0xD5ab84bCd7f3F997f5B4B65593083110D31e1989",
        Counter,
        signer
      );
      setContract(contract);

      // Display the current counter value
      const value = await contract.getCounterValue();
      setCounterValue(value.toNumber());
    }

    initialize();
  }, []);

  const incrementCounter = async () => {
    try {
      await contract.incrementCounter();
      console.log("Counter incremented");

      // Update the counter value in the UI
      const value = await contract.getCounterValue();
      setCounterValue(value.toNumber());
    } catch (error) {
      console.error("Error incrementing counter:", error);
    }
  };

  return (
    <div>
      <h1>Counter Value: {counterValue}</h1>
      <button onClick={incrementCounter}>Increment Counter</button>
    </div>
  );
};
