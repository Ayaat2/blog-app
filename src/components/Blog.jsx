import { Link } from "react-router-dom";

const Blog = ({ blog }) => {
  return (
    <div className="bg-white rounded-2xl  overflow-hidden border border-border p-4">
      <img
        src={blog.image}
        alt={blog.title}
        className="w-full h-48 bg-cover rounded-md"
      />

      <div className="p-4">
        <span className="text-sm font-medium text-category bg-category-bg px-2 py-1 rounded-md">
          {blog.category}
        </span>
        <Link to={`/posts/${blog.id}`}>
          <h2 className="mt-4 text-2xl font-semibold text-primary  cursor-pointer">
            {blog.title}
          </h2>
        </Link>

        <div className="flex items-center gap-3 mt-5">
          <img
            src={blog.authorImage}
            alt={blog.authorName}
            className="w-8 h-8 rounded-full object-cover"
          />
          <div className="flex justify-center items-center gap-5">
            <p className="text-base font-medium text-secondary-400">
              {blog.authorName}
            </p>
            <p className="text-base font-medium text-secondary-400">
              {blog.date}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
