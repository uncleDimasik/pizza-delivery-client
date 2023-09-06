import { useCallback, useState } from 'react';

type InitialType = (() => boolean) | boolean;

export default function useModal(initialState: InitialType = false) {
  const [open, setOpen] = useState(initialState);

  const handleClose = useCallback(() => {
    setOpen(false);
    document.body.style.overflow = 'unset';
  }, []);

  const handleOpen = useCallback(() => {
    setOpen(true);
    document.body.style.overflow = 'hidden';
  }, []);

  return { open, handleClose, handleOpen };
}
