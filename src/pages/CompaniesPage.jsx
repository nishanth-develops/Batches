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
    imgUrl:"data:image/png;base64,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",
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
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRG_E0-yqpfReOoS8AdARkzHpv3YaywRmPl1g&s"},
  {
    id: 4,
    name: "Apple",
    students: [
      { id: 12, name: "Person L" },
      { id: 13, name: "Person M" },
      { id: 14, name: "Person N" },
    ],
    imgUrl:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAACoCAMAAABt9SM9AAAAdVBMVEX///8AAACBgYH8/Pzn5+dpaWnFxcW3t7e8vLz29vb5+fnV1dXw8PDJycmcnJxTU1Pe3t56enqioqIVFRU8PDzp6elzc3OhoaGzs7MgICCpqakODg6FhYUzMzNkZGSTk5MnJydcXFwwMDBGRkaVlZVOTk4bGxsTq2tVAAAFCUlEQVR4nO2d2ZaiQAyGKcUVxd2x3XBr3/8RR6SZbqEKsKGSSibftZyT/AdDKgnB8wRBEARBEARBEGwybGNbQINRb3bdqTG2GQTww5N60se2xHnGE5UiYhXTPyklYlUiWKqfdLHtcZjhWr0iAd5IsMtopVbYJjlLmJVKKWyTnCX7F3xwxbbJVc55rdQM2yhH0WklmYMezX/wwQDbLCf5o9XqjG2WkwRarVQP2y4XGebyqwRsu5xEH7DUDdsuFzH8CdUQ2zAXuei1+oNtl4ts9Fp9YNvlJIboLgUHDT29VnLS0XHVanXCNstJpvoby8e2y0luWq3kBK3lrtNqi22Vmwx0WknqrqcvWlVnn9dKMncTHYnt1VlmpLpLzmBm8aqV5O1FvEh1CbDNcZsfUp2kilzCv5LDUaoMpcTzRZfOrSvzkE9G41542+/DXlBZkFU/mn0eHjIeJrP95j8JZO1x9FKAuez7pW1Tf3PMpV6XfZd7u7Wf9/rBZD4yX+JHB901MWfG4X8UmbxW6rrR3ier7cl8TUyLZ8I6mBW7rTrZ+cfh5rPkkpgjQ7n0Bb0M6+9cYdCblP8+ocXssRl8VPW8s5163jSsrNQTVvmYpujSLC1sDxtjkC0jWGDJpK9v6NU0zKIg+6DDGESrBwzU6kJppXbkM3rT6JANDtjO1sQH1OqRdmC7W4v2otzDJiHdBDrDatWhHOO3sFqRfrduBSrVkvJt5Xnvne9qQrxhphtZsAbp0O4Z50KtsMF2tiZz0ao6gFqF2L7WBTBtoJ24x1Qujdbmgu1qbQAP0PQbFtr+oBUibFfrA6bVDtvT+sAlpOSzBs8ra6g2xgLb0waA0or8MceDaujEkK+7A4asI7anDdCCEotBePdK5oSag3bBLwFKKw7PwhGUWPSP0IAHQ/K1Gc/4PnjzkO7nfAFWJOUwxGZ9di1liu1pA4ClWRwWS4KJxSHNErHeAEws+hVlQLEkwL8Bh9QBTCwOSSmYWByOO2BicThI69exWuCO7WkDGDb2WYBBogX2UgWHfbhw0+8MGhZtMLE4LHmFE4vBvjaAFwy/oD+cBZdocTjxwOUOaonta20gX5wjnz1o90HagvyiArgIzyDXAozw9KdDwNqsT4gXTMGmHRKIn6fBho6eLGgPAII1pb/UIn1vwVVpEnakm9PAYilFeQ2g4SNDFiHcvYBNHp5MyAYuwALgN3Nsr39LflE5AB9Ej9Vw641euNM8/OCIRfSvWLCV1CY0k3nYdVApVD9DCrpeJYXqYA1KiMd2+tcArxqL2WP7/GuA92fFkE3iEbIHyvX4Stunm4RygRn6gPiJ7XAtgG8tyjUt6FuL9o0Fu3KM+I3lGb6CaQfKj8IEwDSedM8iAeyESDd5/wZstSv5aZqYEEYrJl/XBJk/mmB72RAgVUCaBVINANUHol0dHdafiBxeD0sZWtZqweJJmGJ5fJn8OecVq+UHBov/XrEYtqh2v8y0ra2H37EKWAnWsi3KpWQjluoPTI45WazkpoTn/YqxMCrC5yuQORp/S4VT5p6j4fH4NbY/diktbh1m8233wXbbKi3tMNibX0zR2uVDGLxUWgZBdCn4Oc2ByLfwDa/1HObahoMfGj4dcmKZX+XQPRRnBa4HusFntilDFj/z+sW6LLEcbjJ6RQyWX1RmtU2j9zIaVzrbtYNwskuvsG2ee6yC8fTd2bM2m1K7IAiCIAiCkPIXS6NLW42YLngAAAAASUVORK5CYII=" },
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
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-100 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1
            className={`text-4xl md:text-5xl font-extrabold tracking-wider mb-6
              bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-600
              opacity-0 transform translate-y-8 transition-all duration-1000 ease-out heading
              ${isVisible ? "opacity-100 translate-y-0" : ""}`}
          >
            Our Wings Stretch In
          </h1>
          <p 
            className={`text-lg text-gray-600 max-w-2xl mx-auto
              opacity-0 transform translate-y-4 transition-all duration-1000 delay-300 ease-out
              ${isVisible ? "opacity-100 translate-y-0" : ""}`}
          >
            Explore the top tech companies where our students have landed prestigious roles
          </p>
        </div>

        <div 
          className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10
            opacity-0 transition-all duration-1000 delay-500 ease-out
            ${isVisible ? "opacity-100" : ""}`}
        >
          {companies.map((company, index) => (
            <div 
              key={company.id}
              className={`transform transition-all duration-700 hover:scale-105 hover:-rotate-1
                opacity-0 ${isVisible ? "opacity-100" : ""}`}
              style={{ transitionDelay: `${300 + index * 100}ms` }}
            >
              <CompanyCard company={company} />
            </div>
          ))}
        </div>
        
        <div className="mt-20 text-center">
          <button 
            className={`px-8 py-3 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600
              text-white font-medium shadow-lg hover:shadow-xl transform transition-all 
              duration-300 hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50
              opacity-0 ${isVisible ? "opacity-100" : ""}`}
            style={{ transitionDelay: "1200ms" }}
          >
            View All Placements
          </button>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="fixed top-0 right-0 w-64 h-64 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="fixed bottom-0 left-0 w-80 h-80 bg-indigo-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      
      <style jsx>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -30px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </div>
  );
};

export default CompaniesPage;