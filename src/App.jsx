import { useEffect, useState } from "react";
import "./App.css";
import Home from "./components/Home";
import LatestBlogPosts from "./components/LatestBlogPosts";
import NavBar from "./components/NavBar";
import { Routes, Route } from "react-router";
import TopicPage from "./components/TopicPage";
import { getAlldata } from "./services/get";

function App() {
  const [topics, setTopics] = useState([]);

  const fetchTopics = async () => {
    const topicsList = await getAlldata();   
    setTopics(topicsList.topics);
  };

  useEffect(() => {
    const getData = async () => {
      await fetchTopics();
    };
    getData();
  }, []);

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/latest" element={<LatestBlogPosts topics={topics} />}/>
        <Route path="/latest/:topicid" element={<TopicPage/>}/>
      </Routes>
    </>
  );
}

export default App;
