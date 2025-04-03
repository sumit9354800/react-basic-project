import { useContext } from "react";
import { MdDelete } from "react-icons/md";
import { PostListData } from "../store/post-list-store";

const Post = ({ post }) => {

    const { deletePost } = useContext(PostListData)

    return (
        <div className="cards mt-3 p-2">
            <div className="card" style={{ width: "29rem" }}>
                <div className="card-body">
                    <h5 className="card-title">{post.title}</h5>
                    <span
                        className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" onClick={() => { deletePost(post.id) }}
                    >
                        <MdDelete />
                    </span>
                    <p className="card-text">{post.body}</p>
                    {post.tags.map((tagse , index) => (
                        <span key={index} className="badge text-bg-primary hastag">{tagse}</span>
                    ))}
                    <div className="alert alert-success" role="alert">
                        This Post Has Been Reacted By {post.reaction} People
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Post;
