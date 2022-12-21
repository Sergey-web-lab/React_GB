import React from "react";

const PostListItem = ({ text, author }) => {
    return (
        <div>
            {`${author} написал ${text}.`}
        </div>
    )
}

export default PostListItem;