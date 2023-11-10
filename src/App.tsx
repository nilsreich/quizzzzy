import React, { useEffect, useState } from "react";
import { Results } from "./Results";
import { Game } from "./Game";
import { Welcome } from "./Welcome";
import type { AppData } from "./types";

const initValue: AppData = {
  state: "welcome",
  points: 0,
  currentRound: 0,
  maxRounds: 5,
  questions: null,
  history: null
};

const App: React.FC = () => {
  const [data, setData] = useState<AppData>(initValue);

  const renderComponent = () => {
    switch (data.state) {
      case "welcome":
        return <Welcome setData={setData} data={data} />;
      case "game":
        return <Game setData={setData} data={data} />;
      case "results":
        return <Results setData={setData} data={data} />;
      default:
        return null;
    }
  };

  return (
    <div className="bg-neutral-900 min-h-[100svh] text-neutral-200 flex">
      {renderComponent()}
    </div>
  );
};

export default App;
