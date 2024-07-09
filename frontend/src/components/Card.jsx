import React from "react";

const Card = ({ name, runs, wickets, updateFn }) => {
    return (
        <div className="bg-slate-100 rounded-lg p-6 max-w-sm w-full mx-auto mb-10 shadow-lg">
            <h2 className="text-4xl font-bold mb-4">{name}</h2>
            <div className="flex justify-between mb-7">
                <p className="text-gray-700 text-2xl">Runs: {runs}</p>
                <p className="text-gray-700 text-2xl">Wickets: {wickets}</p>
            </div>
            <button
                onClick={updateFn}
                className="bg-blue-500 hover:bg-blue-700 cursor-pointer text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
            >
                Update
            </button>
        </div>
    );
};

export default Card;
