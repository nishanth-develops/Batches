import { useState, useEffect } from "react";
import { getSavedMemories, saveMemories } from "../../data/data";
import { PlusCircle, X } from "lucide-react";

const AddMemoryButton = ({ batchYear, department, onMemoryAdded }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [memoryText, setMemoryText] = useState("");
  const [authorName, setAuthorName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!memoryText.trim() || !authorName.trim()) {
      return;
    }

    const memories = getSavedMemories();

    const newMemory = {
      id: Date.now().toString(),
      text: memoryText,
      authorId: Date.now().toString(),
      authorName: authorName,
      timestamp: Date.now(),
      batch: batchYear,
      department: department,
    };

    const updatedMemories = [...memories, newMemory];
    saveMemories(updatedMemories);

    setMemoryText("");
    setAuthorName("");
    setIsModalOpen(false);
    onMemoryAdded();
  };

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") {
        setIsModalOpen(false);
      }
    };

    window.addEventListener("keydown", handleEsc);

    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  }, []);

  return (
    <>
      <button
        onClick={() => setIsModalOpen(true)}
        className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
      >
        <PlusCircle className="w-5 h-5 mr-2" />
        <span>Add Memory</span>
      </button>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-md mx-4">
            <div className="flex justify-between items-center p-4 border-b">
              <h3 className="text-xl font-semibold text-gray-800">
                Share a Memory
              </h3>
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="p-4">
              <div className="mb-4">
                <label
                  className="block text-gray-700 mb-2"
                  htmlFor="authorName"
                >
                  Your Name
                </label>
                <input
                  id="authorName"
                  type="text"
                  value={authorName}
                  onChange={(e) => setAuthorName(e.target.value)}
                  placeholder="Enter your name"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              <div className="mb-4">
                <label
                  className="block text-gray-700 mb-2"
                  htmlFor="memoryText"
                >
                  Memory
                </label>
                <textarea
                  id="memoryText"
                  value={memoryText}
                  onChange={(e) => setMemoryText(e.target.value)}
                  placeholder="Share your memory..."
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 h-32"
                  required
                />
              </div>

              <div className="flex justify-end space-x-3">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                >
                  Share Memory
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default AddMemoryButton;
