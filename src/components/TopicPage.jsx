import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getOne } from "../services/get";

function TopicPage() {
  const [topic, setTopic] = useState({});
  const { topicid } = useParams();

  const getTopicDetails = async () => {
    const data = await getOne(topicid);
    setTopic(data);
  };

  useEffect(() => {
    const getTopic = async () => await getTopicDetails(topicid);
    getTopic();
  }, [topicid]);

  return (
    <div>
      <h1 className="text-blue-600">{topic.title}</h1>
      <p>{topic.content}</p>
    </div>
  );
}

export default TopicPage;
