import { useState, useEffect } from "react";
import { MessageSquare, Clock } from "lucide-react";

const initialMemories = [
  {
    id: "1",
    text: "Our team won the national hackathon! Unforgettable experience with such talented classmates.",
    authorId: "1",
    authorName: "Alex Johnson",
    timestamp: Date.now() - 7 * 24 * 60 * 60 * 1000,
    batch: "2024",
    department: "cse",
  },
  {
    id: "2",
    text: "Remember that time we pulled an all-nighter for the AI project and then celebrated with pancakes at dawn?",
    authorId: "4",
    authorName: "Morgan Chen",
    timestamp: Date.now() - 14 * 24 * 60 * 60 * 1000,
    batch: "2024",
    department: "aids",
  },
];

const initialMembers = [
  {
    id: "1",
    name: "Alex Johnson",
    rollNumber: "CSE001",
    department: "cse",
    batch: "2024",
    image:
      "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: "2",
    name: "Jamie Smith",
    rollNumber: "CSE002",
    department: "cse",
    batch: "2024",
    image:
      "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: "3",
    name: "Taylor Rodriguez",
    rollNumber: "IT001",
    department: "it",
    batch: "2024",
    image:
      "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: "4",
    name: "Morgan Chen",
    rollNumber: "AIDS001",
    department: "aids",
    batch: "2024",
    image:
      "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
];

const MemoryLane = ({ batchYear, department }) => {
  const [memories, setMemories] = useState([]);
  const [members, setMembers] = useState(initialMembers);

  useEffect(() => {
    setMemories(
      initialMemories.filter(
        (memory) =>
          memory.batch === batchYear && memory.department === department
      )
    );
  }, [batchYear, department]);

  const formatDate = (timestamp) => {
    const date = new Date(timestamp);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  const findMemberImage = (authorId) => {
    const member = members.find((m) => m.id === authorId);
    return member.image;
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-8">
      <div className="flex items-center mb-6">
        <MessageSquare className="w-6 h-6 text-blue-600 mr-2" />
        <h2 className="text-2xl font-bold text-gray-800">Memory Lane</h2>
      </div>

      {memories.length === 0 ? (
        <div className="text-center py-12 text-gray-500">
          <p>No memories shared yet. Be the first to add one!</p>
        </div>
      ) : (
        <div className="space-y-6">
          {memories.map((memory) => (
            <div key={memory.id} className="bg-gray-50 rounded-lg p-4">
              <div className="flex items-center mb-3">
                <img
                  src={findMemberImage(memory.authorId)}
                  alt={memory.authorName}
                  className="w-10 h-10 rounded-full object-cover mr-3"
                />
                <div>
                  <h4 className="font-medium">{memory.authorName}</h4>
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
