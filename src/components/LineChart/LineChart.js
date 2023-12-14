import React from "react";
import { ResponsiveLine } from "@nivo/line";

const LineChart = () => {
  const chartData = [
    {
      id: "Apple Stock Price",
      data: [
        { x: "2023-01-01", y: 120 },
        { x: "2023-01-02", y: 130 },
        { x: "2023-01-03", y: 110 },
        { x: "2023-01-04", y: 140 },
        { x: "2023-01-05", y: 125 },
        { x: "2023-01-06", y: 150 },
        { x: "2023-01-07", y: 135 },
      ],
    },
    {
      id: "Tesla Stock Price",
      data: [
        { x: "2023-01-01", y: 350 },
        { x: "2023-01-02", y: 370 },
        { x: "2023-01-03", y: 330 },
        { x: "2023-01-04", y: 390 },
        { x: "2023-01-05", y: 365 },
        { x: "2023-01-06", y: 400 },
        { x: "2023-01-07", y: 385 },
      ],
    },
    {
      id: "Nvidia Stock Price",
      data: [
        { x: "2023-01-01", y: 180 },
        { x: "2023-01-02", y: 200 },
        { x: "2023-01-03", y: 170 },
        { x: "2023-01-04", y: 210 },
        { x: "2023-01-05", y: 195 },
        { x: "2023-01-06", y: 220 },
        { x: "2023-01-07", y: 205 },
      ],
    },
  ];

  return (
    <div style={{ height: "300px" }}>
      <ResponsiveLine
        data={chartData}
        margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
        xScale={{ type: "point" }}
        yScale={{
          type: "linear",
          min: "auto",
          max: "auto",
          stacked: true,
          reverse: false,
        }}
        yFormat=" >-.2f"
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "Date",
          legendOffset: 36,
          legendPosition: "middle",
        }}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "Price",
          legendOffset: -40,
          legendPosition: "middle",
        }}
        pointSize={10}
        pointColor={{ theme: "background" }}
        pointBorderWidth={2}
        pointBorderColor={{ from: "serieColor" }}
        pointLabelYOffset={-12}
        useMesh={true}
        legends={[
          {
            anchor: "bottom-right",
            direction: "column",
            justify: false,
            translateX: 100,
            translateY: 0,
            itemsSpacing: 0,
            itemDirection: "left-to-right",
            itemWidth: 80,
            itemHeight: 20,
            itemOpacity: 0.75,
            symbolSize: 12,
            symbolShape: "circle",
            symbolBorderColor: "rgba(0, 0, 0, .5)",
            effects: [
              {
                on: "hover",
                style: {
                  itemBackground: "rgba(0, 0, 0, .03)",
                  itemOpacity: 1,
                },
              },
            ],
          },
        ]}
      />
    </div>
  );
};

export default LineChart;
