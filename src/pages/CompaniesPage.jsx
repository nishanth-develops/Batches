import { useState, useEffect } from "react";
import CompanyCard from "../components/companies/CompanyCard";

const companies = [
  {
    id: 1,
    name: "Amazon",
    students: [
      { id: 1, name: "Person A" },
      { id: 2, name: "Person B" },
      { id: 3, name: "Person C" },
      { id: 4, name: "Person D" },
    ],
    imgUrl:
      "data:image/png;base64,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",
  },
  {
    id: 2,
    name: "Google",
    students: [
      { id: 5, name: "Person E" },
      { id: 6, name: "Person F" },
      { id: 7, name: "Person G" },
    ],
    imgUrl: "https://pngimg.com/d/google_PNG19644.png",
  },
  {
    id: 3,
    name: "Microsoft",
    students: [
      { id: 8, name: "Person H" },
      { id: 9, name: "Person I" },
      { id: 10, name: "Person J" },
      { id: 11, name: "Person K" },
    ],
    imgUrl:
      "data:image/png;base64,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",
  },
  {
    id: 4,
    name: "Apple",
    students: [
      { id: 12, name: "Person L" },
      { id: 13, name: "Person M" },
      { id: 14, name: "Person N" },
    ],
    imgUrl:
      "https://media.licdn.com/dms/image/v2/D4D12AQHwi4jdRd3fQQ/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1685279753620?e=2147483647&v=beta&t=YW7XR2IH5YitaLgvCDlC6rEOqSRzpVzgZ4BWONafvuU",
  },
  {
    id: 5,
    name: "Meta",
    students: [
      { id: 15, name: "Person O" },
      { id: 16, name: "Person P" },
      { id: 17, name: "Person Q" },
    ],
    imgUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSafT0cXoKNUL7daxG2YY3HVKMIebakUMbiEg&s",
  },
  {
    id: 6,
    name: "Netflix",
    students: [
      { id: 18, name: "Person R" },
      { id: 19, name: "Person S" },
      { id: 20, name: "Person T" },
    ],
    imgUrl:
      "https://store-images.s-microsoft.com/image/apps.56161.9007199266246365.1d5a6a53-3c49-4f80-95d7-78d76b0e05d0.a3e87fea-e03e-4c0a-8f26-9ecef205fa7b",
  },
];

const CompaniesPage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsVisible(true);
    }, 500);
  }, []);

  return (
    <div className="space-y-12 p-10">
      <h1
        className={`text-4xl md:text-5xl font-extrabold tracking-wider text-center mb-12
          opacity-0 transform translate-y-[-20px] transition-all duration-1000 ease-out
          ${isVisible ? "opacity-100 translate-y-0" : ""}`}
        style={{ textShadow: "0 0 10px rgba(139, 92, 246, 0.3)" }}
      >
        Our wings stretch in
      </h1>

      <div
        className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10
          opacity-0 transition-all duration-1000 delay-300 ease-out
          ${isVisible ? "opacity-100" : ""}`}
      >
        {companies.map((company) => (
          <CompanyCard key={company.id} company={company} />
        ))}
      </div>
    </div>
  );
};

export default CompaniesPage;
