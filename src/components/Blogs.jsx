import { useContext } from "react";
import Blog from "./Blog";
import { BlogContext } from "../../BlogContext";

const Blogs = () => {
  const { displayBlogs, filteredBlogs } = useContext(BlogContext);

  const noMatch = filteredBlogs.length === 0;
  if (noMatch) {
    return (
      <div className="flex flex-col items-center justify-center py-20">
        <p className="text-red-500 text-lg font-medium">
          No blogs found matching your search
        </p>
      </div>
    );
  }
  return (
    <div className="container mx-auto px-4 py-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3 ">
      {displayBlogs.map((blog) => (
        <Blog key={blog.id} blog={blog} />
      ))}
    </div>
  );
};
export default Blogs;
