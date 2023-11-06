"use client";

import { useState, useCallback } from "react";

interface HookReturnParameters<T> {
  data: T | undefined;
  isLoading: boolean;
  isSuccess: boolean;
  error: string;
}

type FunctionType<T, R> = (arg: T) => Promise<R | undefined>;

export /**
 * Template hook to update or fetch data
 *
 * @return {*}
 */
const useQueryHook = <InputData = never, ReturnDataType = null>(
  asyncQuery: FunctionType<InputData, ReturnDataType>
): [
  HookReturnParameters<ReturnDataType>,
  FunctionType<InputData, ReturnDataType>
] => {
  // set return states
  const [isLoading, setisLoading] = useState(false);
  const [isSuccess, setisSuccess] = useState(false);
  const [data, setData] = useState<ReturnDataType>();
  const [error, setError] = useState("");

  // function to write to firestore document
  const updateData = useCallback(
    async (inputData: InputData) => {
      // set states
      setisLoading(true);
      setisSuccess(false);
      setError("");

      // set return data
      let returnData;

      try {
        returnData = await asyncQuery(inputData);

        // set the states
        setData(returnData);
        setisLoading(false);
        setisSuccess(true);
      } catch (error: any) {
        // set the error states
        setisLoading(false);
        setisSuccess(false);
        console.log(error.message);
        setError(error.message);
      }

      return returnData;
    },
    [asyncQuery]
  );

  return [{ data, isLoading, isSuccess, error }, updateData];
};
