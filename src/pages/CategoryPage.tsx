import React, { FC } from 'react';
import { Container } from '../styles/global';
import { Box } from '../components/Box';
import { rem } from 'polished';
import { useParams } from 'react-router-dom';

import { ItemsSection } from '../views/ItemsSection';
import {
  CategoryQuery,
  useCategoryQuery,
} from '../@generated/generated.graphql';

export const CategoryPage: FC = () => {
  const { categoryName } = useParams();
  const { data } = useCategoryQuery({
    variables: { where: { name: categoryName } },
  });

  const renderItems = (data: CategoryQuery) => {
    return (
      <ItemsSection
        key={data?.category.id}
        id={data.category.id}
        name={data.category.name}
      />
    );
  };

  return (
    <Container>
      <Box pt={rem(25)}></Box>
      {data && renderItems(data)}
    </Container>
  );
};
