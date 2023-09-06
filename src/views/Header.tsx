import React, { FC } from 'react';
import styled from 'styled-components';
import { secondary } from '../styles/config';
import { rem } from 'polished';
import { Container } from '../styles/global';
import { Box } from '../components/Box';
import { LogoIcon } from '../assets/Icons/LogoIcon';
import { Normal } from '../styles/globalFontStyles';
import DropDownMenu from '../components/DropDownMenu';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Paths from '../router/globalRoutes/paths';
import { CartModal } from './CartModal';
import { useCategoriesQuery } from '../@generated/generated.graphql';

const StyledHeader = styled.header`
  background-color: ${secondary};
  padding: ${rem(10)} 0;
`;
const StyledCatalogHeader = styled.ul`
  display: flex;
  flex-direction: row;
  flex: 1 1 auto;

  & > * + * {
    margin-left: ${rem(32)};
  }
`;
const StyledHeaderNav = styled.nav`
  display: flex;
  flex: 1 1 auto;
  margin-left: ${rem(64)};
`;

export const Header: FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { data } = useCategoriesQuery();
  return (
    <StyledHeader>
      <Container>
        <Box
          display={'flex'}
          flexDirection={'row'}
          alignItems={'center'}
          justifyContent={'space-between'}
        >
          <Box onClick={() => navigate(Paths.HOME_PAGE)}>
            <LogoIcon />
          </Box>
          {location.pathname !== Paths.HOME_PAGE ? (
            <StyledHeaderNav>
              <StyledCatalogHeader>
                {data &&
                  data.categories.map((item) => (
                    <Link
                      key={item.id}
                      to={`${Paths.CATEGORY_PAGE_ROOT}${item.name}`}
                    >
                      <li>
                        <Normal>{item.name}</Normal>
                      </li>
                    </Link>
                  ))}
                <li>
                  <DropDownMenu />
                </li>
              </StyledCatalogHeader>
            </StyledHeaderNav>
          ) : (
            ''
          )}
          <CartModal />
        </Box>
      </Container>
    </StyledHeader>
  );
};
