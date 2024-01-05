import { useSelector } from "react-redux";
import { selectedPosts } from "../features/posts/postSlice";
import PostForm from "../components/PostForm";

const PostList = () => {
  const posts = useSelector(selectedPosts);
  const renderPosts = posts.map((post) => (
    <div
      key={post.id}
      className="bg-gray-900 max-w-sm px-4 py-6 rounded-md mb-5"
    >
      <h2 className="text-lg font-semibold">{post.title}</h2>
      <hr />
      <p className="pt-2">{post.description}</p>
    </div>
  ));
  return (
    <div className="flex gap-5 mt-10 justify-center">
      <div>
        <PostForm />
      </div>
      <div>
        <h1 className="text-3xl font-bold text-center py-5">All Post</h1>
        {renderPosts}
      </div>
    </div>
  );
};

export default PostList;
