import { useState, useEffect } from "react";
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";
import ConsoleLog from "./components/ConsoleLog";

export default function App() {
  const [isSimulated, setIsSimulated] = useState(false);
  const [nFactor, setNFactor] = useState(10);
  const [logs, setLogs] = useState([]);

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setLogs((prev) => [...prev, `[UPLOAD] File selected: ${file.name}`]);
    }
    // CSV parse logic will go here later
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const time = new Date().toLocaleTimeString();
      const ctr = (Math.random() * 0.3).toFixed(2);
      const cvr = (Math.random() * 0.1).toFixed(2);
      const result = Math.random() > 0.5 ? "Won" : "Lost";
      const logLine = `[${time}] CTR: ${ctr}, CVR: ${cvr} → Bid ${result}`;
      setLogs((prev) => [...prev.slice(-30), logLine]); // limit logs to 30 lines
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-black font-orbitron text-white">
      <Sidebar
        isSimulated={isSimulated}
        setIsSimulated={setIsSimulated}
        nFactor={nFactor}
        setNFactor={setNFactor}
        onFileUpload={handleFileUpload}
      />
      
  

      <div className="flex flex-col flex-1 shadow-xl">
        <Dashboard />
        <ConsoleLog logs={logs} />
      </div>
    </div>
  );
}


