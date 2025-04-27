import { useState, useEffect } from "react";
import CompanyCard from "../components/companies/CompanyCard";
import { toast } from "react-toastify";
import axios from "axios";

const CompaniesList = () => {
  const [companies, setCompanies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Replace with your API endpoint
    axios
      .get(`http://localhost:3000/api/user/companies-list`)
      .then((response) => {
        // Check if the response is in the expected format
        // console.log(response.data);

        if (response.data.success && Array.isArray(response.data.companies)) {
          setCompanies(response.data.companies);
        } else {
          setError("No companies found.");
        }
        setLoading(false);
      })
      .catch((err) => {
        setError("Failed to fetch companies.");
        setLoading(false);
        toast.error("Error fetching data.");
      });
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h1 className="text-5xl font-bold mb-4 text-center gradient-text-black">Our Wings Stretch in </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {companies.length > 0 ? (
          companies.map((company) => (
            <CompanyCard key={company.id} company={company} />
          ))
        ) : (
          <p>No companies available.</p>
        )}
      </div>
    </div>
  );
};

export default CompaniesList;
