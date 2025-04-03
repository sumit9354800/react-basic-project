import { createContext, useReducer } from "react";

export const PostListData = createContext({
    postList: [],
    addPost: () => { },
    deletePost: () => { },
    addInitialPosts: () => { }

})
const reducer = (currentPost, action) => {

    let newPostList = currentPost;

    if (action.type === 'DELETE_POST') {
        newPostList = currentPost.filter(post => post.id !== action.payload.postId);
    }
    else if (action.type === 'ADD_INITAIL_POST') {
        newPostList = action.payload.posts;
    }
    else if (action.type === 'ADD_POST') {
        newPostList = [action.payload, ...currentPost]
    }

    return newPostList;
}

const PostListProvider = ({ children }) => {

    const [postList, dispatch] = useReducer(reducer, []);

    const addPost = (userId, postTitle, postBody, reactions, tags) => {
        //  console.log(tags)
        dispatch({
            type: 'ADD_POST',
            payload: {
                id: Date.now(),
                title: postTitle,
                body: postBody,
                reaction: reactions,
                userId: userId,
                tags: tags,
            }
        })

    }
    const addInitialPosts = (posts) => {
        //  console.log(tags)
        dispatch({
            type: 'ADD_INITAIL_POST',
            payload: {
                posts,
            }
        })

    }

    const deletePost = (postId) => {
        console.log(postId);
        dispatch({
            type: 'DELETE_POST',
            payload: {
                postId,
            }
        })
    }

    return <PostListData.Provider value={{
        postList,
        addPost,
        deletePost,
        addInitialPosts
    }}>
        {children}
    </PostListData.Provider>
}
const DEFAULT_POST_LIST = [
    {
        id: '1',
        title: 'Go to mumbai',
        body: 'The sun dipped below the horizon, casting a golden glow across the quiet town. The evening air was cool, carrying the scent of fresh grass and distant ocean waves. ',
        reaction: 2,
        userId: 'sammy',
        tag: ['vacation', 'mumbai', 'enjoying'],
    },
    {
        id: '2',
        title: 'Go to goa',
        body: 'People walked slowly through the streets, their footsteps soft against the cobblestone paths. In the distance',
        reaction: 10,
        userId: 'fury',
        tag: ['gaming', 'noob', 'playing'],
    }
]

export default PostListProvider;