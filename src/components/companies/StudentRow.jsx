const StudentRow = ({ student }) => {
  return (
    <div
      className="py-4 border-b border-white hover:bg-gray-900/30 transition-all duration-300
        px-6 flex items-center translate-y-0 hover:translate-y-[-2px] cursor-pointer"
    >
      <h2 className="text-white text-lg font-bold">{student.name}</h2>
    </div>
  );
};

export default StudentRow;
