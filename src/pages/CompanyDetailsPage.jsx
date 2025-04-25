import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Menu, Briefcase, DollarSign, LineChart, Users, Globe, Award } from "lucide-react";
import StudentRow from "../components/companies/StudentRow";

const companies = [
  {
    id: 1,
    name: "Amazon",
    imgUrl: "",
    color: "bg-orange-100 text-orange-800"
  },
  {
    id: 2,
    name: "Google",
    imgUrl: "",
    color: "bg-blue-100 text-blue-800"
  },
  {
    id: 3,
    name: "Microsoft",
    imgUrl: "",
    color: "bg-green-100 text-green-800"
  },
  {
    id: 4,
    name: "Apple",
    imgUrl: "",
    color: "bg-gray-100 text-gray-800"
  },
  {
    id: 5,
    name: "Meta",
    imgUrl: "",
    color: "bg-indigo-100 text-indigo-800"
  },
  {
    id: 6,
    name: "Netflix",
    imgUrl: "",
    color: "bg-red-100 text-red-800"
  },
];

const googleInfo = {
  fullName: "Google (Alphabet Inc.)",
  founded: "September 4, 1998",
  founders: "Larry Page and Sergey Brin",
  headquarters: "Mountain View, California, USA",
  revenue: "Over $300 billion annually (2024)",
  employees: "Over 180,000 worldwide",
  about: "Google is a multinational technology company specializing in Internet-related services and products, including search engine, online advertising, cloud computing, software, and hardware. It is a subsidiary of Alphabet Inc.",
  jobCategories: [
    "Software Engineering",
    "Product Management",
    "UX/UI Design",
    "Data Science & Analytics",
    "Marketing",
    "Cloud Solutions",
    "AI/ML Research"
  ],
  lifestyle: "Google is renowned for its innovative work culture with perks including free gourmet meals, fitness centers, flexible work arrangements, generous parental leave, and continuous learning opportunities. The company prioritizes work-life balance while fostering an environment of innovation.",
  salaryRanges: {
    "Software Engineer": "$130,000 - $250,000+",
    "Product Manager": "$140,000 - $270,000+",
    "UX Designer": "$120,000 - $200,000+",
    "Data Scientist": "$130,000 - $230,000+",
    "Marketing Manager": "$110,000 - $190,000+"
  },
  growthOpportunities: "Google offers robust career advancement paths with clear promotion tracks, mentorship programs, and rotation opportunities across different product areas. Employees can participate in the '20% time' policy, allowing them to explore passion projects that may evolve into new Google products.",
  notableEmployees: [
    "Sundar Pichai - CEO",
    "Ruth Porat - CFO",
    "Jeff Dean - Head of Google AI",
    "Jen Fitzpatrick - SVP, Core Systems & Experiences",
    "Thomas Kurian - CEO of Google Cloud"
  ]
};

const CompanyDetailsPage = () => {
  const { name } = useParams();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState("overview");

  const company = companies.find((c) => c.name === name) || companies[1]; // Default to Google if not found
  const companyColor = company.color || "bg-blue-100 text-blue-800";

  useEffect(() => {
    setIsVisible(true);
    return () => {
      setIsVisible(false);
    };
  }, [name]);

  const renderContent = () => {
    if (company.name !== "Google") {
      return (
        <div className="text-center py-16">
          <p className="text-2xl font-medium text-violet-800">Details coming soon for {company.name}</p>
          <p className="mt-4 text-violet-600">We're working on compiling comprehensive information about this company.</p>
        </div>
      );
    }

    switch (activeTab) {
      case "overview":
        return (
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-violet-50 to-purple-50 p-8 rounded-2xl border border-violet-100 shadow-sm">
              <h3 className="text-2xl font-bold mb-6 text-violet-900 flex items-center">
                <Globe className="w-6 h-6 mr-3 text-violet-600" />
                About Google
              </h3>
              <p className="text-lg text-violet-800 mb-8 leading-relaxed">{googleInfo.about}</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                {[
                  { label: "Founded", value: googleInfo.founded },
                  { label: "Founders", value: googleInfo.founders },
                  { label: "Headquarters", value: googleInfo.headquarters },
                  { label: "Employees", value: googleInfo.employees }
                ].map((item, index) => (
                  <div key={index} className="p-5 bg-white rounded-xl border border-violet-100 hover:border-violet-300 transition-colors">
                    <p className="text-sm text-violet-600 font-medium">{item.label}</p>
                    <p className="font-medium text-violet-900 mt-1">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-violet-50 to-purple-50 p-8 rounded-2xl border border-violet-100 shadow-sm">
              <h3 className="text-2xl font-bold mb-6 text-violet-900 flex items-center">
                <Globe className="w-6 h-6 mr-3 text-violet-600" />
                Global Impact
              </h3>
              <p className="text-lg text-violet-800 leading-relaxed">
                Google's products and services are used by billions of people around the world. The company continues to shape how people access information, communicate, and conduct business online.
              </p>
            </div>
          </div>
        );
      case "revenue":
        return (
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-violet-50 to-purple-50 p-8 rounded-2xl border border-violet-100 shadow-sm">
              <h3 className="text-2xl font-bold mb-6 text-violet-900 flex items-center">
                <DollarSign className="w-6 h-6 mr-3 text-purple-600" />
                Revenue
              </h3>
              <p className="text-lg text-violet-800 mb-6">Annual Revenue: <span className="font-bold text-purple-700">{googleInfo.revenue}</span></p>
              <div className="bg-white p-6 rounded-xl border border-violet-100">
                <h4 className="font-semibold mb-4 text-violet-900 text-lg">Revenue Streams</h4>
                <ul className="space-y-3">
                  {["Advertising (Google Ads, YouTube)", "Google Cloud Platform", "Google Workspace subscription", "Hardware (Pixel phones, Nest devices)", "Google Play Store"].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-violet-600 mr-2">•</span>
                      <span className="text-violet-800">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="bg-gradient-to-br from-violet-50 to-purple-50 p-8 rounded-2xl border border-violet-100 shadow-sm">
              <h3 className="text-2xl font-bold mb-4 text-violet-900">Financial Performance</h3>
              <p className="text-lg text-violet-800 leading-relaxed">
                Google consistently demonstrates strong financial growth with a diverse portfolio of products and services. The company invests heavily in R&D to maintain its competitive edge in technology markets.
              </p>
            </div>
          </div>
        );
      case "jobs":
        return (
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-violet-50 to-purple-50 p-8 rounded-2xl border border-violet-100 shadow-sm">
              <h3 className="text-2xl font-bold mb-6 text-violet-900 flex items-center">
                <Briefcase className="w-6 h-6 mr-3 text-indigo-600" />
                Career Opportunities
              </h3>
              <div className="mb-8">
                <h4 className="font-semibold mb-4 text-violet-900 text-lg">Job Categories</h4>
                <div className="flex flex-wrap gap-3">
                  {googleInfo.jobCategories.map((category, index) => (
                    <span 
                      key={index} 
                      className="px-4 py-2 bg-white rounded-full text-sm font-medium text-violet-800 border border-violet-200 hover:border-indigo-400 transition-colors"
                    >
                      {category}
                    </span>
                  ))}
                </div>
              </div>
              <div className="bg-white p-6 rounded-xl border border-violet-100">
                <h4 className="font-semibold mb-4 text-violet-900 text-lg">Hiring Process</h4>
                <ol className="space-y-4">
                  {[
                    "Application & resume screening",
                    "Phone/video screening interview",
                    "Technical assessments (role-specific)",
                    "On-site interviews (4-5 rounds)",
                    "Team matching & offer"
                  ].map((step, index) => (
                    <li key={index} className="flex items-start">
                      <span className="bg-violet-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">{index + 1}</span>
                      <span className="text-violet-800">{step}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        );
      case "lifestyle":
        return (
          <div className="bg-gradient-to-br from-violet-50 to-purple-50 p-8 rounded-2xl border border-violet-100 shadow-sm">
            <h3 className="text-2xl font-bold mb-6 text-violet-900 flex items-center">
              <Briefcase className="w-6 h-6 mr-3 text-purple-600" />
              Work Culture & Lifestyle
            </h3>
            <p className="text-lg text-violet-800 mb-8 leading-relaxed">{googleInfo.lifestyle}</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-xl border border-violet-100 hover:border-purple-300 transition-colors">
                <h4 className="font-semibold mb-4 text-violet-900 text-lg">Benefits & Perks</h4>
                <ul className="space-y-3">
                  {[
                    "Comprehensive health insurance",
                    "Flexible work options",
                    "Free gourmet meals",
                    "On-site fitness centers",
                    "Generous parental leave",
                    "Retirement plans with matching"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-purple-600 mr-2">•</span>
                      <span className="text-violet-800">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-white p-6 rounded-xl border border-violet-100 hover:border-purple-300 transition-colors">
                <h4 className="font-semibold mb-4 text-violet-900 text-lg">Company Values</h4>
                <ul className="space-y-3">
                  {[
                    "Focus on the user",
                    "Fast is better than slow",
                    "Democracy on the web works",
                    "You can be serious without a suit",
                    "Great just isn't good enough"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-purple-600 mr-2">•</span>
                      <span className="text-violet-800">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        );
      case "salary":
        return (
          <div className="bg-gradient-to-br from-violet-50 to-purple-50 p-8 rounded-2xl border border-violet-100 shadow-sm">
            <h3 className="text-2xl font-bold mb-6 text-violet-900 flex items-center">
              <DollarSign className="w-6 h-6 mr-3 text-purple-600" />
              Compensation
            </h3>
            <p className="text-lg text-violet-800 mb-8 leading-relaxed">
              Google offers competitive compensation packages including base salary, bonuses, equity, and comprehensive benefits.
            </p>
            <div className="overflow-x-auto rounded-xl border border-violet-100">
              <table className="w-full">
                <thead className="bg-violet-100">
                  <tr>
                    <th className="text-left p-4 font-semibold text-violet-800">Position</th>
                    <th className="text-left p-4 font-semibold text-violet-800">Salary Range (USD)</th>
                  </tr>
                </thead>
                <tbody>
                  {Object.entries(googleInfo.salaryRanges).map(([position, range], index) => (
                    <tr 
                      key={index} 
                      className={index % 2 === 0 ? "bg-white" : "bg-violet-50"}
                    >
                      <td className="p-4 text-violet-900 font-medium">{position}</td>
                      <td className="p-4 text-purple-700 font-medium">{range}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-sm text-violet-600">*Compensation varies based on location, experience, and performance</p>
          </div>
        );
      case "growth":
        return (
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-violet-50 to-purple-50 p-8 rounded-2xl border border-violet-100 shadow-sm">
              <h3 className="text-2xl font-bold mb-6 text-violet-900 flex items-center">
                <LineChart className="w-6 h-6 mr-3 text-indigo-600" />
                Career Growth
              </h3>
              <p className="text-lg text-violet-800 mb-8 leading-relaxed">{googleInfo.growthOpportunities}</p>
              <div className="bg-white p-6 rounded-xl border border-violet-100">
                <h4 className="font-semibold mb-4 text-violet-900 text-lg">Career Development Programs</h4>
                <ul className="space-y-3">
                  {[
                    "Technical leadership paths",
                    "Management training",
                    "Internal mobility opportunities",
                    "Continuous learning resources",
                    "Mentorship programs"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-indigo-600 mr-2">•</span>
                      <span className="text-violet-800">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="bg-gradient-to-br from-violet-50 to-purple-50 p-8 rounded-2xl border border-violet-100 shadow-sm">
              <h3 className="text-2xl font-bold mb-6 text-violet-900 flex items-center">
                <Award className="w-6 h-6 mr-3 text-indigo-600" />
                Innovation
              </h3>
              <p className="text-lg text-violet-800 leading-relaxed">
                Google encourages innovation through initiatives like the famous "20% time" policy, which has led to the development of products such as Gmail, Google News, and AdSense.
              </p>
            </div>
          </div>
        );
      case "people":
        return (
          <div className="bg-gradient-to-br from-violet-50 to-purple-50 p-8 rounded-2xl border border-violet-100 shadow-sm">
            <h3 className="text-2xl font-bold mb-6 text-violet-900 flex items-center">
              <Users className="w-6 h-6 mr-3 text-violet-600" />
              Leadership & People
            </h3>
            <div className="mb-8">
              <h4 className="font-semibold mb-4 text-violet-900 text-lg">Key Leadership</h4>
              <ul className="space-y-3">
                {googleInfo.notableEmployees.map((employee, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-violet-600 mr-2">•</span>
                    <span className="text-violet-800">{employee}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white p-6 rounded-xl border border-violet-100">
              <h4 className="font-semibold mb-4 text-violet-900 text-lg">Work Environment</h4>
              <p className="text-violet-800 leading-relaxed">
                Google employees, often called "Googlers," work in a collaborative and innovative environment. The company attracts top talent from around the world, creating a diverse and highly skilled workforce.
              </p>
            </div>
          </div>
        );
      default:
        return (
          <div className="bg-gradient-to-br from-violet-50 to-purple-50 p-8 rounded-2xl border border-violet-100 shadow-sm text-center py-12">
            <p className="text-xl text-violet-800">Content not available</p>
          </div>
        );
    }
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-violet-50 to-white text-violet-900 p-5">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-12">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`p-2 rounded-md hover:bg-violet-100 cursor-pointer transition-all duration-300 ${
              isMenuOpen ? "bg-violet-100" : ""
            }`}
            aria-label="Toggle menu"
          >
            <Menu className="w-6 h-6 text-violet-700" />
          </button>
        </div>

        {isMenuOpen && (
          <div className="absolute top-16 left-5 z-50 bg-white backdrop-blur-lg p-4 rounded-xl border border-violet-200 shadow-xl">
            <nav>
              <ul className="space-y-2">
                {companies.map((c) => (
                  <li key={c.id}>
                    <Link
                      to={`/companies/${c.name}`}
                      className={`block px-4 py-3 rounded-lg transition-colors font-medium ${
                        c.name === company.name
                          ? `${c.color.split(' ')[0]} ${c.color.split(' ')[1]} border border-violet-300 shadow-sm`
                          : "hover:bg-violet-50 text-violet-700"
                      }`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {c.name}
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
          <div className="flex flex-col items-center">
            <div className={`w-24 h-24 ${companyColor.split(' ')[0]} rounded-full flex items-center justify-center mb-6 shadow-sm border border-violet-200`}>
              <span className={`text-4xl font-bold ${companyColor.split(' ')[1]}`}>{company.name.charAt(0)}</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-center bg-clip-text text-transparent bg-gradient-to-r from-violet-700 to-purple-500">
              {company.name}
            </h1>
            {company.name === "Google" && (
              <p className="mt-4 text-xl text-violet-600">{googleInfo.fullName}</p>
            )}
          </div>
        </div>

        {company.name === "Google" && (
          <div
            className={`mt-12 opacity-0 transition-all duration-700 ease-out translate-y-[-20px] transform
              ${isVisible ? "opacity-100 translate-y-0 delay-200" : ""}`}
          >
            <div className="flex justify-center flex-wrap gap-3 mb-10">
              {[
                { id: "overview", label: "Overview", icon: <Globe className="w-5 h-5 mr-2 text-violet-600" /> },
                { id: "revenue", label: "Revenue", icon: <DollarSign className="w-5 h-5 mr-2 text-purple-600" /> },
                { id: "jobs", label: "Jobs", icon: <Briefcase className="w-5 h-5 mr-2 text-indigo-600" /> },
                { id: "lifestyle", label: "Lifestyle", icon: <Briefcase className="w-5 h-5 mr-2 text-purple-600" /> },
                { id: "salary", label: "Salary", icon: <DollarSign className="w-5 h-5 mr-2 text-purple-600" /> },
                { id: "growth", label: "Growth", icon: <LineChart className="w-5 h-5 mr-2 text-indigo-600" /> },
                { id: "people", label: "People", icon: <Users className="w-5 h-5 mr-2 text-violet-600" /> }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-5 py-2.5 rounded-lg font-medium transition-all flex items-center ${
                    activeTab === tab.id 
                      ? "bg-violet-600 text-white shadow-md"
                      : "bg-white text-violet-700 hover:bg-violet-50 border border-violet-200"
                  }`}
                >
                  {tab.icon}
                  {tab.label}
                </button>
              ))}
            </div>
            
            <div
              className={`opacity-0 transition-all duration-500 ease-out
                ${isVisible ? "opacity-100 delay-300" : ""}`}
            >
              {renderContent()}
            </div>
          </div>
        )}

        <div
          className={`mt-12 opacity-0 transition-all duration-700 ease-out translate-y-[-20px] transform
            ${isVisible ? "opacity-100 translate-y-0 delay-500" : ""}`}
        >
          <StudentRow />
        </div>
      </div>
    </div>
  );
};

export default CompanyDetailsPage;