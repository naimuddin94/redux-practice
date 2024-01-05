import { useDispatch } from "react-redux";
import { postAdded } from "../features/posts/postSlice";

const PostForm = () => {
  const dispatch = useDispatch();
  const handlePost = (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const description = form.description.value;
    dispatch(postAdded(title, description));
  };

  return (
    <div className="card shrink-0 w-96 bg-gray-900 rounded-md">
      <form onSubmit={handlePost} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Title</span>
          </label>
          <input
            name="title"
            type="text"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Description</span>
          </label>
          <textarea
            name="description"
            className="textarea textarea-bordered"
            required
          ></textarea>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-accent">Add Post</button>
        </div>
      </form>
    </div>
  );
};

export default PostForm;
