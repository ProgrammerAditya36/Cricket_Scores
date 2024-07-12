import React, { useRef, useState } from "react";

const Card = ({ score, handleUpdate }) => {
  const input = useRef(null);
  const [inpRuns, setInpRuns] = useState(0);

  const incrementCatches = () => {
    const updatedScore = { ...score, catches: score.catches + 1 };
    handleUpdate(updatedScore);
  };

  const incrementWickets = () => {
    const updatedScore = { ...score, wickets: score.wickets + 1 };
    handleUpdate(updatedScore);
  };

  const incrementRuns = () => {
    const updatedScore = { ...score, runs: score.runs + parseInt(inpRuns) };
    input.current.value = "";
    handleUpdate(updatedScore);
  };

  return (
    <div className="mx-2 my-5 flex w-full max-w-2xl flex-col rounded-lg bg-slate-200 px-6 py-8 shadow-2xl lg:max-w-md">
      <div className="mb-6 self-center text-xl font-light text-gray-800 sm:text-2xl">
        {score.name}
      </div>
      <div className="mb-0 w-full rounded-t-lg bg-slate-600 px-4 py-2 text-center text-base font-semibold text-white shadow-md hover:bg-slate-700">
        Runs : {score.runs}
      </div>
      <div className="item-center flex gap-0">
        <input
          type="number"
          onChange={(e) => setInpRuns(e.target.value)}
          ref={input}
          placeholder="Enter Runs"
          className="flex w-full items-center justify-center rounded-bl-lg border border-slate-500 px-4 py-2 text-center text-base font-semibold shadow-md transition duration-200 ease-in hover:border-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2 focus:ring-offset-slate-200"
        ></input>
        <button
          type="button"
          onClick={incrementRuns}
          className="flex w-full items-center justify-center rounded-br-lg bg-gray-600 px-4 py-2 text-center text-base font-semibold text-white shadow-md transition duration-200 ease-in hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:ring-offset-gray-200"
        >
          Add Runs
        </button>
      </div>
      <div className="mt-8 grid grid-cols-2">
        <div className="mb-5 flex flex-col p-2">
          <div className="relative flex">
            <div className="mb-0 w-full rounded-t bg-slate-600 px-4 py-2 text-center text-base font-semibold text-white shadow-md hover:bg-slate-700">
              Wickets : {score.wickets}
            </div>
          </div>
          <button
            type="button"
            onClick={incrementWickets}
            className="flex w-full items-center justify-center rounded-b-lg bg-gray-600 px-4 py-2 text-center text-base font-semibold text-white shadow-md transition duration-200 ease-in hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:ring-offset-gray-200"
          >
            Add Wicket
          </button>
        </div>
        <div className="mb-2 flex flex-col p-2">
          <div className="relative flex">
            <div className="mb-0 w-full rounded-t bg-slate-600 px-4 py-2 text-center text-base font-semibold text-white shadow-md hover:bg-slate-700">
              Catches : {score.catches}
            </div>
          </div>
          <button
            type="button"
            onClick={incrementCatches}
            className="flex w-full items-center justify-center rounded-b-lg bg-gray-600 px-4 py-2 text-center text-base font-semibold text-white shadow-md transition duration-200 ease-in hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:ring-offset-gray-200"
          >
            Add Catch
          </button>
        </div>
      </div>
    </div>
  );
};

function LoginForm() {
  return (
    <div className="flex w-full max-w-md flex-col rounded-lg bg-white px-4 py-8 shadow sm:px-6 md:px-8 lg:px-10 dark:bg-gray-800">
      <div className="mb-6 self-center text-xl font-light text-gray-600 sm:text-2xl dark:text-white">
        Login To Your Account
      </div>
      <div className="item-center flex gap-4">
        <button
          type="button"
          className="flex w-full items-center justify-center rounded-lg bg-slate-600 px-4 py-2 text-center text-base font-semibold text-white shadow-md transition duration-200 ease-in hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2 focus:ring-offset-slate-200"
        >
          <svg
            width="20"
            height="20"
            fill="currentColor"
            className="mr-2"
            viewBox="0 0 1792 1792"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M1343 12v264h-157q-86 0-116 36t-30 108v189h293l-39 296h-254v759h-306v-759h-255v-296h255v-218q0-186 104-288.5t277-102.5q147 0 228 12z"></path>
          </svg>
          Facebook
        </button>
        <button
          type="button"
          className="flex w-full items-center justify-center rounded-lg bg-red-600 px-4 py-2 text-center text-base font-semibold text-white shadow-md transition duration-200 ease-in hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-red-200"
        >
          <svg
            width="20"
            height="20"
            fill="currentColor"
            className="mr-2"
            viewBox="0 0 1792 1792"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M896 786h725q12 67 12 128 0 217-91 387.5t-259.5 266.5-386.5 96q-157 0-299-60.5t-245-163.5-163.5-245-60.5-299 60.5-299 163.5-245 245-163.5 299-60.5q300 0 515 201l-209 201q-123-119-306-119-129 0-238.5 65t-173.5 176.5-64 243.5 64 243.5 173.5 176.5 238.5 65q87 0 160-24t120-60 82-82 51.5-87 22.5-78h-436v-264z"></path>
          </svg>
          Google
        </button>
      </div>
      <div className="mt-8">
        <form action="#" autoComplete="off">
          <div className="mb-2 flex flex-col">
            <div className="relative flex">
              <span className="inline-flex items-center rounded-l-md border-b border-l border-t border-gray-300 bg-white px-3 text-sm text-gray-500 shadow-sm">
                <svg
                  width="15"
                  height="15"
                  fill="currentColor"
                  viewBox="0 0 1792 1792"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M1792 710v794q0 66-47 113t-113 47h-1472q-66 0-113-47t-47-113v-794q44 49 101 87 362 246 497 345 57 42 92.5 65.5t94.5 48 110 24.5h2q51 0 110-24.5t94.5-48 92.5-65.5q170-123 498-345 57-39 100-87zm0-294q0 79-49 151t-122 123q-376 261-468 325-10 7-42.5 30.5t-54 38-52 32.5-57.5 27-50 9h-2q-23 0-50-9t-57.5-27-52-32.5-54-38-42.5-30.5q-91-64-262-182.5t-205-142.5q-62-42-117-115.5t-55-136.5q0-78 41.5-130t118.5-52h1472q65 0 112.5 47t47.5 113z"></path>
                </svg>
              </span>
              <input
                type="text"
                id="sign-in-email"
                className="w-full flex-1 appearance-none rounded-r-lg border border-gray-300 bg-white px-4 py-2 text-base text-gray-700 placeholder-gray-400 shadow-sm focus:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600"
                placeholder="Your email"
              />
            </div>
          </div>
          <div className="mb-6 flex flex-col">
            <div className="relative flex">
              <span className="inline-flex items-center rounded-l-md border-b border-l border-t border-gray-300 bg-white px-3 text-sm text-gray-500 shadow-sm">
                <svg
                  width="15"
                  height="15"
                  fill="currentColor"
                  viewBox="0 0 1792 1792"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M1376 768q40 0 68 28t28 68v576q0 40-28 68t-68 28h-960q-40 0-68-28t-28-68v-576q0-40 28-68t68-28h32v-320q0-185 131.5-316.5t316.5-131.5 316.5 131.5 131.5 316.5q0 26-19 45t-45 19h-64q-26 0-45-19t-19-45q0-106-75-181t-181-75-181 75-75 181v320h736z"></path>
                </svg>
              </span>
              <input
                type="password"
                id="sign-in-email"
                className="w-full flex-1 appearance-none rounded-r-lg border border-gray-300 bg-white px-4 py-2 text-base text-gray-700 placeholder-gray-400 shadow-sm focus:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600"
                placeholder="Your password"
              />
            </div>
          </div>
          <div className="-mt-4 mb-6 flex items-center">
            <div className="ml-auto flex">
              <a
                href="#"
                className="inline-flex text-xs font-thin text-gray-500 hover:text-gray-700 sm:text-sm dark:text-gray-100 dark:hover:text-white"
              >
                Forgot Your Password?
              </a>
            </div>
          </div>
          <div className="flex w-full">
            <button
              type="submit"
              className="w-full rounded-lg bg-purple-600 px-4 py-2 text-center text-base font-semibold text-white shadow-md transition duration-200 ease-in hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-purple-200"
            >
              Login
            </button>
          </div>
        </form>
      </div>
      <div className="mt-6 flex items-center justify-center">
        <a
          href="#"
          target="_blank"
          className="inline-flex items-center text-center text-xs font-thin text-gray-500 hover:text-gray-700 dark:text-gray-100 dark:hover:text-white"
        >
          <span className="ml-2">You don't have an account?</span>
        </a>
      </div>
    </div>
  );
}

export default Card;
