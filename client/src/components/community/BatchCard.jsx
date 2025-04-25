import { Link } from "react-router-dom";
import { Users } from "lucide-react";

const BatchCard = ({ batch }) => {
  return (
    <Link
      to={`batch/${batch.year}`}
      className="group block rounded-lg overflow-hidden bg-white shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={batch.image}
          alt={`Batch of ${batch.year}`}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-4">
        <h3 className="text-2xl font-bold text-gray-800">
          Batch of {batch.year}
        </h3>
        <div className="flex items-center text-gray-600 mt-2">
          <Users className="w-5 h-5 mr-2" />
          <span>{batch.totalStudents} Students</span>
        </div>
        <div className="mt-4 flex justify-between items-center">
          <span className="text-sm text-gray-500">View batch details</span>
          <span className="text-blue-600 group-hover:text-blue-700 transition-colors">
            →
          </span>
        </div>
      </div>
    </Link>
  );
};

export default BatchCard;
