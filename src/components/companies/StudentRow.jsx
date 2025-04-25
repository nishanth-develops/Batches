const students = [
  {
    id: 1,
    FirstName: "Ashton",
    LastName: "Brady",
    Position: "Accountant",
    OfficeBranch: "London",
    Age: 36,
    Salary: 162700,
  },
  {
    id: 2,
    FirstName: "Miles",
    LastName: "Tenner",
    Position: "Integration Specialist",
    OfficeBranch: "San Francisco",
    Age: 41,
    Salary: 372000,
  },
  {
    id: 3,
    FirstName: "Harvey",
    LastName: "Spencer",
    Position: "Regional Director",
    OfficeBranch: "London",
    Age: 42,
    Salary: 470600,
  },
  {
    id: 4,
    FirstName: "Mike",
    LastName: "Sallanger",
    Position: "Personnel Lead",
    OfficeBranch: "New York",
    Age: 38,
    Salary: 220500,
  },
  {
    id: 5,
    FirstName: "Jaden",
    LastName: "Hyatt",
    Position: "Team Lead",
    OfficeBranch: "London",
    Age: 35,
    Salary: 240700,
  },
  {
    id: 6,
    FirstName: "Donna",
    LastName: "Hannigan",
    Position: "Senior Marketing Designer",
    OfficeBranch: "San Francisco",
    Age: 36,
    Salary: 275100,
  },
  {
    id: 7,
    FirstName: "Nile",
    LastName: "Harris",
    Position: "Development Lead",
    OfficeBranch: "New York",
    Age: 37,
    Salary: 345200,
  },
];

const StudentRow = () => {
  return (
    <div className="relative overflow-x-auto shadow-md">
      <table className="w-full text-sm text-left rtl:text-right border border-gray-500">
        <thead className="text-base bg-gray-700 text-white font-semibold">
          <tr>
            <th scope="col" className="px-6 py-3">
              First name
            </th>
            <th scope="col" className="px-6 py-3">
              Last name
            </th>
            <th scope="col" className="px-6 py-3">
              Position
            </th>
            <th scope="col" className="px-6 py-3">
              Office Branch
            </th>
            <th scope="col" className="px-6 py-3">
              Age
            </th>
            <th scope="col" className="px-6 py-3">
              Salary
            </th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, index) => (
            <tr
              key={index}
              className="odd:bg-gray-900 even:bg-gray-800 border-gray-200"
            >
              <th
                scope="row"
                className="px-6 py-4 font-medium whitespace-nowrap text-white"
              >
                {student.FirstName}
              </th>
              <th
                scope="row"
                className="px-6 py-4 font-medium whitespace-nowrap text-white"
              >
                {student.LastName}
              </th>
              <th
                scope="row"
                className="px-6 py-4 font-medium whitespace-nowrap text-white"
              >
                {student.Position}
              </th>
              <th
                scope="row"
                className="px-6 py-4 font-medium whitespace-nowrap text-white"
              >
                {student.OfficeBranch}
              </th>
              <th
                scope="row"
                className="px-6 py-4 font-medium whitespace-nowrap text-white"
              >
                {student.Age}
              </th>
              <th
                scope="row"
                className="px-6 py-4 font-medium whitespace-nowrap text-white"
              >
                {student.Salary}
              </th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentRow;
