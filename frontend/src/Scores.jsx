import "./App.css";
import Card from "./components/Card";
import "./index.css";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Scores() {
    const [scores, setScores] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        setLoading(true);
        axios.get("https://cricket-scores-api.vercel.app/").then((res) => {
            const data = res.data;
            setScores(data);
            setLoading(false);
        });
    }, []);

    const handleUpdate = (updatedScore) => {
        setScores((prevScores) => {
            return prevScores.map((score) =>
                score._id === updatedScore._id ? updatedScore : score
            );
        });

        // Send the updated score to the server
        axios
            .put(`https://cricket-scores-api.vercel.app/${updatedScore._id}`, updatedScore)
            .then((response) => {})
            .catch((error) => {
                console.error("There was an error updating the score:", error);
            });
    };

    if (loading) {
        return <h1>Loading...</h1>;
    }

    return (
        <>
            <div className="bg-slate-700 md:h-screen px-10">
                <h1 className="text-4xl text-white text-center font-bold pt-20 mb-20">
                    Cricket Scores
                </h1>
                <div className="flex flex-col md:flex-row justify-evenly items-center overflow-visible">
                    {scores.map((score) => {
                        return (
                            <Card
                                key={score._id}
                                score={score}
                                handleUpdate={handleUpdate}
                            />
                        );
                    })}
                </div>
            </div>
        </>
    );
}

export default Scores;
