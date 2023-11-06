"use client";

import React, { useState, useEffect } from "react";
import { Counter } from "@/smart-contract/typechain-types";
import { Counter__factory } from "../smart-contract/typechain-types/factories/contracts/Counter__factory";
import { ethers } from "ethers";
import { useSmartContract } from "@/utils/hooks/smart-contract";

export const SetCount = () => {
  const { counterValue, adjustCounter, error, isLoading, isSuccess } =
    useSmartContract();

  return (
    <div className="flex flex-col">
      <section className="flex justify-between items-center">
        <button
          onClick={() => adjustCounter(false)}
          className="h-12 px-6 m-2 text-lg transition-colors duration-150 bg-gray-900 rounded-lg focus:shadow-outline hover-bg-gray-700"
        >
          Decrease
        </button>
        <h1 className="text-red-500 font-bold text-xl">
          Counter: {counterValue}
        </h1>
        <button
          onClick={() => adjustCounter(true)}
          className="h-12 px-6 m-2 text-lg transition-colors duration-150 bg-gray-900 rounded-lg focus:shadow-outline hover-bg-gray-700"
        >
          Increase
        </button>
      </section>
      {error ? (
        <p className="self-center text-red-600">Looks like there was an error: {error}</p>
      ) : null}
    </div>
  );
};
