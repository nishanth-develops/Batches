import { useParams } from "react-router-dom";
import AchievementsCard from "../components/community/AchievementsCard";
import DepartmentCard from "../components/community/DepartmentCard";

const departments = [
  {
    name: "Computer Science Engineering",
    code: "cse",
    totalStudents: 120,
    image:
      "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    name: "Information Technology",
    code: "it",
    totalStudents: 90,
    image:
      "https://images.pexels.com/photos/3861972/pexels-photo-3861972.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    name: "Artificial Intelligence & Machine Learning",
    code: "aids",
    totalStudents: 60,
    image:
      "https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
];

const achievements = {
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
  const batchAchievements = achievements[year];

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

      <h2 className="text-2xl font-bold mb-6 text-gray-800">Departments</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {departments.map((department) => (
          <DepartmentCard
            key={department.code}
            department={department}
            batchYear={year}
          />
        ))}
      </div>
    </div>
  );
};

export default BatchPage;
