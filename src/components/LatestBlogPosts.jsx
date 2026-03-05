import { Link } from "react-router";

function LatestBlogPosts({ topics }) {
  return (
    <div className="flex flex-col m-10 pl-15">
      <h1 className="text-4xl text-blue-600 font-bold mb-3 text-left">
        Latest Blog Posts...
      </h1>      
      {topics?.map((topic) => (       
        <Link key={topic.id} to={`/latest/${topic.id}`} className="text-left text-2xl underline">
          {topic.title} 
        </Link>
      ))}
    </div>
  );
}

export default LatestBlogPosts;
