import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Legend,
  PieChart,
  Pie,
  Cell,
} from 'recharts';

export default function Dashboard() {
  const lineData = [
    { time: '12:00', ctr: 0.15, cvr: 0.05 },
    { time: '12:01', ctr: 0.18, cvr: 0.07 },
    { time: '12:02', ctr: 0.22, cvr: 0.09 },
    { time: '12:03', ctr: 0.25, cvr: 0.10 },
  ];

  const pieData = [
    { name: 'Used', value: 62 },
    { name: 'Left', value: 38 },
  ];

  const COLORS = ['#38bdf8', '#4b5563'];

  return (
    <main className="flex-1 p-8 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white min-h-screen">
      <h1 className="text-4xl font-extrabold mb-8 tracking-wide select-none">Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* CTR/CVR Line Chart */}
        <section className="bg-gradient-to-tr from-indigo-900 to-purple-900 rounded-2xl p-6 shadow-2xl">
          <h2 className="text-2xl font-semibold mb-6 text-cyan-300 select-none">CTR/CVR Prediction</h2>
          <LineChart width={460} height={270} data={lineData}>
            <CartesianGrid stroke="#555" strokeDasharray="4 4" />
            <XAxis dataKey="time" stroke="#a5b4fc" />
            <YAxis stroke="#a5b4fc" />
            <Tooltip contentStyle={{ backgroundColor: '#1e293b', borderRadius: 8 }} />
            <Legend wrapperStyle={{ color: '#c7d2fe' }} />
            <Line
              type="monotone"
              dataKey="ctr"
              stroke="#60a5fa"
              strokeWidth={3}
              dot={{ r: 4 }}
              activeDot={{ r: 6 }}
              animationDuration={1200}
            />
            <Line
              type="monotone"
              dataKey="cvr"
              stroke="#a78bfa"
              strokeWidth={3}
              dot={{ r: 4 }}
              activeDot={{ r: 6 }}
              animationDuration={1200}
            />
          </LineChart>
        </section>

        {/* Budget Usage Donut Chart */}
        <section className="bg-gradient-to-tr from-purple-900 to-indigo-900 rounded-2xl p-6 shadow-2xl flex flex-col items-center justify-center">
          <h2 className="text-2xl font-semibold mb-6 text-cyan-300 select-none">Budget Usage</h2>
          <PieChart width={230} height={230}>
            <Pie
              data={pieData}
              cx="50%"
              cy="50%"
              innerRadius={65}
              outerRadius={90}
              dataKey="value"
              startAngle={90}
              endAngle={-270}
            >
              {pieData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index]} />
              ))}
            </Pie>
          </PieChart>
          <p className="text-3xl font-bold text-cyan-400 mt-4 select-none">62% Used</p>
        </section>

        {/* Bids Table (placeholder) */}
        {/* <section className="bg-gray-800 rounded-2xl p-6 shadow-inner col-span-2 text-gray-300 text-lg font-mono select-none">
          Bids Table Here
        </section> */}
        <div className="bg-gray-850 rounded-xl p-6 shadow-md col-span-2"> <h2 className="text-xl font-semibold text-white mb-4">Bid Results</h2> <table className="w-full text-sm text-left text-gray-300"> <thead className="text-xs uppercase tracking-widest text-gray-400 border-b border-gray-700"> <tr> <th className="px-4 py-2">Time</th> <th className="px-4 py-2">CTR</th> <th className="px-4 py-2">CVR</th> <th className="px-4 py-2">Result</th> </tr> </thead> <tbody> <tr className="hover:bg-gray-800/50"> <td className="px-4 py-2">12:00</td> <td className="px-4 py-2">0.15</td> <td className="px-4 py-2">0.05</td> <td className="px-4 py-2 text-green-400">Won</td> </tr> <tr className="hover:bg-gray-800/50"> <td className="px-4 py-2">12:01</td> <td className="px-4 py-2">0.18</td> <td className="px-4 py-2">0.07</td> <td className="px-4 py-2 text-red-400">Lost</td> </tr> </tbody> </table> </div>
      </div>
    </main>
  );
}

