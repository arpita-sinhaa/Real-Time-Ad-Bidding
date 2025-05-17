export default function Sidebar({ isSimulated, setIsSimulated, nFactor, setNFactor, onFileUpload }) {
  return (
    <aside className="w-64 bg-gradient-to-b from-purple-900 via-indigo-900 to-black text-white p-8 flex flex-col gap-8 min-h-screen shadow-2xl">
      <h2 className="text-2xl font-extrabold tracking-wide mb-6 select-none">Control Panel</h2>

      <label className="block">
        <span className="block mb-2 font-semibold text-cyan-300">Upload Data</span>
        <input
          type="file"
          accept=".csv,.json"
          onChange={onFileUpload}
          className="block w-full text-gray-300 bg-gray-800 rounded-lg p-2 cursor-pointer border border-transparent hover:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition"
        />
      </label>

      <label className="flex items-center gap-3 text-lg">
        <input
          type="checkbox"
          checked={isSimulated}
          onChange={() => setIsSimulated(!isSimulated)}
          className="cursor-pointer h-5 w-5 rounded border-gray-300 bg-gray-700 checked:bg-indigo-600 checked:border-indigo-600 focus:ring-indigo-500 transition"
        />
        <span className="select-none">Real-Time Simulation</span>
      </label>

      <div>
        <label htmlFor="nFactor" className="block font-semibold mb-2 text-cyan-300">
          N Factor: <span className="text-indigo-400">{nFactor}</span>
        </label>
        <input
          id="nFactor"
          type="range"
          min="1"
          max="20"
          value={nFactor}
          onChange={(e) => setNFactor(parseInt(e.target.value))}
          className="w-full accent-indigo-600 cursor-pointer"
        />
      </div>

      <button
        className="mt-auto px-6 py-3 bg-indigo-600 rounded-lg font-semibold hover:bg-indigo-500 shadow-lg hover:shadow-indigo-400 transition focus:outline-none focus:ring-4 focus:ring-indigo-400"
      >
        Run
      </button>
    </aside>
  );
}

