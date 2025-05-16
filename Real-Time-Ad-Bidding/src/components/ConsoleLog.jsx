export default function ConsoleLog({ logs }) {
  return (
    <section className="bg-gray-800 text-green-400 font-mono p-4 h-40 overflow-y-scroll">
      {logs.length === 0 && <p className="italic">No logs yet...</p>}
      {logs.map((log, i) => (
        <div key={i}>{log}</div>
      ))}
    </section>
  );
}
