import React, { FC } from 'react';
import { Link } from 'react-router-dom'; 
import BackButtonSvg from '@assets/icons/BackButtonSvg';
import ForwardButtonSvg from '@assets/icons/ForwardButtonSvg';
import '@assets/stylesheets/newui/paginateStyles.sass.scss';

export type PaginateProp = {
  currentPage: number;
};

const Paginate: FC<PaginateProp> = ({ currentPage }) => {
  return (
    <div
      className="paginateWrapper"
      role="navigation"
      aria-label="Pagination controls"
    >
      {currentPage > 1 && (
        <div className="paginationNumberButtons">
          <Link
            to={`?page=${currentPage - 1}`}
            aria-label="Go to previous page"
          >
            <BackButtonSvg />
          </Link>
        </div>
      )}
      <div className="currentPageNumber" aria-current="page">
        {currentPage}
      </div>
      <div className="paginationNumberButtons">
        <Link
          to={`?page=${currentPage + 1}`}
          aria-label={`Go to page ${currentPage + 1}`}
        >
          {currentPage + 1}
        </Link>
      </div>
      <div className="paginationNumberButtons">
        <Link
          to={`?page=${currentPage + 2}`}
          aria-label={`Go to page ${currentPage + 2}`}
        >
          {currentPage + 2}
        </Link>
      </div>
      <div className="paginationNumberButtons">
        <Link to={`?page=${currentPage + 1}`} aria-label="Go to next page">
          <ForwardButtonSvg />
        </Link>
      </div>
    </div>
  );
};

export default Paginate;
