
import React, { useState } from 'react';
import BlogPostCard from './BlogPostCard';
import Modal from '../Modal/Modal';
import cardDataArray from '../../data/cardData';
import styles from './BlogPosts.module.scss';

const BlogPosts = ({ isBlackTheme }) => {
  const [selectedPost, setSelectedPost] = useState(null);

  const openModal = (post) => {
    setSelectedPost(post);
  };

  const closeModal = () => {
    setSelectedPost(null);
  };

  const largePost = cardDataArray[0];
  const mediumPosts = cardDataArray.slice(1, 3);
  const smallPosts = cardDataArray.slice(3);

  return (
    <div className={isBlackTheme ? styles.blackTheme : ''}>
      <h2>Blog Posts</h2>
      <div className={styles.container}>
        <div className={styles.right__container}>
          <div className={styles.largeContainer}>
            <BlogPostCard post={largePost} onClick={openModal} />
          </div>
          <div className={styles.mediumContainer}>
            {mediumPosts.map((post) => (
              <BlogPostCard key={post.id} post={post} onClick={openModal} />
            ))}
          </div>
        </div>
        <div className={styles.smallContainer}>
          {smallPosts.map((post) => (
            <BlogPostCard key={post.id} post={post} onClick={openModal} />
          ))}
        </div>
      </div>

      <Modal isOpen={!!selectedPost} onClose={closeModal}>
        {selectedPost && (
          <BlogPostCard post={selectedPost} onClick={closeModal} />
        )}
      </Modal>
    </div>
  );
};

export default BlogPosts;
// 