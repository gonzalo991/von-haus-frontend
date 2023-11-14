import React from 'react';
import { PaginationProps } from '../types/Types';

const Pagination: React.FC<PaginationProps> = ({ totalDePaginas, currentPage, handleGoToPage, handlePreviousPage, handleNextPage }) => {
    const pageLinks = [];

    for (let i = 1; i <= totalDePaginas; i++) {
        pageLinks.push(i);
    }

    const scrollToTop = () => {
        window.scrollTo(0, 0);
    };

    return (
        <div className="bg-white p-4 flex items-center flex-wrap">
            <nav aria-label="Page navigation">
                <ul className="inline-flex">
                    <li>
                        <button
                            className={`px-4 py-2 text-green-600 transition-colors duration-150 bg-white border border-r-0 border-green-600 rounded-l-lg focus:shadow-outline hover:bg-green-100`}
                            onClick={() => { handlePreviousPage(); scrollToTop(); }}
                            disabled={currentPage === 1}
                        >
                            Anterior
                        </button>
                    </li>
                    {pageLinks.map(page => (
                        <li key={page}>
                            <button
                                className={`px-4 py-2 ${currentPage === page ? 'text-white bg-green-600' : 'text-green-600 bg-white'} transition-colors duration-150 border border-r-0 border-green-600 focus:shadow-outline ${currentPage === page ? 'rounded-l-none rounded-r-none' : ''
                                    }`}
                                onClick={() => {
                                    handleGoToPage(page);
                                    scrollToTop();
                                }}
                                disabled={currentPage === page}
                            >
                                {page}
                            </button>
                        </li>
                    ))}
                    <li>
                        <button
                            className={`px-4 py-2 text-green-600 transition-colors duration-150 bg-white border border-green-600 rounded-r-lg focus:shadow-outline hover:bg-green-100`}
                            onClick={() => {
                                handleNextPage();
                                scrollToTop();
                            }}
                            disabled={currentPage === totalDePaginas}
                        >
                            Siguiente
                        </button>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Pagination;