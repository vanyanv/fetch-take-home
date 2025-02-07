import React from 'react';
import { getPageNumbers } from '../utils/paginationUtils';
type PaginationProps = {
  currentPage: number;
  total: number;
  pageSize?: number;
  setCurrentPage: (page: number) => void;
  disabled?: boolean;
};

export default function Pagination({
  currentPage,
  total,
  pageSize = 8,
  setCurrentPage,
  disabled = false,
}: PaginationProps) {
  const totalPages = Math.ceil(total / pageSize);

  const handlePageClick = (pageNum: number | string) => {
    if (pageNum === '...' || pageNum === currentPage || disabled) {
      return;
    }
    setCurrentPage(Number(pageNum));
  };

  return (
    <div className='bg-white rounded-lg shadow-sm p-4 flex items-center justify-center gap-2'>
      {/* Previous button */}
      <button
        onClick={() => handlePageClick(currentPage - 1)}
        disabled={currentPage === 1 || disabled}
        className='px-3 py-1 rounded-md border hover:bg-gray-50 disabled:opacity-50 disabled:hover:bg-white'
        aria-label='Previous page'
      >
        ←
      </button>

      {/* Page numbers */}
      {totalPages > 0 ? (
        getPageNumbers(currentPage, totalPages).map((pageNum, i) => (
          <button
            key={i}
            onClick={() => handlePageClick(pageNum)}
            disabled={pageNum === '...' || disabled}
            className={`px-3 py-1 rounded-md ${
              pageNum === currentPage
                ? 'bg-blue-500 text-white'
                : pageNum === '...'
                ? 'border cursor-default'
                : 'border hover:bg-gray-50'
            } ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
            aria-label={pageNum === '...' ? 'More pages' : `Page ${pageNum}`}
            aria-current={pageNum === currentPage ? 'page' : undefined}
          >
            {pageNum}
          </button>
        ))
      ) : (
        <span>No pages available</span>
      )}

      {/* Next button */}
      <button
        onClick={() => handlePageClick(currentPage + 1)}
        disabled={currentPage === totalPages || disabled}
        className='px-3 py-1 rounded-md border hover:bg-gray-50 disabled:opacity-50 disabled:hover:bg-white'
        aria-label='Next page'
      >
        →
      </button>
    </div>
  );
}
