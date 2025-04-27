import { useEffect, useState } from "react";
import BatchCard from "../components/community/BatchCard";
import { useAuth } from "@clerk/clerk-react";
import {toast} from 'react-toastify'
import axios from "axios";
import { useLocation } from "react-router-dom";

// const batches = [
//   {
//     year: "2024",
//     totalStudents: 450,
//     image:
//       "https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//   },
//   {
//     year: "2025",
//     totalStudents: 480,
//     image:
//       "https://images.pexels.com/photos/1438072/pexels-photo-1438072.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//   },
//   {
//     year: "2026",
//     totalStudents: 520,
//     image:
//       "https://images.pexels.com/photos/256541/pexels-photo-256541.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//   },
// ];

const CommunityPage = () => {
  const location = useLocation();
  const [batches, setBatches] = useState([])
  const [loading, setLoading] = useState(true);

  const fetchBatches = async () => {
    try {
      const { data } = await axios.get('http://localhost:3000/api/user/batches-list');
      if (data.success) { 
        setBatches(data.batches) 
        console.log(data.batches)
      }
      else {
        toast.error(data.message)
      }
    } catch (error) {
      console.log(error)
      toast.error(error.message)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchBatches(); 


    const handleFocus = () => {
      fetchBatches();
    };

    window.addEventListener('focus', handleFocus);

    return () => {
      window.removeEventListener('focus', handleFocus);
    };
  }, [location.pathname]);

  return (
    <div className="p-10">
      <div className="mb-8 text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Welcome to the Batch Community Portal
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Connect with your academic batch, share memories, and stay updated
          with achievements. Select a batch to get started.
        </p>
      </div>

      {loading ? (
        <p className="text-center text-gray-500">Loading batches...</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {batches.map((batch) => (
            <BatchCard key={batch.id} batch={batch} />
          ))}
        </div>
      )}
    </div>
  );
};

export default CommunityPage;