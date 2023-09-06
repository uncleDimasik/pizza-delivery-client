import styled, { css } from 'styled-components';
import {
  alignItems,
  AlignItemsProps,
  BoxShadowProps,
  compose,
  flexbox,
  FlexboxProps,
  flexDirection,
  FlexDirectionProps,
  justifyContent,
  JustifyContentProps,
  layout,
  LayoutProps,
  position,
  PositionProps,
  space,
  SpaceProps,
} from 'styled-system';
import { rem } from 'polished';

export const box = compose(
  space,
  layout,
  flexbox,
  alignItems,
  justifyContent,
  flexDirection,
  position,
);
export type BoxProps = SpaceProps &
  PositionProps &
  LayoutProps &
  FlexboxProps &
  AlignItemsProps &
  JustifyContentProps &
  FlexDirectionProps &
  BoxShadowProps & {
    marginGapHorizontal?: number;
    marginGapVertical?: number;
  };

export const Box = styled.div<BoxProps>`
  ${(props) =>
    props.marginGapHorizontal
      ? css`
          & > * + * {
            margin-left: ${rem(props.marginGapHorizontal)} !important;
          }
        `
      : ''}
  ${(props) =>
    props.marginGapVertical
      ? css`
          & > * + * {
            margin-top: ${rem(props.marginGapVertical)} !important;
          }
        `
      : ''}
  ${box}
`;
