import { useState, useEffect } from "react";
import { Counter } from "@/smart-contract/typechain-types";
import { Counter__factory } from "@/smart-contract/typechain-types/factories/contracts/Counter__factory";
import { ethers } from "ethers";

export /**
 * Hook that connects to user's MetaMask client and
 * returns all important states relating to the contract
 *
 * @return {*}
 */
const useSmartContract = () => {
  // State variables to store the counter value and the smart contract instance
  const [counterValue, setCounterValue] = useState(0);
  const [contract, setContract] = useState<Counter | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    async function initialize() {
      try {
        // Check if MetaMask is available and request user account access
        if (window.ethereum && window?.ethereum?.request) {
          await window.ethereum.request({ method: "eth_requestAccounts" });
          console.log("Connected to MetaMask");
        } else {
          throw new Error(
            "MetaMask not available or request method not supported"
          );
        }

        // Create an Ethereum provider and get a signer
        const provider = new ethers.BrowserProvider(window.ethereum);
        const signer = await provider.getSigner();

        // Load the smart contract using the factory and signer
        const contractCreation = Counter__factory.connect(
          "0x35AA9705aF37d72D631E164Cc2B98C7dC2cB99F8",
          signer
        );

        setContract(contractCreation);

        const value = await contractCreation?.number();

        // Update the state with the current counter value
        setCounterValue(Number(value));
      } catch (error) {
        console.log("Error:", error);
      }
    }

    initialize();
  }, []);
  /**
   * Function that takes in a boolean and increments
   * or decrements the contract count based on the input.
   *
   * @param {boolean} increment - decides which contract method to call
   * @return {*}  {Promise<void>}
   */
  const adjustCounter = async (increment: boolean): Promise<void> => {
    try {
      if (increment) {
        // create the transaction
        const tx = await contract?.increment();
        console.log("Counter incremented");
        setIsLoading(true);
        await tx?.wait();

        const value = await contract?.number();
        if (value) {
          setCounterValue(Number(value));
        }
      } else {
        // create the transaction
        const tx = await contract?.decrement();
        console.log("Counter decremented");
        setIsLoading(true);
        await tx?.wait();

        // Update the counter value in the UI
        const value = await contract?.number();
        if (value) {
          setCounterValue(Number(value));
        }
      }
      setIsLoading(false);
      setIsSuccess(true);
    } catch (error: any) {
      console.error("Error:", error);
      setError(error.message);
    }
  };

  return { counterValue, adjustCounter, error, isLoading, isSuccess };
};
