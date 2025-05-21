import { useState, useEffect } from "react";
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";
import ConsoleLog from "./components/ConsoleLog";

export default function App() {
  const [isSimulated, setIsSimulated] = useState(false);
  const [nFactor, setNFactor] = useState(10);
  const [logs, setLogs] = useState([]);
  const [predictions, setPredictions] = useState([]);

  // 🔹 Handle file upload
  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await fetch("http://localhost:5000/api/upload", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      setLogs((prev) => [
        ...prev,
        `[UPLOAD] ${file.name} uploaded. Backend says: ${data.message || "Success"}`
      ]);
    } catch (error) {
      setLogs((prev) => [...prev, `[UPLOAD] Failed: ${error.message}`]);
    }
  };

  // 🔹 Trigger prediction API
  const sendToBackend = async () => {
    const input = {
      n_factor: nFactor,
      row_data: {
        ctr: parseFloat((Math.random() * 0.3).toFixed(2)),
        cvr: parseFloat((Math.random() * 0.1).toFixed(2)),
      },
    };

    try {
      const response = await fetch("http://localhost:5000/api/predict", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(input),
      });

      const result = await response.json();
      setLogs((prev) => [
        ...prev.slice(-29),
        `[MODEL] CTR: ${result.ctr_pred}, CVR: ${result.cvr_pred} → ${result.result}`
      ]);
      setPredictions((prev) => [...prev, { ...result, time: new Date().toLocaleTimeString() }]);
    } catch (error) {
      setLogs((prev) => [...prev, `[MODEL] Error: ${error.message}`]);
    }
  };

  // 🔹 Periodic simulation
  useEffect(() => {
    if (!isSimulated) return;

    const interval = setInterval(() => {
      sendToBackend();
    }, 2000);

    return () => clearInterval(interval);
  }, [isSimulated, nFactor]);

  return (
    <div className="flex h-screen bg-gradient-to-br from-[#0f0f0f] via-[#1a1a1a] to-[#111827] text-white font-sans">
      <Sidebar
        isSimulated={isSimulated}
        setIsSimulated={setIsSimulated}
        nFactor={nFactor}
        setNFactor={setNFactor}
        onFileUpload={handleFileUpload}
        onRunSimulation={sendToBackend}
      />

      <div className="flex flex-col flex-1 overflow-hidden">
        <Dashboard predictionData={predictions} />
        <ConsoleLog logs={logs} />
      </div>
    </div>
  );
}




