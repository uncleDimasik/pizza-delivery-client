import React, { PropsWithChildren } from 'react';
import ReactModal from 'react-modal';

export type ReactModalAdapterProps = Omit<
  ReactModal.Props,
  'className'
> &
  PropsWithChildren<{
    className?: string;
  }>;

export const appRoot = document.querySelector('#root') as HTMLElement;

export const overlaySelector = '& > .ReactModal__Overlay';
export const contentSelectorSelector =
  '& > .ReactModal__Overlay > .ReactModal__Content';

function ReactModalAdapter({
  className,
  ...props
}: ReactModalAdapterProps) {
  return (
    <ReactModal
      appElement={appRoot}
      portalClassName={className}
      className='modal-content'
      overlayClassName='modal-overlay'
      {...props}
    />
  );
}

export default ReactModalAdapter;
