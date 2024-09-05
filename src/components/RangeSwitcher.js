import React, { useEffect, useRef } from "react";
import { createChart } from "lightweight-charts";

const RangeSwitcher = ({ data }) => {
  const chartContainerRef = useRef();

  useEffect(() => {
    const handleResize = () => {
      chart.applyOptions({ width: chartContainerRef.current.clientWidth });
    };

    const chart = createChart(chartContainerRef.current, {
      width: chartContainerRef.current.clientWidth,
      height: 343,
      layout: {
        background: { type: "solid", color: "white" },
        textColor: "black",
        fontFamily: "Circular Std, sans-serif",
      },
      grid: {
        vertLines: { color: "rgba(197, 203, 206, 0.5)" },
        horzLines: { color: "rgba(197, 203, 206, 0.5)" },
      },
      rightPriceScale: {
        borderColor: "rgba(197, 203, 206, 0.8)",
      },
      timeScale: {
        borderColor: "rgba(197, 203, 206, 0.8)",
      },
    });

    const lineSeries = chart.addLineSeries({
      color: "rgb(71, 78, 234)",
      lineWidth: 2,
    });

    lineSeries.setData(data);

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      chart.remove();
    };
  }, [data]);

  return <div ref={chartContainerRef} />;
};

export default RangeSwitcher;
