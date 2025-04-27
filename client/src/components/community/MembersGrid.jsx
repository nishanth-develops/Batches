import { useState, useEffect } from "react";
import { Users } from "lucide-react";

const MembersGrid = ({ batchYear, department }) => {
  const [members, setMembers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMembers = async () => {
      try {
        const response = await fetch(`http://localhost:3000/api/user/members/${batchYear}/${department}`);
        const data = await response.json();
        if (data.success) {
          setMembers(data.members);
        } else {
          setError(data.message);
        }
      } catch (err) {
        setError("Failed to fetch members.");
      } finally {
        setLoading(false);
      }
    };

    fetchMembers();
  }, [batchYear, department]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

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
