import React, { FC, useState } from 'react';
import { StyledButton } from './Buttons/Button';
import { Box } from './Box';

interface PaginationProps {
  totalItems: number;
  itemsPerPage: number;
  currentPage: number;
  onChangePage: (page: number) => void;
}

export const Pagination: FC<PaginationProps> = ({
  totalItems,
  itemsPerPage,
  currentPage,
  onChangePage,
}) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const pagesToShow = 5; // change this number to show more or fewer page numbers

  const [visiblePages, setVisiblePages] = useState<number[]>(() => {
    const startPage = Math.max(
      1,
      currentPage - Math.floor(pagesToShow / 2),
    );
    const endPage = Math.min(totalPages, startPage + pagesToShow - 1);
    return Array.from(
      { length: endPage - startPage + 1 },
      (_, i) => startPage + i,
    );
  });

  const handleClickPage = (page: number) => {
    onChangePage(page);
    const startPage = Math.max(1, page - Math.floor(pagesToShow / 2));
    const endPage = Math.min(totalPages, startPage + pagesToShow - 1);
    setVisiblePages(
      Array.from(
        { length: endPage - startPage + 1 },
        (_, i) => startPage + i,
      ),
    );
  };

  return (
    <Box
      display={'flex'}
      justifyContent={'center'}
      alignItems={'center'}
      marginGapHorizontal={12}
    >
      <StyledButton
        paddingSize={'small'}
        onClick={() => handleClickPage(1)}
      >
        &laquo;
      </StyledButton>
      {visiblePages.map((page) => (
        <StyledButton
          key={page}
          variant={page === currentPage ? 'outline' : 'outlineGray'}
          paddingSize={'small'}
          // active={page === currentPage}
          onClick={() => handleClickPage(page)}
        >
          {page}
        </StyledButton>
      ))}
      <StyledButton
        paddingSize={'small'}
        onClick={() => handleClickPage(totalPages)}
      >
        &raquo;
      </StyledButton>
    </Box>
  );
};
