import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Menu } from "lucide-react";
import axios from "axios";
import StudentRow from "../components/companies/StudentRow";

const CompanyDetailsPage = () => {
  const { name } = useParams();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [company, setCompany] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Correct the URL here to use only one slash
    axios
      .get(`http://localhost:3000/api/user/companies-list/${name}`)
      .then((response) => {
        setCompany(response.data.company); // Set the company data received from the API
        setLoading(false);
      })
      .catch((err) => {
        setError("Failed to fetch company details.");
        setLoading(false);
      });

    setIsVisible(true); // Trigger visibility animation
    return () => {
      setIsVisible(false); // Clean up visibility state on unmount
    };
  }, [name]); // Re-fetch data when the company name changes

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="relative p-5">
      <div className="flex items-center justify-between mb-12">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="p-2 rounded-md hover:bg-gray-500 hover:text-white 
          cursor-pointer transition-all duration-300"
          aria-label="Toggle menu"
        >
          <Menu className="w-6 h-6" />
        </button>
      </div>

      {isMenuOpen && (
        <div className="absolute top-16 left-5 z-50 backdrop-blur-lg p-4 rounded-lg border border-gray-800 shadow-xl">
          <nav>
            <ul className="space-y-4">
              {/* Assuming the menu shows student names */}
              {company && company.students.map((student) => (
                <li key={student.id}>
                  <Link
                    to={`/companies/${student.name}`} // Link to student or company details page
                    className="block px-4 py-2 font-semibold rounded-md transition-colors hover:bg-white"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {student.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}

      <div
        className={`opacity-0 transform translate-y-[-20px] transition-all duration-700 ease-out
          ${isVisible ? "opacity-100 translate-y-0" : ""}`}
      >
        <h1
          className="text-5xl md:text-6xl font-extrabold tracking-wider text-center mb-16"
          style={{ textShadow: "0 0 15px rgba(139, 92, 246, 0.4)" }}
        >
          {company.name}
        </h1>
      </div>

      <div
        className={`overflow-hidden rounded-xl border shadow-md bg-violet-500
            opacity-0 transition-all duration-700 delay-300 ease-out
          ${isVisible ? "opacity-100" : ""}`}
      >
        {company.students.length > 0 ? (
          company.students.map((student, index) => (
            <StudentRow key={student.id} student={student} index={index} />
          ))
        ) : (
          <p className="text-center text-white">No students available.</p>
        )}
      </div>
    </div>
  );
};

export default CompanyDetailsPage;
