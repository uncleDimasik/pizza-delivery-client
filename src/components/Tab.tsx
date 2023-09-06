import React, { FC, useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import { rem } from 'polished';
import { borderRadius, color, typography } from '../styles/config';
import { StyledButton } from './Buttons/Button';
import { box, BoxProps } from './Box';
import { StyledWhiteOutlineWrapper } from './StyledWhiteOutlineWrapper';

const StyledTabsWrapper = styled.div<BoxProps>`
  margin: 0;
  border-radius: ${borderRadius.xs};
  width: 100%;
  padding: 0;
  display: flex;
  align-self: start;
  align-items: center;
  ${typography.desktop.normal}
  ${StyledWhiteOutlineWrapper}
  ${box}
`;

type TabType = {
  selectedValue?: (val: string) => void;
  items: ReadonlyArray<TabItem>;
};

type TabItem = {
  id: string;
  name: string;
};

const StyledTab = styled(StyledButton)<{
  isActive: boolean;
  itemsCount: number;
}>`
  padding: ${rem(13)} 0;
  width: ${(props) => 100 / props.itemsCount}%;
  ${({ isActive }) =>
    !isActive &&
    css`
      background: none;
      color: ${color};
    `}
`;

const Tab: FC<TabType> = ({ selectedValue, items }) => {
  const [currentTab, setCurrentTab] = useState(items[0].id);

  useEffect(() => {
    if (selectedValue != null) selectedValue(items[0].id);
  }, []);

  const tabHandler = (id: string) => {
    setCurrentTab(id);
    if (selectedValue != null) selectedValue(id);
  };
  const tabsMap = items.map((tab) => (
    <StyledTab
      type='button'
      key={tab.id}
      id={tab.id.toString()}
      onClick={() => {
        tabHandler(tab.id);
      }}
      isActive={currentTab === tab.id}
      itemsCount={items.length}
    >
      {tab.name}
    </StyledTab>
  ));

  return <StyledTabsWrapper>{tabsMap}</StyledTabsWrapper>;
};

export default Tab;
