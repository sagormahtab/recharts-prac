import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Legend,
} from "recharts";
const data = [
  { name: "Page A", uv: 400, pv: 2400, amt: 2400 },
  { name: "Page B", uv: 200, pv: 2400, amt: 2400 },
  { name: "Page C", uv: 280, pv: 2400, amt: 2400 },
  { name: "Page D", uv: 300, pv: 1800, amt: 1800 },
];
const renderCustomAxisTick = ({ x, y, payload }) => {
  let path = "";

  switch (payload.value) {
    case "Page A":
      path =
        "M899.072 99.328q9.216 13.312 17.92 48.128t16.384 81.92 13.824 100.352 11.264 102.912 9.216 90.112 6.144 60.928q4.096 30.72 7.168 70.656t5.632 79.872 4.096 75.264 2.56 56.832q-13.312 16.384-30.208 25.6t-34.304 11.264-34.304-2.56-30.208-16.896q-1.024-10.24-3.584-33.28t-6.144-53.76-8.192-66.56-8.704-71.68q-11.264-83.968-23.552-184.32-7.168 37.888-11.264 74.752-4.096 31.744-6.656 66.56t-0.512 62.464q1.024 18.432 3.072 29.184t4.608 19.968 5.12 21.504 5.12 34.304 5.12 56.832 4.608 90.112q-11.264 24.576-50.688 42.496t-88.576 29.696-97.28 16.896-74.752 5.12q-18.432 0-46.08-2.56t-60.416-7.168-66.048-12.288-61.952-17.92-49.664-24.064-28.16-30.208q2.048-55.296 5.12-90.112t5.632-56.832 5.12-34.304 5.12-21.504 4.096-19.968 3.584-29.184q2.048-27.648-0.512-62.464t-6.656-66.56q-4.096-36.864-11.264-74.752-13.312 100.352-24.576 184.32-5.12 35.84-9.216 71.68t-8.192 66.56-6.656 53.76-2.56 33.28q-13.312 12.288-30.208 16.896t-34.304 2.56-33.792-11.264-29.696-25.6q0-21.504 2.048-56.832t4.096-75.264 5.632-79.872 6.656-70.656q2.048-20.48 6.144-60.928t9.728-90.112 11.776-102.912 13.824-100.352 16.384-81.92 17.92-48.128q20.48-12.288 56.32-25.6t73.216-26.624 71.168-25.088 50.176-22.016q10.24 13.312 16.896 61.44t13.312 115.712 15.36 146.432 23.04 153.6l38.912-334.848-29.696-25.6 43.008-54.272 15.36 2.048 15.36-2.048 43.008 54.272-29.696 25.6 38.912 334.848q14.336-74.752 23.04-153.6t15.36-146.432 13.312-115.712 16.896-61.44q16.384 10.24 50.176 22.016t71.168 25.088 73.216 26.624 56.32 25.6";
      break;
    case "Page B":
      path =
        "M662.528 451.584q10.24 5.12 30.208 16.384t46.08 31.744 57.856 52.736 65.024 80.896 67.072 115.2 64.512 154.624q-15.36 9.216-31.232 21.504t-31.232 22.016-31.744 15.36-32.768 2.56q-44.032-9.216-78.336-8.192t-62.976 7.68-53.248 16.896-47.616 19.968-46.08 16.384-49.664 6.656q-57.344-1.024-110.592-16.896t-101.376-32.256-89.6-25.088-75.264 4.608q-20.48 8.192-41.984 1.024t-38.912-18.432q-20.48-13.312-39.936-33.792 37.888-116.736 86.016-199.68t92.672-136.704 78.848-81.408 43.52-33.792q9.216-5.12 10.24-25.088t-1.024-40.448q-3.072-24.576-9.216-54.272l-150.528-302.08 180.224-29.696q27.648 52.224 53.76 79.36t50.176 36.864 45.568 5.12 39.936-17.92q43.008-30.72 80.896-103.424l181.248 29.696q-20.48 48.128-45.056 99.328-20.48 44.032-47.616 97.28t-57.856 105.472q-12.288 34.816-13.824 57.344t1.536 36.864q4.096 16.384 12.288 25.6z";
      break;
    case "Page C":
      path =
        "M1024 904.192q0 12.288-11.264 32.768t-34.304 39.424-56.832 33.28-77.824 14.336l-662.528 0q-45.056 0-78.848-14.336t-56.832-33.28-34.304-39.424-11.264-32.768l90.112-482.304q0-25.6 17.92-43.008t42.496-17.408q7.168 2.048 16.384 5.12 8.192 2.048 19.456 5.12l24.576 7.168 0-79.872q0-61.44 23.552-116.224t64.512-95.232 95.744-64 117.248-23.552 117.248 23.552 95.744 64 64.512 95.232 23.552 116.224l0 79.872 24.576-7.168q11.264-3.072 19.456-5.12 9.216-3.072 16.384-5.12 25.6 0 43.008 17.408t17.408 43.008zM240.64 572.416q25.6 0 43.008-17.408t17.408-43.008q0-17.408-8.192-30.72t-21.504-21.504l0 52.224-60.416 0 0-52.224q-29.696 16.384-29.696 52.224 0 25.6 17.408 43.008t41.984 17.408zM271.36 393.216q50.176 11.264 112.64 19.968t128 8.704 128-8.704 113.664-19.968l0-84.992q0-51.2-18.944-96.256t-51.712-78.848-76.8-53.248-94.208-19.456-93.696 19.456-76.288 53.248-51.712 78.848-18.944 96.256l0 84.992zM783.36 572.416q25.6 0 43.008-17.408t17.408-43.008q0-17.408-8.192-30.72t-22.528-21.504l0 52.224-59.392 0 0-52.224q-14.336 8.192-22.528 21.504t-8.192 30.72q0 25.6 17.92 43.008t42.496 17.408z";
      break;
    case "Page D":
      path =
        "M1024 481.28q0 29.696-10.24 51.2t-25.088 41.472-30.208 40.96-24.576 49.664q-3.072 8.192-5.632 26.112t-5.12 42.496-5.12 53.76-4.608 57.856q-5.12 67.584-10.24 148.48 0 9.216-6.144 15.36-5.12 6.144-17.408 10.752t-35.84 4.608q-24.576 0-41.472-4.608t-28.16-10.752q-12.288-6.144-21.504-15.36l0-29.696-481.28 0 0 29.696q-9.216 9.216-21.504 15.36-11.264 6.144-28.16 10.752t-40.448 4.608q-24.576 0-36.864-4.608t-17.408-10.752q-6.144-6.144-6.144-15.36-5.12-80.896-9.216-148.48-2.048-28.672-4.608-57.856t-5.12-53.76-5.12-42.496-5.632-26.112q-10.24-28.672-25.6-49.664t-30.208-40.96-25.088-41.472-10.24-51.2q0-58.368 41.984-89.6t112.64-31.232q24.576 0 41.984 8.704t30.208 22.528 20.992 31.744 13.312 37.376q-5.12-32.768-15.872-62.464t-33.28-48.128q-11.264-9.216-26.112-17.408t-31.744-15.36-33.792-13.312-30.208-9.216l0-9.216q0-10.24 0.512-33.28t10.24-51.2 33.28-58.88 70.656-55.808 121.344-40.96 185.856-15.872q110.592 0 184.832 15.872t121.344 40.96 71.168 55.808 33.792 58.88 10.24 51.2 0.512 33.28l0 9.216q-13.312 3.072-30.208 8.704t-33.792 12.288-32.256 15.36-25.6 18.944q-17.408 17.408-28.672 45.056 13.312-14.336 33.792-24.576t52.224-10.24q71.68 0 113.152 31.232t41.472 89.6zM752.64 602.112q13.312 0 22.016-8.704t8.704-20.992q0-13.312-8.704-22.016t-22.016-8.704q0-6.144-18.944-16.384t-51.712-19.968-76.288-16.896-93.696-7.168-93.696 7.168-76.288 16.896-51.712 19.968-18.944 16.384q-12.288 0-20.992 8.704t-8.704 22.016q0 12.288 8.704 20.992t20.992 8.704q33.792-16.384 72.704-29.696 32.768-11.264 74.752-20.48t87.04-10.24l2.048 0q46.08 1.024 89.6 10.24t78.336 20.48q40.96 13.312 76.8 29.696z";
      break;
    default:
      path = "";
  }

  return (
    <svg
      x={x - 12}
      y={y + 4}
      width={24}
      height={24}
      viewBox="0 0 1024 1024"
      fill="#666"
    >
      <path d={path} />
    </svg>
  );
};

const renderCustomBarLabel = ({ payload, x, y, width, height, value }) => {
  return (
    <text
      x={x + width / 2}
      y={y}
      fill="#666"
      textAnchor="middle"
      dy={-6}
    >{`value: ${value}`}</text>
  );
};

const BarComp = () => {
  return (
    <BarChart width={600} height={300} data={data}>
      <XAxis dataKey="name" stroke="#8884d8" tick={renderCustomAxisTick} />
      <YAxis />
      <Tooltip wrapperStyle={{ width: 100, backgroundColor: "#ccc" }} />
      <Legend
        width={100}
        wrapperStyle={{
          top: 30,
          right: 320,
          backgroundColor: "#f5f5f5",
          border: "1px solid #d5d5d5",
          borderRadius: 3,
          lineHeight: "40px",
        }}
      />
      <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
      <Bar
        dataKey="uv"
        barSize={30}
        fill="#8884d8"
        label={renderCustomBarLabel}
      />
    </BarChart>
  );
};

export default BarComp;