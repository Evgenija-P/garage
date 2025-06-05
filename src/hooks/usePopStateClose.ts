import { useEffect } from 'react';

export default function usePopStateClose(isOpen: boolean, onClose: () => void) {
  useEffect(() => {
    function handlePopState() {
      if (isOpen) {
        onClose();
      }
    }
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, [isOpen, onClose]);
}
