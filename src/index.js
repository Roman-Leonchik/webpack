import Post from "./Post";
import json from "./assets/json.json";
import XML from "./assets/data.xml";
import "./styles/styles.css";

const post = new Post("Webpack Post Title");

console.log("Post to String", post.toString())
console.log("JSON:", json)
console.log("XML:", XML)