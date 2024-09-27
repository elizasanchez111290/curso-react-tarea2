import React from "react";
import PostLikes from "./PostLikes";
import PostComments from "./PostComments";
import PostRetweets from "./PostRetweets";
import PostIcon from "./PostIcon";
import "./postInteractions.css";

type Props = {
  likes: number;
  retweets: number;
  comments: number;
  stats: number;
};

const PostInteractions: React.FC<Props> = ({
  likes,
  retweets,
  stats,
  comments,
}) => {
  return (
    <div className="container">
      <div className="container-comments">
        <PostComments />
        <p>{comments} </p>
      </div>
      <div className="container-retweets">
        <PostRetweets />
        <p>{retweets} </p>
      </div>
      <div className="container-likes">
        <PostLikes />
        <p>{likes} </p>
      </div>
      <div className="container-stats">
        <PostIcon />
        <p>{stats} </p>
      </div>
    </div>
  );
};

export default PostInteractions;
