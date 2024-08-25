import { useState, useEffect, useRef } from "react";
import axios from "../api/axios"; 
import Post from "../components/Post";
import AddPost from "../components/AddPost";
import Navbar from "../components/Navbar";
import FlashcardArticle from "../components/FlashcardArticle";

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchInput, setSearchInput] = useState(""); 
  const [isAddPostModalOpen, setIsAddPostModalOpen] = useState(false); 

  const postRefs = useRef([]);

  useEffect(() => {
    axios
      .get("/posts")
      .then((response) => {
        setPosts(response.data);
        setLoading(false);
      })
      .catch((err) => {
        setError("Failed to fetch posts");
        setLoading(false);
      });
  }, []);

  const scrollToPost = (index) => {
    postRefs.current[index].scrollIntoView({ behavior: "smooth" });
  };

  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(searchInput.toLowerCase())
  );

  const handleAddPostClick = () => {
    setIsAddPostModalOpen(true);
  };

  const closeAddPostModal = () => {
    setIsAddPostModalOpen(false);
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="pt-16">
      <Navbar onAddPostClick={handleAddPostClick} />
      <div className="flex justify-center mt-6">
        <input
          type="text"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          placeholder="Search posts..."
          className="w-full max-w-md px-4 py-2 border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
      </div>

      {!searchInput && <FlashcardArticle />}
      {!searchInput && (
        <section
          id="contents"
          className="mt-8 flex flex-col items-center rounded-lg p-6 mb-4"
        >
          <h2 className="text-2xl font-bold mb-4">Contents</h2>
          <ul className="list-none p-0 space-y-2">
            {posts.map((post, index) => (
              <li
                key={post._id}
                onClick={() => scrollToPost(index)}
                className="cursor-pointer text-lg text-purple-500 hover:text-purple-700 hover:underline"
              >
                <span className="mr-2 font-semibold text-gray-600">
                  {index + 1}.
                </span>
                {post.title}
              </li>
            ))}
          </ul>
        </section>
      )}

      <section id="posts" className="mt-8 flex flex-col items-center">
        {filteredPosts.map((post, index) => (
          <div
            key={post._id}
            ref={(el) => (postRefs.current[index] = el)} 
            className="w-full md:w-1/2 lg:w-1/2"
          >
            <Post post={post} />
          </div>
        ))}
      </section>

      {isAddPostModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full">
            <AddPost closeModal={closeAddPostModal} />
            <button
              onClick={closeAddPostModal}
              className="mt-4 px-4 py-2 bg-red-500 text-white rounded-full hover:bg-red-600"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
