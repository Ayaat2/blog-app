import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Blogs from "./components/Blogs";
import LoadButton from "./components/LoadButton";
import SinglePost from "./components/SinglePost";
import { useContext } from "react";
import { BlogContext } from "../BlogContext";
import BlogProvider from "./components/BlogProvider";

function AppContent() {
  const { visibleBlogs, setVisibleBlogs, filteredBlogs, displayedBlogs } =
    useContext(BlogContext);

  const loadMoreHandler = () => {
    setVisibleBlogs((prev) => prev + 9);
  };

  return (
    <Router>
      <div className="App font-sans container mx-auto px-4">
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Blogs blogs={displayedBlogs} />
                <LoadButton
                  onClick={loadMoreHandler}
                  disabled={visibleBlogs >= filteredBlogs.length}
                />
              </>
            }
          />
          <Route path="/posts/:id" element={<SinglePost />} />
        </Routes>
      </div>
    </Router>
  );
}

function App() {
  return (
    <BlogProvider>
      <AppContent />
    </BlogProvider>
  );
}

export default App;
