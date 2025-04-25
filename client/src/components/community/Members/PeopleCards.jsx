import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom"; // ✅ Get params from URL

const PeopleCards = () => {
  const [students, setStudents] = useState([]);
  const [searchParams] = useSearchParams(); // ✅ Get batch_id & branch

  useEffect(() => {
    const batch_id = searchParams.get("batch_id");
    const branch = searchParams.get("branch");

    fetch(`http://localhost:3000/api/users-list?batch_id=${batch_id}&branch=${branch}`)
      .then((res) => res.json())
      .then((data) => setStudents(data.users))
      .catch((error) => console.error("Error fetching students:", error));
  }, [searchParams]); // ✅ Re-fetch when URL params change

  return (
    <div className="grid grid-cols-3 gap-4 p-4">
      {students.map((student) => (
        <div key={student.id} className="p-4 shadow-md rounded-lg bg-white">
          {student.img ? (
            <img src={student.img} alt={student.name} className="w-full h-40 object-cover rounded-md" />
          ) : (
            <div className="w-full h-40 bg-gray-200 flex items-center justify-center rounded-md">
              <span>No Image Available</span>
            </div>
          )}
          <h3 className="text-lg font-semibold text-center mt-2">{student.name}</h3>
        </div>
      ))}
    </div>
  );
};

export default PeopleCards;
