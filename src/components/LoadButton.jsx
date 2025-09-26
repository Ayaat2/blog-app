import { useContext } from "react";
import { BlogContext } from "../../BlogContext";

const LoadButton = ({ onClick, disabled }) => {
  const { filteredBlogs } = useContext(BlogContext);
  if (filteredBlogs.length === 0) return null;
  return (
    <div className="flex justify-center mt-8 mb-2">
      <button
        className={`text-base font-medium px-5 py-3 rounded-md border border-border transition
          ${
            disabled
              ? "cursor-not-allowed text-gray-400 bg-gray-100"
              : "cursor-pointer text-secondary-500 hover:bg-secondary-100"
          }
        `}
        onClick={onClick}
        disabled={disabled}>
        {disabled ? "No More Blogs" : "Load More"}
      </button>
    </div>
  );
};
export default LoadButton;
