// src/components/Main.js
import React from "react";
import { DatePicker } from "antd";
import { Line } from "@nivo/line";

const Dashboard = () => {
	const data = [
		// Your static data here
	];

	return (
		<div>
			<DatePicker />
			<Line
				data={data}
				xScale={{ type: "point" }}
				yScale={{
					type: "linear",
					min: "auto",
					max: "auto",
					stacked: true,
					reverse: false,
				}}
				axisTop={null}
				axisRight={null}
				axisBottom={null}
				axisLeft={null}
			/>
			{/* Add other components for company profiles and news */}
		</div>
	);
};

export default Dashboard;
