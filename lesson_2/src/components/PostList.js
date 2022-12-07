import React from "react";
import PostListItem from "./PostListItem";

const PostList = ({ posts }) => {

    const elements = posts.map((item) => {
        return (
            <li key={item.id}>
                <PostListItem
                    text={item.text}
                    author={item.author}
                ></PostListItem>
            </li>
        )
    });

    return (
        <ul>
            {elements}
        </ul>
    )
}

export default PostList;