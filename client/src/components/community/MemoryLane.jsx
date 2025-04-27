import { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import { MessageSquare, Clock } from "lucide-react";

const MemoryLane = ({ batchYear, department }) => {
  const [memories, setMemories] = useState([]);
  const [loading, setLoading] = useState(true);

  const formatDate = (timestamp) => {
    const date = new Date(timestamp);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  useEffect(() => {
    const fetchMemories = async () => {
      try {
        setLoading(true);
        const res = await axios.get(`/api/memory-lane/${batchYear}/${department}`);
        setMemories(res.data?.memories || []); // <-- FIX HERE
      } catch (err) {
        const msg = err.response?.data?.message || "Failed to load memories.";
        toast.error(msg);
        setMemories([]); // <-- Clear memories on error
      } finally {
        setLoading(false);
      }
    };

    fetchMemories();
  }, [batchYear, department]);

  if (loading) return <div>Loading memories...</div>;

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-8">
      <div className="flex items-center mb-6">
        <MessageSquare className="w-6 h-6 text-blue-600 mr-2" />
        <h2 className="text-2xl font-bold text-gray-800">Memory Lane</h2>
      </div>

      {(!memories || memories.length === 0) ? (
        <div className="text-center py-12 text-gray-500">
          <p>No memories shared yet. Be the first to add one!</p>
        </div>
      ) : (
        <div className="space-y-6">
          {memories.map((memory) => (
            <div key={memory.id} className="bg-gray-50 rounded-lg p-4">
              <div className="flex items-center mb-3">
                <img
                  src={`data:image/jpeg;base64,${memory.author_image}`}
                  alt={memory.author_name}
                  className="w-10 h-10 rounded-full object-cover mr-3"
                />
                <div>
                  <h4 className="font-medium">{memory.author_name}</h4>
                  <div className="flex items-center text-sm text-gray-500">
                    <Clock className="w-3 h-3 mr-1" />
                    <span>{formatDate(memory.timestamp)}</span>
                  </div>
                </div>
              </div>
              <p className="text-gray-700">{memory.text}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MemoryLane;
