import { useContext, useState } from "react";
import Post from "./post"
import { PostListData } from "../store/post-list-store";
import WelcomeMessage from "./welcomemessage";

const PostList = () => {
    const [dataFetch, setDataFetch] = useState(false)
    const { postList, addInitialPosts } = useContext(PostListData)

    if (!dataFetch) {
        fetch('https://dummyjson.com/posts')
            .then(res => res.json())
            .then(data => addInitialPosts(data.posts));
        setDataFetch(true)
    }

    console.log(postList);

    // let onGetPostsClick = () => {
    //     fetch('https://dummyjson.com/posts')
    //         .then(res => res.json())
    //         .then(data => addInitialPosts(data.posts));
    // }
    return (
        <>
            <div className="rowPost">
                {/* {postList.length == 0 && <WelcomeMessage onGetPostsClick={onGetPostsClick} />} */}
                {postList.length == 0 && <WelcomeMessage />}
                {postList.map((postdata, index) => (
                    <Post key={index} post={postdata}></Post>
                ))}

            </div>
        </>
    )

}

export default PostList;