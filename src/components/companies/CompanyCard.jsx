import { Link } from "react-router-dom";

const CompanyCard = ({ company }) => {
  return (
    <Link to={`${company.name}`} className="block group">
      <div
        className="h-40 border flex justify-center items-center rounded-md relative
       group group-hover:scale-105 transition-all duration-300 ease-out"
      >
        <img
          src={company.imgUrl}
          alt="CompImg"
          className="w-3/4 h-3/4 absolute object-contain opacity-0 group-hover:opacity-100 group-hover:scale-105
          transition-all duration-300 ease-out"
        />
        <h3 className="text-3xl p-2 text-center gradient-text group-hover:opacity-0 transition-all ease-out duration-300">
          {company.name}
        </h3>
      </div>
    </Link>
  );
};

export default CompanyCard;
