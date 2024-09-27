import "./post-metadata.css";
import { getTimeOffsetOrDate } from "../../../../../core/utils/data";
import PostMetadataVerified from "./PostMetadataVerified";
import PostUserAvatar from "../PostUserAvatar/PostUserAvatar";

type Props = {
  username: string;
  fullName: string;
  createdAt: string;
  avatar: string;
  verified?: boolean;
};

const PostMetadata: React.FC<Props> = ({
  avatar,
  createdAt,
  fullName,
  username,
  verified,
}) => {
  return (
    <div className="post-metadata-container">
      <div className="post-metadata-user">
        <div className="post-metadata-avatar">
          <PostUserAvatar imgUrl={avatar} alt={`avatar`} />
        </div>
        <span>
          <strong>{fullName}</strong>
        </span>
        {verified && <PostMetadataVerified />}
      </div>
      <div className="post-metadata-user-time">
        <span className="post-metadata-user-time-username">{username}</span>
        <span>{getTimeOffsetOrDate(createdAt)}</span>
      </div>
    </div>
  );
};

export default PostMetadata;
