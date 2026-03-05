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
    <div className="m-5 pl-15 pr-10 text-left">
      <h1 className="text-blue-600 font-bold text-2xl pt-10 pb-5">{topic?.title}</h1>
      <p>{topic?.content}</p>
    </div>
  );
}

export default TopicPage;
