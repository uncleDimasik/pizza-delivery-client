import React, { FC } from 'react';
import { Container, Main, Wrapper } from '../styles/global';
import { Footer } from '../views/Footer';
import { HeaderHome } from '../views/HeaderHome';
import { CategoryWrapper } from '../views/CategoryWrapper';
import { rem } from 'polished';
import { ItemsSection } from '../views/ItemsSection';
import { Box } from '../components/Box';
import { useCategoriesQuery } from '../@generated/generated.graphql';

export const HomePage: FC = () => {
  const { data } = useCategoriesQuery();
  return (
    <Wrapper>
      <HeaderHome />
      <Main>
        <Container>
          <Box pt={rem(30)} pb={rem(30)}>
            <CategoryWrapper />
          </Box>
          {data &&
            data.categories.map((item) => (
              <ItemsSection
                key={item.id}
                id={item.id}
                name={item.name}
              />
            ))}
        </Container>
      </Main>
      <Footer />
    </Wrapper>
  );
};
