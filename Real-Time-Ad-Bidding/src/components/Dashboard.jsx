export default function Dashboard() {
  return (
    <main className="flex-1 p-6 bg-gray-900 text-white min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
      {/* Placeholder for charts and data */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-gray-800 rounded p-4 h-64">CTR/CVR Chart Here</div>
        <div className="bg-gray-800 rounded p-4 h-64">Budget Usage Chart Here</div>
        <div className="bg-gray-800 rounded p-4 h-64 col-span-2">Bids Table Here</div>
      </div>
    </main>
  );
}
