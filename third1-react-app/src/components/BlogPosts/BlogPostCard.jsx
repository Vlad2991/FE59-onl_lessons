
import React from 'react';
import PropTypes from 'prop-types';
import styles from './BlogPostCard.module.scss';

const BlogPostCard = ({ post, onClick }) => {
  const handleCardClick = () => {
    onClick(post);
  };

  return (
    <div className={styles.card} onClick={handleCardClick}>
      <img src={post.image} alt={post.title} className={styles.image} />
      <div className={styles.content}>
        <h3>{post.title}</h3>
        <p>{post.text}</p>
        <p><small>{post.date}</small></p>
        <div className={styles.footer}>
          <span>{post.author}</span>
          <div>
            <button>👍</button>
            <button>👎</button>
          </div>
        </div>
      </div>
    </div>
  );
};

BlogPostCard.propTypes = {
  post: PropTypes.shape({
    image: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
  }).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default BlogPostCard;