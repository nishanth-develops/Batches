import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import AchievementsCard from "../components/community/AchievementsCard";
import DepartmentCard from "../components/community/DepartmentCard";

// Achievements data is still hardcoded for simplicity
const achievements = {
  2023: [
    { title: "Patents", count: 8, icon: "Award" },
    { title: "Competitions", count: 24, icon: "Trophy" },
    { title: "Pass Percentage", count: 98, icon: "GraduationCap" },
  ],
  2022: [
    { title: "Patents", count: 8, icon: "Award" },
    { title: "Competitions", count: 24, icon: "Trophy" },
    { title: "Pass Percentage", count: 98, icon: "GraduationCap" },
  ],
  2021: [
    { title: "Patents", count: 8, icon: "Award" },
    { title: "Competitions", count: 24, icon: "Trophy" },
    { title: "Pass Percentage", count: 98, icon: "GraduationCap" },
  ],
  2020: [
    { title: "Patents", count: 8, icon: "Award" },
    { title: "Competitions", count: 24, icon: "Trophy" },
    { title: "Pass Percentage", count: 98, icon: "GraduationCap" },
  ],
  2024: [
    { title: "Patents", count: 8, icon: "Award" },
    { title: "Competitions", count: 24, icon: "Trophy" },
    { title: "Pass Percentage", count: 98, icon: "GraduationCap" },
  ],
  2025: [
    { title: "Patents", count: 5, icon: "Award" },
    { title: "Competitions", count: 18, icon: "Trophy" },
    { title: "Pass Percentage", count: 96, icon: "GraduationCap" },
  ],
  2026: [
    { title: "Patents", count: 3, icon: "Award" },
    { title: "Competitions", count: 12, icon: "Trophy" },
    { title: "Pass Percentage", count: 95, icon: "GraduationCap" },
  ],
};

const BatchPage = () => {
  const { year } = useParams();
  const [departments, setDepartments] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchDepartments = async () => {
    if (!year) {
      toast.error("Invalid batch year");
      return;
    }

    try {
      // API call to the updated route for fetching departments
      const { data } = await axios.get(
        `http://localhost:3000/api/user/departments/${year}`
      );
      // console.log(data); // Log the data to inspect if duplicates are present

      if (data.success) {
        // Remove duplicates based on a unique identifier (e.g., department name or ID)
        const uniqueDepartments = [
          ...new Map(
            data.departments.map((department) => [department.id, department])
          ).values(),
        ];

        setDepartments(uniqueDepartments); // Assuming the backend returns 'departments' as an array
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.error(error);
      toast.error("Failed to fetch departments");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDepartments();
  }, [year]);

  const batchAchievements = achievements[year] || [];

  return (
    <div className="p-10">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          Batch of {year}
        </h1>
        <p className="text-gray-600">
          Explore departments, achievements, and connect with your batchmates.
        </p>
      </div>

      <AchievementsCard achievements={batchAchievements} batchYear={year} />

      {loading ? (
        <p className="text-center text-gray-500">Loading departments...</p>
      ) : (
        <div>
          <h2 className="text-2xl font-bold mb-6 text-gray-800">Departments</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {departments.map((department, index) => (
              <DepartmentCard
              key={`${department.id}-${index}`} // Combine department.id and index to ensure uniqueness
              department={department}
              batchYear={year}
            />            
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default BatchPage;
