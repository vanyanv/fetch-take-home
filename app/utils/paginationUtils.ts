export const ELLIPSIS = '...';

export const getPageNumbers = (currentPage: number, totalPages: number) => {
  const pages = [];

  if (totalPages <= 10) {
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  }

  // Always show first page
  pages.push(1);

  // Calculate start and end of visible pages
  let start = Math.max(2, currentPage - 4);
  let end = Math.min(totalPages - 1, currentPage + 4);

  // Adjust if we're near the start
  if (currentPage <= 5) {
    start = 2;
    end = 8;
  }

  // Adjust if we're near the end
  if (currentPage >= totalPages - 4) {
    start = totalPages - 7;
    end = totalPages - 1;
  }

  // Add ellipsis before middle numbers if needed
  if (start > 2) {
    pages.push(ELLIPSIS);
  }

  // Add middle numbers
  for (let i = start; i <= end; i++) {
    pages.push(i);
  }

  // Add ellipsis after middle numbers if needed
  if (end < totalPages - 1) {
    pages.push(ELLIPSIS);
  }

  // Always show last page
  pages.push(totalPages);

  return pages;
};
