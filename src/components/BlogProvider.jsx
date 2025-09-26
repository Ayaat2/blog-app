import { useState } from "react";
import { SampleBlogs } from "../SampleBlogs";
import { BlogContext } from "../../BlogContext";

const BlogProvider = ({ children }) => {
  const [visibleBlogs, setVisibleBlogs] = useState(9);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredBlogs = SampleBlogs.filter((blog) => {
    const titleMatch = blog.title
      ?.toLowerCase()
      .includes(searchQuery.toLowerCase());
    const authorMatch = blog.authorName
      ?.toLowerCase()
      .includes(searchQuery.toLowerCase());
    return titleMatch || authorMatch;
  });

  const displayBlogs = filteredBlogs.slice(0, visibleBlogs);

  return (
    <BlogContext.Provider
      value={{
        visibleBlogs,
        setVisibleBlogs,
        searchQuery,
        setSearchQuery,
        filteredBlogs,
        displayBlogs,
      }}>
      {children}
    </BlogContext.Provider>
  );
};
export default BlogProvider;
