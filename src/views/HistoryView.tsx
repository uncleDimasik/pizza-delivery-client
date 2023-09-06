import React, { useEffect, useMemo, useState } from 'react';
import { Box } from '../components/Box';
import { rem } from 'polished';
import { AccordionItem } from '../components/Accordion/AccordionItem';
import { Pagination } from '../components/Pagination';
import {
  SortOrder,
  useMyOrdersLazyQuery,
  useNumberOfOrdersLazyQuery,
  useNumberOfOrdersQuery,
  useWhoAmIQuery,
} from '../@generated/generated.graphql';
import { H2 } from '../styles/globalFontStyles';

const itemsPerPage = 4;
export const HistoryView = () => {
  const { data: whoAmI } = useWhoAmIQuery();

  const [getOrders, { data: myOrders, fetchMore, loading }] =
    useMyOrdersLazyQuery({
      variables: {
        offset: 0,
        limit: itemsPerPage,
      },
    });
  const [getOrdersCount, { data: numberOfOrders }] =
    useNumberOfOrdersLazyQuery();
  const [currentPage, setCurrentPage] = useState(1);

  useMemo(() => {
    if (whoAmI) {
      getOrdersCount({
        variables: {
          where: {
            userId: {
              equals: whoAmI.whoAmI.id,
            },
          },
        },
      });
      getOrders({
        variables: {
          where: {
            userId: {
              equals: whoAmI.whoAmI.id,
            },
          },
          orderBy: [
            {
              updatedAt: SortOrder.Desc,
            },
          ],
        },
      });
    }
  }, [whoAmI]);

  const handlePageChange = (page: number) => {
    const newLimit = Math.min(
      itemsPerPage,
      numberOfOrders!.countOrders - itemsPerPage * (page - 1),
    );
    console.log(newLimit);
    fetchMore({
      variables: {
        limit: newLimit,
        offset: itemsPerPage * (page - 1),
      },
    });
    setCurrentPage(page);
  };

  if (loading) return <H2>Loading...</H2>;
  return (
    <Box
      display={'flex'}
      flexDirection={'column'}
      justifyContent={'space-between'}
      marginGapVertical={20}
      pb={rem(20)}
    >
      <>
        {myOrders?.orders && numberOfOrders && (
          <>
            {myOrders.orders.map((item) => (
              <AccordionItem key={item.id} {...item} />
            ))}
            <Pagination
              totalItems={numberOfOrders.countOrders}
              itemsPerPage={itemsPerPage}
              currentPage={currentPage}
              onChangePage={handlePageChange}
            />
          </>
        )}
      </>
    </Box>
  );
};
