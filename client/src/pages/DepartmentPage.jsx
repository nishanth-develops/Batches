import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MemoryLane from "../components/community/MemoryLane";
import MembersGrid from "../components/community/MembersGrid";
import { PlusCircle, UserPlus } from "lucide-react";
import axios from "axios";
import { toast } from "react-toastify";
import { useAuth } from "@clerk/clerk-react";
import { useLocation } from "react-router-dom";

// const departments = [
//   {
//     name: "Computer Science Engineering",
//     code: "cse",
//     totalStudents: 120,
//     image:
//       "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//   },
//   {
//     name: "Information Technology",
//     code: "it",
//     totalStudents: 90,
//     image:
//       "https://images.pexels.com/photos/3861972/pexels-photo-3861972.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//   },
//   {
//     name: "Artificial Intelligence & Data Science",
//     code: "aids",
//     totalStudents: 60,
//     image:
//       "https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//   },
// ];



const DepartmentPage = () => {
  const { year, department } = useParams();
  const [departmentInfo, setDepartmentInfo] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchDepartment = async () => {
    if (!department || !year) {
      toast.error("Invalid batch or department");
      return;
    }

    try {
      const { data } = await axios.get(`http://localhost:3000/api/user/departments/${year}/${department}`);
      if (data.success) {
        setDepartmentInfo(data.department);
        // console.log(data.department);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.error(error);
      toast.error("Failed to fetch department info");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDepartment();
  }, [year, department]);

  if (loading) {
    return <div className="p-5 text-center text-gray-500">Loading department details...</div>;
  }

  if (!departmentInfo) {
    return <div className="p-5 text-center text-red-500">Department not found.</div>;
  }

  return (
    <div className="p-5">
      <div className="mb-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-800 mb-2">
              {departmentInfo.name}
            </h1>
            <p className="text-gray-600">
              Batch of {year} • {departmentInfo.totalStudents} Students
            </p>
          </div>

          <div className="flex flex-wrap gap-3 mt-4 md:mt-0">
            <button className="cursor-pointer flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              <PlusCircle className="w-5 h-5 mr-2" />
              <span>Add Memory</span>
            </button>

            <button className="cursor-pointer flex items-center px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors">
              <UserPlus className="w-5 h-5 mr-2" />
              <span>Add Member</span>
            </button>
          </div>
        </div>
      </div>

      <MemoryLane batchYear={year} department={department} />

      <MembersGrid batchYear={year} department={department} />
    </div>
  );
};

export default DepartmentPage;
