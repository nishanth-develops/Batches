import { useState, useEffect } from "react";
import { Users } from "lucide-react";

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

const MembersGrid = ({ batchYear, department }) => {
  const [members, setMembers] = useState([]);

  useEffect(() => {
    setMembers(
      initialMembers.filter(
        (member) =>
          member.batch === batchYear && member.department === department
      )
    );
  }, [batchYear, department]);

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center">
          <Users className="w-6 h-6 text-blue-600 mr-2" />
          <h2 className="text-2xl font-bold text-gray-800">Members</h2>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {members.map((member) => (
          <div
            key={member.id}
            className="cursor-pointer bg-gray-50 rounded-lg overflow-hidden transition-transform hover:transform hover:scale-105"
          >
            <div className="h-40 overflow-hidden">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800">
                {member.name}
              </h3>
              <p className="text-gray-600">{member.rollNumber}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MembersGrid;
