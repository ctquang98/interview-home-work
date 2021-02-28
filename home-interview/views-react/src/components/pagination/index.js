import React from 'react';
import ReactPaginate from 'react-paginate';
import style from './style.module.css';

const Pagination = ({ currentPage, totalPages, handleChangePage }) => {
    return (
        <ReactPaginate
            forcePage={currentPage}
            previousLabel={'Previous'}
            nextLabel={'Next'}
            breakLabel={'...'}
            pageCount={totalPages}
            marginPagesDisplayed={1}
            pageRangeDisplayed={3}
            onPageChange={handleChangePage}
            containerClassName={style.pagination}
            activeClassName={style.active}
        />
    );
};

export default Pagination;