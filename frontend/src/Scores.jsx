import "./App.css";
import Card from "./components/Card";
import "./index.css";
import React from "react";
import useData from "./hooks/useData";
import { useNavigate } from "react-router-dom";
function Scores() {
    const data = useData("https://cricket-scores-api.vercel.app/");
    const navigate = useNavigate();
    if (!data.loading) {
        const scores = data.data;

        return (
            <>
                <div className="bg-slate-200 h-screen">
                    <h1 className="text-4xl text-center font-bold p-4">
                        Cricket Scores
                    </h1>
                    <div className="flex flex-wrap justify-center align-middle p-4 ">
                        {scores.map((score) => {
                            return (
                                <Card
                                    key={score._id}
                                    name={score.name}
                                    runs={score.runs}
                                    wickets={score.wickets}
                                    updateFn={() => {
                                        navigate(
                                            `/upload?id=${score._id}&name=${score.name}&runs=${score.runs}&wickets=${score.wickets}`
                                        );
                                    }}
                                ></Card>
                            );
                        })}
                    </div>
                </div>
            </>
        );
    }
    return <h1>Loading...</h1>;
}

export default Scores;
