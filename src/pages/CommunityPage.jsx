import BatchCard from "../components/community/BatchCard";

const batches = [
  {
    year: "2024",
    totalStudents: 450,
    image:
      "https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    year: "2025",
    totalStudents: 480,
    image:
      "https://images.pexels.com/photos/1438072/pexels-photo-1438072.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    year: "2026",
    totalStudents: 520,
    image:
      "https://images.pexels.com/photos/256541/pexels-photo-256541.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
];

const CommunityPage = () => {
  return (
    <div className="p-10">
      <div className="mb-8 text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Welcome to the Batch Community Portal
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Connect with your academic batch, share memories, and stay updated
          with achievements. Select a batch to get started.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {batches.map((batch) => (
          <BatchCard key={batch.year} batch={batch} />
        ))}
      </div>
    </div>
  );
};

export default CommunityPage;
