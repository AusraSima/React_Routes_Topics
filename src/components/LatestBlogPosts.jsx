import { Link } from "react-router";
import TopicPage from "./TopicPage";

function LatestBlogPosts({ topics }) {
  return (
    <div className="flex flex-col m-10">
      <h1 className="text-3xl text-blue-600 font-bold mb-3">
        Latest Blog Posts...
      </h1>
      {topics?.map((topic) => (
       
        <Link key={topic.id} to={`/latest/${topic.id}`}>
          {topic.title}
        </Link>
      ))}
    </div>
  );
}

export default LatestBlogPosts;
