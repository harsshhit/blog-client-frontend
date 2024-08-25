const Post = ({ post }) => (
  <div className="border border-purple-300 rounded-lg p-6 mb-4 bg-white shadow-md">
    <h2 className="text-2xl font-bold mb-2">{post.title}</h2>
    <p className="text-gray-700 font-semibold mb-4">{post.excerpt}</p>
    <a href={`/posts/${post._id}`} className="text-purple-300  hover:underline">
      Read More
    </a>
  </div>
);

export default Post;
