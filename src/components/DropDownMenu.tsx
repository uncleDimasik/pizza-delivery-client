import React from 'react';
import { useHover } from '../hooks/useHover';
import { Normal } from '../styles/globalFontStyles';
import styled from 'styled-components';
import { StyledWhiteOutlineWrapper } from './StyledWhiteOutlineWrapper';
import { borderRadius, depths, lightTheme } from '../styles/config';
import { rem } from 'polished';
import { ArrowDownIcon } from '../assets/Icons/ArrowDownIcon';
import { Box } from './Box';

const StyledSubMenu = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  filter: drop-shadow(0 2px 8px rgba(25, 25, 25, 0.4));
  border-radius: ${borderRadius.s};
  white-space: nowrap;
  top: 24px;
  padding: ${rem(19)};

  & > * + * {
    margin-top: ${rem(15)};
  }

  &::before {
    content: '';
    position: absolute;
    bottom: 100%;
    left: 50%;
    margin-left: -8px;
    border-width: 8px;
    border-style: solid;
    border-color: transparent transparent ${lightTheme.secondary}
      transparent;
  }

  ${StyledWhiteOutlineWrapper}
`;
const StyledSubMenuWrapper = styled.div`
  position: absolute;
  left: 50%;
  transform: translate(-50%, 0);
  z-index: ${depths.menu};
`;
const StyledDropDownMenu = styled.div`
  position: relative;
`;

// TODO: Define props
const DropDownMenu = () => {
  const [hoverRef, isHovered] = useHover<HTMLDivElement>();

  return (
    <StyledDropDownMenu ref={hoverRef}>
      <Box
        display={'flex'}
        flexDirection={'row'}
        alignItems={'center'}
      >
        <Normal as={'button'} pr={rem(8)}>
          Другое
        </Normal>
        <ArrowDownIcon isOpen={isHovered} />
      </Box>
      {isHovered ? (
        <StyledSubMenuWrapper>
          <StyledSubMenu>
            <Normal as={'a'} href='#'>
              Акции
            </Normal>
            <Normal as={'a'} href='#'>
              О компании
            </Normal>
            <Normal as={'a'} href='#'>
              Пользовательское соглашение
            </Normal>
            <Normal as={'a'} href='#'>
              Условия гарантии
            </Normal>
            <Normal as={'a'} href='#'>
              Ресторан
            </Normal>
          </StyledSubMenu>
        </StyledSubMenuWrapper>
      ) : (
        ''
      )}
    </StyledDropDownMenu>
  );
};

export default DropDownMenu;
