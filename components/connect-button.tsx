"use client";

import React from "react";
// import { ethers } from 'ethers';

export const Connectwallet = () => {
  const conncetWallet = async () => {
    try {
      if (!window.ethereum) {
        throw new Error(
          "You do now have MetaMask waller, please add extenison to continue"
        );
      }

      if (window.ethereum.request) {
        await window.ethereum.request({ method: "eth_requestAccounts" });
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <button className="bg-black" onClick={() => conncetWallet()}>
        Connect to MetaMask
      </button>
    </>
  );
};
