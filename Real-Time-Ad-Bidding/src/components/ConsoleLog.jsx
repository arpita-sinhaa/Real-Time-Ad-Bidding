export default function ConsoleLog({ logs }) {
  return (
    <section className="bg-black bg-opacity-90 text-green-400 font-mono p-6 h-56 overflow-y-auto border-t border-green-700 rounded-t-lg shadow-inner">
      <h2 className="text-sm text-green-300 mb-3 font-semibold tracking-wide select-none drop-shadow-md">
        Live Console Log
      </h2>
      {logs.length === 0 ? (
        <p className="italic text-green-600">No logs yet...</p>
      ) : (
        logs.map((log, i) => (
          <div key={i} className="text-sm mb-1 break-words">
            {log}
          </div>
        ))
      )}
    </section>
  );
}
