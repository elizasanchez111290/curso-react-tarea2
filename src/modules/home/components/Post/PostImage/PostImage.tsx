import React from "react";
import "./postImage.css";

interface PostImageProps {
  src: string;
  alt: string;
}

const PostImage: React.FC<PostImageProps> = ({ src, alt }) => {
  return <img src={src} alt={alt} className="post-image" />;
};

export default PostImage;
