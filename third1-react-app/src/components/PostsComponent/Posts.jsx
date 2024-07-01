import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import { MyContext } from '../../hooks/context.hook'; // Импорт контекста из хука

import BlogPosts from '../BlogPosts/BlogPosts'; // Импорт компонента BlogPosts
import Modal from '../Modal/Modal'; // Импорт компонента Modal
import BlogPostCard from '../BlogPostCard/BlogPostCard'; // Импорт компонента BlogPostCard

import styles from './Posts.module.scss'; // Импорт стилей CSS-модуля

const Posts = ({ postsData }) => {
  const [posts, setPosts] = useState(postsData); // Состояние для хранения данных о постах
  const [filterValue, setFilterValue] = useState('all'); // Состояние для текущего фильтра постов
  const [searchPost, setSearchPost] = useState(''); // Состояние для строки поиска постов
  const [selectedPost, setSelectedPost] = useState(null); // Состояние для выбранного поста

  const ctx = useContext(MyContext); 

  const isSearch = searchPost === ''; 

  const handleSearch = (event) => {
    setSearchPost(event.target.value);
  };

  
  const openModal = (post) => {
    setSelectedPost(post);
  };

  // Функция для закрытия модального окна
  const closeModal = () => {
    setSelectedPost(null);
  };

  return (
    <section className={`posts ${ctx.isBlackTheme ? styles.posts_dark : ''}`}>
      <div className="container">
        <h1 className="posts__title">Блог</h1>
        <div className="posts__tabs">
          {/* Кнопки для фильтрации постов */}
          <button className="posts__tabs_item" onClick={() => setFilterValue('all')}>
            Все
          </button>
          <button className="posts__tabs_item" onClick={() => setFilterValue('favorites')}>
            Избранные
          </button>
          <button className="posts__tabs_item" onClick={() => setFilterValue('popular')}>
            Популярные
          </button>
          {/* Поле для поиска */}
          <div className="posts__search">
            <input
              type="text"
              placeholder="Поиск"
              value={searchPost}
              onChange={handleSearch}
            />
          </div>
        </div>
        <div className={!isSearch ? styles.posts_wrapper_flex : (filterValue === 'all' ? styles.posts__wrapper : styles.posts_wrapper_flex)}>
          {/* Рендер компонента BlogPosts с передачей необходимых props */}
          {posts
            .filter((post) => {
              if (filterValue === 'all') {
                return true;
              } else if (filterValue === 'favorites') {
                return post.favorite;
              } else if (filterValue === 'popular') {
                return post.popular;
              }
            })
            .filter((post) =>
              post.title.toLowerCase().includes(searchPost.toLowerCase())
            )
            .map((post) => (
              <BlogPostCard
                key={post.id}
                post={post}
                onClick={() => openModal(post)}
              />
            ))}
        </div>
      </div>
      {/* Компонент Modal для отображения выбранного поста */}
      <Modal isOpen={!!selectedPost} onClose={closeModal}>
        {selectedPost && <BlogPostCard post={selectedPost} onClick={closeModal} />}
      </Modal>
    </section>
  );
};

Posts.propTypes = {
  postsData: PropTypes.array.isRequired, // Принимаем массив данных о постах в качестве props
};

export default Posts;