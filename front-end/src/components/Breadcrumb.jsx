import { Link } from "react-router-dom";

const Breadcrumb = ({ title }) => {
  return (
    <nav
      className="relative z-30 mb-3 md:mb-4 w-fit max-w-[min(100%,20rem)]"
      aria-label="Breadcrumb"
    >
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

    </nav>
  );
};

export default Breadcrumb;