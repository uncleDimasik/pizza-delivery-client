import React from 'react';
import Category from '../components/Category';
import styled from 'styled-components';
import { useCategoriesQuery } from '../@generated/generated.graphql';
import { SvgInline } from '../utils/SvgInLine';
import Paths from '../router/globalRoutes/paths';
import { Link } from 'react-router-dom';

const StyledCategoryWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const CategoryWrapper = () => {
  const { data } = useCategoriesQuery();
  return (
    <StyledCategoryWrapper>
      {data &&
        data.categories.map((item) => (
          <Link
            key={item.id}
            to={`${Paths.CATEGORY_PAGE_ROOT}${item.name}`}
          >
            <Category description={item.name}>
              <SvgInline url={item.image} />
            </Category>
          </Link>
        ))}
    </StyledCategoryWrapper>
  );
};
