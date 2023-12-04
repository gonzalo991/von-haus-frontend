import React from 'react';
import { PaginationProps } from '../types/Types';
import { Link } from 'react-router-dom';

/**
 * Pagination Component for navigating through pages.
 * 
 * @param {PaginationProps} props - The properties for the Pagination component.
 * @returns {JSX.Element} - Pagination component JSX.
 */
const Pagination: React.FC<PaginationProps> = ({
    totalDePaginas,
    currentPage,
    handleGoToPage,
    handlePreviousPage,
    handleNextPage
}) => {
    // Generate an array containing page numbers from 1 to totalDePaginas
    const pageLinks = [];
    for (let i = 1; i <= totalDePaginas; i++) {
        pageLinks.push(i);
    }

    /**
     * Scroll to the top of the page.
     */
    const scrollToTop = () => {
        window.scrollTo(0, 0);
    };

    return (
        <nav className="pagination is-centered ms-3 me-3 mt-5 mb-5" role="navigation" aria-label="pagination">
            {/* Previous Page Link */}
            <Link
                to={`#/${currentPage - 1}`}
                className={`pagination-previous ${currentPage === 1 ? 'is-disabled' : ''}`}
                aria-label="Previous"
                onClick={() => {
                    scrollToTop();
                    handlePreviousPage();
                }}
            >
                Previous
            </Link>

            {/* Next Page Link */}
            <Link
                to={`#/${currentPage + 1}`}
                className={`pagination-next ${currentPage === totalDePaginas ? 'is-disabled' : ''}`}
                onClick={() => {
                    scrollToTop();
                    handleNextPage();
                }}
                aria-label="Next page"
            >
                Next page
            </Link>

            {/* List of Page Links */}
            <ul className="pagination-list">
                {pageLinks.map((page) => (
                    <li key={page}>
                        {/* Individual Page Link */}
                        <Link
                            to={`#/${page}`}
                            className={`pagination-link ${currentPage === page ? 'is-current' : ''}`}
                            aria-label={`Go to page ${page}`}
                            onClick={() => {
                                scrollToTop();
                                handleGoToPage(page);
                            }}
                        >
                            {page}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Pagination;