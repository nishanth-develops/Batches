import { useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
function Home() {
  const [batches, setBatches] = useState([]);
  const [loading, setLoading] = useState(true);
  const backendurl=import.meta.env.VITE_BACKEND_URL

  useEffect(() => {
    const fetchBatches = async () => {
      try {
        const { data } = await axios.get('http://localhost:3000/api/user/batches-list');
        if (data.success) {
          setBatches(data.batches);
        } else {
          toast.error(data.message);
        }
      } catch (error) {
        console.log(error);
        toast.error(error.message);
      } finally {
        setLoading(false);
      }
    };
  
    fetchBatches();
  }, []);
  
  if (loading) return <p>Loading batches...</p>;

  return (
    <div className="App">
      <h1>Batch Details</h1>
      {batches?.length > 0 ? (
        batches.map((batch) => (
          <div key={batch.id} className="batch-card">
            {console.log(batch.image)}
{batch.image && <img src={batch.image} alt="Batch Image" 
                      style={{ width: '200px', height: 'auto', borderRadius: '8px' }}/>}
            <p><strong>ID:</strong> {batch.id}</p>
            <p><strong>Year:</strong> {batch.year}</p>
            <p><strong>Branch:</strong> {batch.branch}</p>
            <p><strong>Section:</strong> {batch.section}</p>
          </div>
        ))
      ) : (
        <p>No batches found.</p>
      )}
    </div>
  );
}

export default Home;
