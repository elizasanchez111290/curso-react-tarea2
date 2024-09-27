import useFetch from "../../../core/hooks/useFetch";
import PostMetadata from "../components/Post/PostMetadata/PostMetadata";
import { getPosts } from "../services/post";
import { Post } from "../types/post";
import PostInteractions from "../components/Post/PostInteractions/PostInteractions";
import "./homeContainer.css";
import PostImage from "../components/Post/PostImage/PostImage";

const HomeContainer = () => {
  const { data, loading, error } = useFetch<Post>(getPosts);

  if (error) {
    return <span>{error}</span>;
  }

  return (
    <div>
      {loading && <span>Loading...</span>}
      {data.map((post, key) => (
        <div key={`post-${key}`} className="post-container">
          <PostMetadata
            avatar={post.user.avatar}
            createdAt={post.postDate}
            fullName={post.user.name}
            username={post.user.username}
            verified
          />
          <div className="post-content">
            <span>{post.content}</span>
            {post.image && (
              <PostImage src={post.image} alt={`Image for ${post.user.name}`} />
            )}
            <PostInteractions
              comments={post.comments}
              likes={post.likes}
              retweets={post.retweets}
              stats={post.stats}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default HomeContainer;
