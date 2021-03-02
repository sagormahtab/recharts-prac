import { LineChart, Line, CartesianGrid, XAxis, YAxis } from "recharts";
const data = [
  { name: "Page A", uv: 400, pv: 2400, amt: 2400 },
  { name: "Page A", uv: 200, pv: 2400, amt: 2400 },
  { name: "Page A", uv: 280, pv: 2400, amt: 2400 },
  { name: "Page B", uv: 300, pv: 1800, amt: 1800 },
];

const Chart = () => {
  return (
    <div>
      <LineChart width={600} height={300} data={data}>
        <Line type="monotone" dataKey="uv" stroke="#8884d8" />
        <CartesianGrid stroke="#ccc" />
        <XAxis dataKey="name" />
        <YAxis />
      </LineChart>
    </div>
  );
};

export default Chart;
