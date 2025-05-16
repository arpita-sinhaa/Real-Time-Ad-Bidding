export default function Sidebar({ isSimulated, setIsSimulated, nFactor, setNFactor, onFileUpload }) {
  return (
    <aside className="w-64 bg-gray-800 text-white p-6 flex flex-col gap-6 min-h-screen">
      <h2 className="text-xl font-bold mb-4">Control Panel</h2>

      <label className="block">
        <span className="block mb-1 font-semibold">Upload Data</span>
        <input
          type="file"
          accept=".csv,.json"
          onChange={onFileUpload}
          className="block w-full text-gray-300 bg-gray-700 rounded p-2 cursor-pointer"
        />
      </label>

      <label className="flex items-center gap-2">
        <input
          type="checkbox"
          checked={isSimulated}
          onChange={() => setIsSimulated(!isSimulated)}
          className="cursor-pointer"
        />
        <span>Real-Time Simulation</span>
      </label>

      <div>
        <label htmlFor="nFactor" className="block font-semibold mb-1">
          N Factor: {nFactor}
        </label>
        <input
          id="nFactor"
          type="range"
          min="1"
          max="20"
          value={nFactor}
          onChange={e => setNFactor(parseInt(e.target.value))}
          className="w-full"
        />
      </div>

      <button className="mt-auto px-4 py-2 bg-indigo-600 rounded hover:bg-indigo-700 transition">
        Run
      </button>
    </aside>
  );
}
