import { useEffect, useState } from "react";
import { postsData } from "./mock-data.js";
import { PostDetaild } from "../post-details";
import { Post } from "../post/index.jsx";
import styles from "./styles.scss";

export const Blog = () => {
  const [posts, setPosts] = useState(postsData);
  const [filterValue, setFilterValue] = useState("all");
  const [currentPost, setCurrentPost] = useState(null);

  const isAll = filterValue === "all";
  const isFavourites = filterValue === "favourites";
  const isPopular = filterValue === "popular";

  return (
    <section className="posts">
      <div className="container">
        {currentPost ? (
          <PostDetaild post={currentPost} setCurrentPost={setCurrentPost} />
        ) : (
          <>
            <h1 className="posts__title">Blog</h1>
            <div className="posts__nav">
              <button
                className={`posts__nav-btn ${
                  isAll ? "posts__nav-btn_active" : ""
                }`}
                onClick={() => setFilterValue("all")}
              >
                All
              </button>
              <button
                className={`posts__nav-btn ${
                  isFavourites ? "posts__nav-btn_active" : ""
                }`}
                onClick={() => setFilterValue("favourites")}
              >
                Favourites
              </button>
              <button
                className={`posts__nav-btn ${
                  isPopular ? "posts__nav-btn_active" : ""
                }`}
                onClick={() => setFilterValue("popular")}
              >
                Popular
              </button>
            </div>
            <div
              className={`posts__wrapper ${
                isFavourites || isPopular ? "posts__wrapper_flex" : ""
              }`}
            >
              {posts
                .filter((post) => {
                  if (isAll) {
                    return post;
                  } else if (isFavourites) {
                    return post.favourites;
                  } else {
                    return post.popular;
                  }
                })
                .map((item, index) => {
                  let size = "large";

                  if (isAll) {
                    if (index >= 1 && index <= 4) {
                      size = "medium";
                    } else if (index > 4) {
                      size = "small";
                    }
                  }

                  return (
                    <Post
                      post={item}
                      index={index}
                      key={index}
                      size={size}
                      setCurrentPost={setCurrentPost}
                    />
                  );
                })}
            </div>
          </>
        )}
      </div>
    </section>
  );
};
