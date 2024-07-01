import React from 'react';
import PropTypes from 'prop-types';

const FilterButtons = ({ currentFilter, onFilterChange }) => {
  return (
    <div className="filter-buttons">
      <button className={currentFilter === 'all' ? 'active' : ''} onClick={() => onFilterChange('all')}>
        All
      </button>
      <button className={currentFilter === 'popular' ? 'active' : ''} onClick={() => onFilterChange('popular')}>
        Popular
      </button>
      <button className={currentFilter === 'favorites' ? 'active' : ''} onClick={() => onFilterChange('favorites')}>
        My Favorites
      </button>
    </div>
  );
};

FilterButtons.propTypes = {
  currentFilter: PropTypes.string.isRequired,
  onFilterChange: PropTypes.func.isRequired,
};

export default FilterButtons;