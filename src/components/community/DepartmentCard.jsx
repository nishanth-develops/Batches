import { Link } from "react-router-dom";
import { Users } from "lucide-react";

const DepartmentCard = ({ department, batchYear }) => {
  return (
    <Link
      to={`${department.code}`}
      className="group block rounded-lg overflow-hidden bg-white shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
    >
      <div className="relative h-40 overflow-hidden">
        <img
          src={department.image}
          alt={department.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-4">
        <h3 className="text-xl font-bold">{department.name}</h3>
        <div className="flex items-center text-gray-600 mt-2">
          <Users className="w-5 h-5 mr-2" />
          <span>{department.totalStudents} Students</span>
        </div>
        <div className="mt-4 flex justify-between items-center">
          <span className="text-sm text-gray-500">View department</span>
          <span className="text-blue-600 group-hover:text-blue-700 transition-colors">
            →
          </span>
        </div>
      </div>
    </Link>
  );
};

export default DepartmentCard;
