import { useState } from "react";
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";
import ConsoleLog from "./components/ConsoleLog";

export default function App() {
  const [isSimulated, setIsSimulated] = useState(false);
  const [nFactor, setNFactor] = useState(10);
  const [logs, setLogs] = useState([]);

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    setLogs((prev) => [...prev, `Uploaded file: ${file.name}`]);
    // parse the file here later
  };

  return (
    <div className="flex h-screen bg-gray-900">
      <Sidebar
        isSimulated={isSimulated}
        setIsSimulated={setIsSimulated}
        nFactor={nFactor}
        setNFactor={setNFactor}
        onFileUpload={handleFileUpload}
      />
      <div className="flex flex-col flex-1">
        <Dashboard />
        <ConsoleLog logs={logs} />
      </div>
    </div>
  );
}
