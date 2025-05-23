'use client';

import { useState } from 'react';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';

export default function App() {
  const [predictionData, setPredictionData] = useState([]);
  const [isSimulated, setIsSimulated] = useState(false);
  const [nFactor, setNFactor] = useState(5);

  const onFileUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append('file', file);

    try {
      const res = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });

      if (!res.ok) {
        console.error('Upload failed');
        return;
      }

      // Optionally: auto-trigger prediction after upload
      await runPrediction();
    } catch (err) {
      console.error('Upload error:', err);
    }
  };

  // const runPrediction = async () => {
  //   try {
  //     const predictRes = await fetch('/api/predict', {
  //       method: 'POST',
  //       headers: { 'Content-Type': 'application/json' },
  //       body: JSON.stringify({ n_factor: nFactor }),
  //     });

  //     if (!predictRes.ok) {
  //       console.error('Prediction failed');
  //       return;
  //     }

  //     // Fetch prediction results
  //     const outputRes = await fetch('/api/output');
  //     const outputText = await outputRes.text();

  //     // Parse text output (assuming it's line-separated JSON or tab-separated)
  //     const lines = outputText.trim().split('\n');
  //     const parsedData = lines.map((line, index) => {
  //       const parts = line.split('\t');
  //       return {
  //         time: `T+${index}`,
  //         ctr_pred: parseFloat(parts[0]),
  //         cvr_pred: parseFloat(parts[1]),
  //         result: parts[2],
  //       };
  //     });

  //     setPredictionData(parsedData);
  //   } catch (err) {
  //     console.error('Prediction or output fetch error:', err);
  //   }
  // };

  const runPrediction = async () => {
  try {
    // Provide sample row_data to send to backend predict endpoint
    const sampleRowData = { ctr: 0.5, cvr: 0.3 }; 

    const predictRes = await fetch('/api/predict', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ n_factor: nFactor, row_data: sampleRowData }),
    });

    if (!predictRes.ok) {
      console.error('Prediction failed');
      return;
    }

    const prediction = await predictRes.json();

    // Append new prediction to existing data for showing on Dashboard
    setPredictionData((prev) => [
      ...prev,
      {
        time: `T+${prev.length}`,
        ctr_pred: prediction.ctr_pred,
        cvr_pred: prediction.cvr_pred,
        result: prediction.result,
      },
    ]);
  } catch (err) {
    console.error('Prediction error:', err);
  }
};


  return (
    <div className="flex">
      <Sidebar
        isSimulated={isSimulated}
        setIsSimulated={setIsSimulated}
        nFactor={nFactor}
        setNFactor={setNFactor}
        onFileUpload={onFileUpload}
        onRunSimulation={runPrediction}
      />
      <Dashboard predictionData={predictionData} />
    </div>
  );
}
