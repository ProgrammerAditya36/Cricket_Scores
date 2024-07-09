import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for v6
import InputBox from "./components/InputBox";
import axios from "axios";
import useData from "./hooks/useData";

const Upload = () => {
    const [runs, setRuns] = useState(0);
    const [wickets, setWickets] = useState(0);
    const [successMessage, setSuccessMessage] = useState("");
    const [curRuns, setCurRuns] = useState(0);
    const [curWickets, setCurWickets] = useState(0);
    const [name, setName] = useState("");
    const [id, setId] = useState("");
    const navigate = useNavigate(); // useNavigate for v6
    const query = new URLSearchParams(window.location.search);
    useEffect(() => {
        const id = query.get("id");
        if (!id) {
            navigate("/");
        }
        setId(id);
        setCurRuns(parseInt(query.get("runs")));
        setCurWickets(parseInt(query.get("wickets")));
        setName(query.get("name"));
    }, [query]);

    const handleUpdate = () => {
        const newRuns = runs + curRuns;
        const newWickets = wickets + curWickets;
        axios
            .put(`https://cricket-scores-api.vercel.app/${id}`, {
                runs: newRuns,
                wickets: newWickets,
            })
            .then((response) => {
                setSuccessMessage("Update successful!");
            })
            .catch((error) => {
                console.error("Error updating data:", error);
            });
    };

    return (
        <div className="bg-gray-500 h-screen p-3 ">
            <div className="flex p-10 bg-gray-700 align-middle justify-evenly flex-col h-3/4 rounded-3xl mb-5">
                <h1 className="text-white text-center text-3xl">{name}</h1>
                <InputBox
                    label={"Enter runs"}
                    value={runs}
                    onChange={setRuns}
                ></InputBox>
                <InputBox
                    label={"Enter wickets"}
                    value={wickets}
                    onChange={setWickets}
                ></InputBox>
            </div>
            {successMessage && (
                <div className="text-green-500 text-center mb-4">
                    {successMessage}
                </div>
            )}
            <button
                onClick={handleUpdate}
                className="bg-blue-500 hover:bg-blue-700 text-white text-2xl font-bold p-7 rounded-lg focus:outline-none focus:shadow-outline w-full"
            >
                Update
            </button>
        </div>
    );
};

export default Upload;
