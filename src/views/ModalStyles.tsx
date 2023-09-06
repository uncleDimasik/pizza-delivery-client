import styled from 'styled-components';
import ReactModalAdapter, {
  contentSelectorSelector,
  overlaySelector,
} from '../components/ReactModalAdapter';
import { rem } from 'polished';
import { borderRadius, depths, secondary } from '../styles/config';

export const StyledModalLeftSide = styled(ReactModalAdapter)`
  ${overlaySelector} {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    transition: all 0.3s ease-out 0s;
    z-index: ${depths.modal};
    &.ReactModal__Overlay--after-open {
      backdrop-filter: blur(16px);
      background: rgba(25, 25, 25, 0.4);
    }
  }

  ${contentSelectorSelector} {
    position: relative;
    height: 100%;
    display: flex;
    flex: 0 1 ${rem(420)};
    flex-direction: column;
    align-items: center;
    background-color: ${secondary};
  }

  & > * {
    text-shadow: none;
  }

,
`;
export const StyledModalCenter = styled(ReactModalAdapter)`
  ${overlaySelector} {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    transition: all 0.3s ease-out 0s;
    z-index: ${depths.modal};
    &.ReactModal__Overlay--after-open {
      backdrop-filter: blur(16px);
      background: rgba(25, 25, 25, 0.4);
      overflow: auto;
    }
  }

  ${contentSelectorSelector} {
    position: relative;
    height:auto;
    display: flex;
    flex: 0 1 auto;
    flex-direction: column;
    align-items: center;
    background-color: ${secondary};
    border-radius: ${borderRadius.x};
    margin: auto;
 
  }

  & > * {
    text-shadow: none;
  }

,
`;
