import { useContext } from "react";
import SearchOutLine from "../assets/search-outline.svg";
import { BlogContext } from "../../BlogContext";

const SearchInput = () => {
  const { searchQuery, setSearchQuery } = useContext(BlogContext);
  return (
    <form className="relative w-full sm:w-64">
      <input
        type="text"
        placeholder="Search"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="w-full bg-secondary-100 py-2 pl-4 pr-10 rounded-lg outline-none"
      />
      <img
        src={SearchOutLine}
        alt="Search icon"
        className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5"
      />
    </form>
  );
};

export default SearchInput;
