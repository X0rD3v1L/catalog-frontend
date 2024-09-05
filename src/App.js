import React, { useState, useEffect } from "react";
import RangeSwitcher from "./components/RangeSwitcher";
import "./fonts.css";
import "./App.css";
import { tabs, timeframes } from "./constants/HeaderConstants";
import {
  dayData,
  weekData,
  monthData,
  yearData,
} from "./constants/StocksDataOverTime";

const App = () => {
  const [_price, setPrice] = useState(63179.71);
  const [_change, setChange] = useState(2161.42);
  const [_changePercent, setChangePercent] = useState(3.54);
  const [chartData, setChartData] = useState([]);
  const [activeTab, setActiveTab] = useState("Chart");
  const [activeTimeframe, setActiveTimeframe] = useState("1d");

  useEffect(() => {
    // Simulate fetching data
    const fetchData = () => {
      // This is dummy data. Replace with actual API call
      if (activeTimeframe === "1d") {
        setChartData(dayData);
      } else if (activeTimeframe === "1w") {
        setChartData(weekData);
      } else if (activeTimeframe === "1m") {
        setChartData(monthData);
      } else if (activeTimeframe === "1y") {
        setChartData(yearData);
      }
    };

    fetchData();
  }, [activeTimeframe]);

  return (
    <div className="app-container">
      <div className="price-header">
        <h1>
          {_price.toFixed(2)} <sup>USD</sup>
        </h1>
        <p className="price-change">
          +{_change.toFixed(2)} ({_changePercent.toFixed(2)}%)
        </p>
      </div>

      <div className="tabs">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`tab ${activeTab === tab ? "active" : ""}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {activeTab === "Chart" && (
        <>
          <div className="timeframes">
            {timeframes.map((timeframe) => (
              <button
                key={timeframe}
                className={`timeframe ${
                  activeTimeframe === timeframe ? "active" : ""
                }`}
                onClick={() => setActiveTimeframe(timeframe)}
              >
                {timeframe}
              </button>
            ))}
          </div>
          <div className="chart-container">
            <RangeSwitcher data={chartData} />
          </div>
        </>
      )}
    </div>
  );
};

export default App;
