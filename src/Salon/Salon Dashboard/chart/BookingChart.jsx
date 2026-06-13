import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { fetchBookings } from "../../../Redux/Chart/action";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";

const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

const bookings = [
  {"2-12-2026":499}
]

const chartData = [
  {
    daily:"2-12-2026",
    revenue: 499
  }
]

const BookingChart = () => {
    const dispatch = useDispatch();
    const { chart } = useSelector((store) => store);

    useEffect(() => {
      dispatch(fetchBookings(localStorage.getItem("jwt")));
    }, []);

    if (!chart.bookings.loading) {
      <Backdrop open={true}>
        <CircularProgress color="inherit" />
      </Backdrop>;
    }
  return (
    <div className="h-[40vh] w-full">
      <LineChart
        style={{
          width: "100%",
          maxWidth: "100%",
          height: "100%",
          maxHeight: "70vh",
          aspectRatio: 1.618,
        }}
        responsive
        data={chart.bookings.data}
        margin={{
          top: 5,
          right: 0,
          left: 0,
          bottom: 5,
        }}
      >
        <XAxis dataKey="count" stroke="var(--color-text-3)" />
        <YAxis width="auto" stroke="var(--color-text-3)" />
        <Tooltip
          cursor={{
            stroke: "var(--color-border-2)",
          }}
          contentStyle={{
            backgroundColor: "var(--color-surface-raised)",
            borderColor: "var(--color-border-2)",
          }}
        />
        <Line
          type="monotone"
          dataKey="count"
          stroke="#8884d8"
          dot={{
            fill: "var(--color-surface-base)",
          }}
          activeDot={{ r: 8, stroke: "var(--color-surface-base)" }}
        />
      </LineChart>
    </div>
  );
};

export default BookingChart;
