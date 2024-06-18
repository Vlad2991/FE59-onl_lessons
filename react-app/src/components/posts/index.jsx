import { useEffect, useState } from "react";
import { postsData } from "./mock-data.js";
import { Post } from "../post";
import styles from "./styles.scss";

export const Posts = () => {
  const [posts, setPosts] = useState(postsData);

  return (
    <section className="posts">
      <div className="container">
        <h1 className="posts__title">Blog</h1>
        <div className="posts__wrapper">
          {posts.map((item, index) => {
            let size = "large";

            if (index >= 1 && index <= 4) {
              size = "medium";
            } else if (index > 4) {
              size = "small";
            }

            return <Post post={item} index={index} key={index} size={size} />;
          })}
        </div>
      </div>
    </section>
  );
};
