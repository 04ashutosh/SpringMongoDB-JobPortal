import React, { useEffect, useState } from "react";
import { getAllPosts, searchPosts, addPost } from "./PostService";

function App() {
  const [posts, setPosts] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [newPost, setNewPost] = useState({ desc: "", exp: 0, profile: "", techs: [] });

  // Load all posts
  useEffect(() => {
    getAllPosts().then((res) => setPosts(res.data));
  }, []);

  const handleSearch = () => {
    searchPosts(searchText).then((res) => setPosts(res.data));
  };

  const handleAddPost = () => {
    addPost(newPost).then((res) => {
      setPosts([...posts, res.data]);
      setNewPost({ desc: "", exp: 0, profile: "", techs: [] });
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-4xl font-bold text-center text-blue-700 mb-8">
        Job Listings Portal
      </h1>

      {/* Search Section */}
      <div className="flex justify-center mb-6">
        <input
          type="text"
          placeholder="Search jobs (e.g. Java, Spring)..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          className="w-1/2 p-3 border rounded-l-lg focus:outline-none"
        />
        <button
          onClick={handleSearch}
          className="bg-blue-600 text-white px-5 rounded-r-lg hover:bg-blue-700"
        >
          Search
        </button>
      </div>

      {/* Add Post Form */}
      <div className="bg-white p-6 rounded-xl shadow-md mb-10 max-w-lg mx-auto">
        <h2 className="text-2xl font-semibold mb-4 text-gray-700">Add New Job Post</h2>
        <div className="space-y-3">
          <input
            type="text"
            placeholder="Profile"
            value={newPost.profile}
            onChange={(e) => setNewPost({ ...newPost, profile: e.target.value })}
            className="w-full p-2 border rounded"
          />
          <textarea
            placeholder="Description"
            value={newPost.desc}
            onChange={(e) => setNewPost({ ...newPost, desc: e.target.value })}
            className="w-full p-2 border rounded"
            rows={3}
          />
          <input
            type="number"
            placeholder="Experience (years)"
            value={newPost.exp}
            onChange={(e) => setNewPost({ ...newPost, exp: e.target.value })}
            className="w-full p-2 border rounded"
          />
          <input
            type="text"
            placeholder="Technologies (comma separated)"
            onChange={(e) => setNewPost({ ...newPost, techs: e.target.value.split(",") })}
            className="w-full p-2 border rounded"
          />
          <button
            onClick={handleAddPost}
            className="w-full bg-green-600 text-white p-2 rounded hover:bg-green-700"
          >
            Add Job Post
          </button>
        </div>
      </div>

      {/* Posts Grid */}
      <h2 className="text-2xl font-semibold text-center text-gray-700 mb-6">
        Available Job Posts
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post, idx) => (
          <div
            key={idx}
            className="bg-white p-5 rounded-xl shadow hover:shadow-lg transition"
          >
            <h3 className="text-xl font-bold text-blue-600">{post.profile}</h3>
            <p className="text-gray-600 mt-1">{post.desc}</p>
            <p className="mt-2 text-sm">
              <b>Experience:</b> {post.exp} years
            </p>
            <p className="mt-1 text-sm">
              <b>Technologies:</b> {post.techs?.join(", ")}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
