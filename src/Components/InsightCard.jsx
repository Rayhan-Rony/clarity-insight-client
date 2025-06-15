import { Link } from "react-router";
import { dateFormat } from "../Utils/DateHelpers";

const InsightCard = ({ article }) => {
  const { year, month, day } = dateFormat(article.date);
  console.log(year, month, day);

  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
      <h2 className="md:text-2xl text-xl font-bold text-gray-800 mb-2">
        {article.title}
      </h2>
      <p className="text-gray-600 text-sm mb-4">
        By {article.name} on {`${day[0]}${day[1]}/${month}/${year}`}
      </p>
      {/* line-clamp-3 ensures the content snippet doesn't exceed 3 lines */}
      <p className="text-gray-700 leading-relaxed mb-4 line-clamp-3">
        {article.content}
      </p>
      <Link
        to={`/insights/${article._id}`}
        className="group relative inline-flex items-center overflow-hidden rounded-sm px-8 py-3 bg-[#00FFFF]  text-black focus:ring-3 focus:outline-hidden"
        href="#"
      >
        <span className="absolute -end-full transition-all group-hover:end-4">
          <svg
            className="size-5 shadow-sm rtl:rotate-180"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </span>

        <span className=" font-medium transition-all group-hover:me-4">
          {" "}
          Read More
        </span>
      </Link>
    </div>
  );
};

export default InsightCard;
