import { useContext, useRef } from "react";
import { PostListData } from "../store/post-list-store";

const CreatePost = () => {

    const { addPost } = useContext(PostListData)

    let userIdElement = useRef();
    let postTitleElement = useRef();
    let postBodyElement = useRef();
    let reactionsElement = useRef();
    let tagsElement = useRef();

    const handleSubmit = (event) => {
        event.preventDefault();
        let userId = userIdElement.current.value;
        let postTitle = postTitleElement.current.value;
        let postBody = postBodyElement.current.value;
        let reactions = reactionsElement.current.value;
        let tags = tagsElement.current.value.split(' ');
 
        addPost(userId,postTitle,postBody,reactions,tags);

        userIdElement.current.value = ''
        postTitleElement.current.value = ''
        postBodyElement.current.value = ''
        reactionsElement.current.value = ''
        tagsElement.current.value = ''
        // console.log(postTitle)
    }

    return (
        <>
            <div className="flex mt-5 p-4">
                <div className="col-sm-12 col-md-6 col-lg-6 p-4" style={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px", borderRadius: "10px" }}>
                    <form action="" onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="userId" className="form-label">Enter your user Id here</label>
                            <input type="text" ref={userIdElement} className="form-control" id="userId" aria-describedby="userId" placeholder="user Id" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="post title" className="form-label">Post Title</label>
                            <input type="text" ref={postTitleElement} className="form-control" id="title" aria-describedby="title" placeholder="post title" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="Post Content" className="form-label">Post Content</label>
                            <textarea type="text" ref={postBodyElement} className="form-control" rows="4" id="title" aria-describedby="Post Content" placeholder="Post Content" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="Reactions" className="form-label">Number Of Reactions</label>
                            <input type="text" ref={reactionsElement} className="form-control" id="reactions" aria-describedby="Reactions" placeholder="reactions" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="Reactions" className="form-label">For Tags</label>
                            <input type="text" ref={tagsElement} className="form-control" id="tags" aria-describedby="For Tags" placeholder="tags here" />
                        </div>
                        <button type="submit" className="btn btn-primary">POST</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default CreatePost;