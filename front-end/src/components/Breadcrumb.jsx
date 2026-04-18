import { Link } from "react-router-dom";

const Breadcrumb = ({ title }) => {
  return (
    <div className="absolute top-[95px] md:top-[105px] left-8 md:left-16 z-50">

      <div className="flex items-center gap-1 text-[12px] md:text-[13px] text-gray-700 
                      backdrop-blur-md bg-white/80 
                      px-2 py-[3px] rounded 
                      border border-gray-200 
                      shadow-sm w-fit">

        <Link
          to="/"
          className="text-blue-600 hover:underline font-medium shrink-0"
        >
          Home
        </Link>

        <span className="text-gray-400 shrink-0">/</span>

        <span className="text-gray-800 font-medium truncate max-w-[120px] md:max-w-[180px]">
          {title}
        </span>

      </div>

    </div>
  );
};

export default Breadcrumb;