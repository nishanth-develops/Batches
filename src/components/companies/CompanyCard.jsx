import { Link } from "react-router-dom";
import { ExternalLink, TrendingUp, Users, Globe } from "lucide-react";

const CompanyCard = ({ company }) => {
  return (
    <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
      <Link to={`${company.name}`} className="block group">
        <div className="h-40 border flex justify-center items-center rounded-md relative group-hover:scale-105 transition-all duration-300 ease-out bg-white">
          <img
            src={company.imgUrl}
            alt={`${company.name} logo`}
            className="w-3/4 h-3/4 absolute object-contain opacity-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300 ease-out"
          />
          <h3 className="text-3xl p-2 text-center bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent font-bold group-hover:opacity-0 transition-all ease-out duration-300">
            {company.name}
          </h3>
        </div>
      </Link>
      
      <div className="mt-4">
        <div className="flex items-center justify-between mb-2">
          <h4 className="font-semibold text-lg">{company.name}</h4>
          <a 
            href={company.website} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center text-blue-600 hover:text-blue-800 transition-colors text-sm"
          >
            <span className="mr-1">Website</span>
            <ExternalLink size={14} />
          </a>
        </div>
        
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">{company.description}</p>
        
        <div className="grid grid-cols-3 gap-2 mt-4">
          <div className="flex flex-col items-center p-2 bg-gray-100 rounded">
            <div className="flex items-center text-gray-700 mb-1">
              <Users size={16} className="mr-1" />
              <span className="text-xs">Employees</span>
            </div>
            <p className="font-bold text-sm">{company.employees}</p>
          </div>
          
          <div className="flex flex-col items-center p-2 bg-gray-100 rounded">
            <div className="flex items-center text-gray-700 mb-1">
              <TrendingUp size={16} className="mr-1" />
              <span className="text-xs">Revenue</span>
            </div>
            <p className="font-bold text-sm">{company.revenue}</p>
          </div>
          
          <div className="flex flex-col items-center p-2 bg-gray-100 rounded">
            <div className="flex items-center text-gray-700 mb-1">
              <Globe size={16} className="mr-1" />
              <span className="text-xs">Global Rank</span>
            </div>
            <p className="font-bold text-sm">#{company.rank}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

// Example usage with Google data
const ExampleUsage = () => {
  const googleData = {
    name: "Google",
    imgUrl: "https://cdn.iconscout.com/icon/free/png-256/free-google-160-189824.png", // Replace with actual Google logo path
    description: "Google LLC is an American multinational technology company focusing on search engine technology, online advertising, cloud computing, computer software, quantum computing, e-commerce, and artificial intelligence.",
    website: "https://www.google.com",
    employees: "139,995+",
    revenue: "$282.8B",
    rank: 1
  };
  
  return (
    <div className="max-w-md mx-auto">
      <CompanyCard company={googleData} />
    </div>
  );
};

export default CompanyCard;