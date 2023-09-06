import React, {
  useState,
  useRef,
  useEffect,
  FC,
  ReactNode,
} from 'react';
import styled from 'styled-components';
import { rem } from 'polished';

const Wrapper = styled.div<{ $height: number }>`
  overflow: hidden;
  transition: 0.2s ease-in-out;
  height: ${(props) => rem(props.$height)};
  display: flex;
  flex-direction: column;
`;

type Props = {
  children?: ReactNode;
  isOpen?: boolean;
};
export const Collapse: FC<Props> = ({ children, isOpen }) => {
  const [contentHeight, setContentHeight] = useState(0);
  const contentRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (isOpen) {
      const contentEl = contentRef.current?.scrollHeight;
      if (contentEl) {
        setContentHeight(contentEl);
      }
    } else {
      setContentHeight(0);
    }
  }, [isOpen]);
  return (
    <Wrapper $height={contentHeight}>
      <div ref={contentRef}>{children}</div>
    </Wrapper>
  );
};

Collapse.defaultProps = {
  isOpen: false,
};
