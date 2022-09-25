import {
  Pagination,
  usePagination,
  PaginationNext,
  PaginationPage,
  PaginationPrevious,
  PaginationContainer,
  PaginationPageGroup,
  PaginationSeparator,
} from "@ajna/pagination";

import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";

interface Props {
  totalPages: number;
  handleNextPage: (page:number) => void;
}

const PageButtons = ({ totalPages, handleNextPage }: Props) => {
  const { currentPage, setCurrentPage, pagesCount, pages } = usePagination({
    pagesCount: totalPages,
    initialState: { currentPage: 1 },
    limits: {
      outer: 1,
      inner: 2,
    },
  });


  const handlePageChange = (nextPage: number): void => {
    setCurrentPage(nextPage);
    handleNextPage(nextPage);
  };

  return (
    <Pagination
      pagesCount={pagesCount}
      currentPage={currentPage}
      onPageChange={handlePageChange}
    >
      <PaginationContainer align="center" justify="center" py={8} w="full">
        <PaginationPrevious
          p={0}
          mr={2}
          bg="transparent"
          _hover={{
            bg: "customBlue.50",
            borderColor: "customGreen.50",
          }}
        >
          <ChevronLeftIcon color="customGreen.50" w={6} h={6} />
        </PaginationPrevious>
        <PaginationPageGroup
          separator={
            <PaginationSeparator
              color="customGreen.50"
              fontSize="sm"
              w={7}
              jumpSize={11}
              disabled
              pointerEvents="none"
            />
          }
        >
          {pages.map((page: number) => (
            <PaginationPage
              key={`pagination_page_${page}`}
              page={page}
              bg="customGreen.100"
              color="customGreen.50"
              border="1px"
              mx={1}
              w={8}
              borderColor="customGreen.50"
              _hover={{
                bg: "customBlue.50",
                color: "customGreen.100",
                borderColor: "customGreen.50",
              }}
              _current={{
                bg: "customBlue.50",
                color: "customGreen.100",
                borderColor: "customGreen.50",
              }}
            />
          ))}
        </PaginationPageGroup>
        <PaginationNext
          p={0}
          ml={2}
          bg="transparent"
          _hover={{
            bg: "customBlue.50",
            borderColor: "customGreen.50",
          }}
        >
          <ChevronRightIcon color="customGreen.50" w={6} h={6} />
        </PaginationNext>
      </PaginationContainer>
    </Pagination>
  );
};

export default PageButtons;
