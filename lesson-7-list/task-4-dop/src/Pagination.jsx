import React from 'react';

const Pagination = (props) => {
  let {goPrev, goNext, currentPage, totalItems, itemsPerPage} = props;
  let isPrevPageAvailable;
  let isNextPageAvailable;

  if (currentPage == '1') {
    isPrevPageAvailable = true;
  } else {
    isPrevPageAvailable = false;
  };

  if (currentPage == Math.ceil(totalItems / itemsPerPage)) {
    isNextPageAvailable = true;
  } else {
    isNextPageAvailable = false;
  }

  return (
    <div className="pagination">
      <button className="btn" onClick={goPrev} disabled={isPrevPageAvailable}>{
        isPrevPageAvailable ? null : '←'
      }</button>
      <span className="pagination__page">{currentPage}</span>
      <button className="btn" onClick={goNext} disabled={isNextPageAvailable}>{
        isNextPageAvailable ? null : '→'
      }</button>
    </div>
  );
};

export default Pagination;