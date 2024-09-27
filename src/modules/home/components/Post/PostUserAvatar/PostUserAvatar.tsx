import "./post-user-avatar.css";

type Props = {
  imgUrl: string;
  alt?: string;
};

const PostUserAvatar: React.FC<Props> = ({ imgUrl, alt }) => {
  return <img src={imgUrl} alt={alt && "avatar"} className="avatar" />;
};

export default PostUserAvatar;
