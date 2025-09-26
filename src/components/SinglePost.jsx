import { useParams } from "react-router-dom";
import { SampleBlogs } from "../SampleBlogs";

const SinglePost = () => {
  const { id } = useParams();
  const blog = SampleBlogs.find((b) => b.id === Number(id));

  if (!blog) {
    return <p className="p-8 text-center text-red-500">Post not found</p>;
  }

  return (
    <div className="max-w-3xl mx-auto p-8 bg-white rounded-xl ">
      <span className="text-sm font-medium text-white bg-category px-3 py-1.5 rounded-md ">
        {blog.category}
      </span>
      <img
        src={blog.image}
        alt={blog.title}
        className="w-full  rounded-md mb-6 mt-4"
      />

      <h1 className="mt-4 text-3xl font-bold text-primary">{blog.title}</h1>

      <div className="flex items-center gap-3 mt-5 mb-6">
        <img
          src={blog.authorImage}
          alt={blog.authorName}
          className="w-10 h-10 rounded-full object-cover"
        />
        <p className="text-base font-medium text-secondary-400">
          <span className="mr-6">{blog.authorName} </span>
          <span>{blog.date}</span>
        </p>
      </div>

      <div className="prose font-serif max-w-none text-secondary-600">
        {blog.content.split("\n").map((para, i) => (
          <p key={i} className="mb-4 leading-relaxed">
            {para.trim()}
          </p>
        ))}
      </div>
    </div>
  );
};

export default SinglePost;
