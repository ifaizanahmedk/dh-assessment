// src/components/Main.js
import React, { useState } from "react";
import { DatePicker } from "antd";
import { Line } from "@nivo/line";
import Card from "src/components/Card";
import LineChart from "src/components/LineChart";
import { ContentBody, ContentHeader, Spacer } from "./styled";

const { RangePicker } = DatePicker;

const Dashboard = () => {
  const [dateRange, setDateRange] = useState(null);

  const handleDateChange = (dates) => {
    setDateRange(dates);
  };

  return (
    <>
      <div>
        <ContentHeader>
          <RangePicker
            onChange={handleDateChange}
            style={{
              float: "right",
            }}
          />
        </ContentHeader>
        <Spacer gap="6" />
        <ContentBody>
          <Card title="Price Graph">
            <LineChart />
          </Card>
          {/* Add other components for company profiles and news */}
        </ContentBody>
      </div>
    </>
  );
};

export default Dashboard;
