'use client';

import useEscapeClose from '@/hooks/useEscapeClose';
import usePopStateClose from '@/hooks/usePopStateClose';
import useScrollBlock from '@/hooks/useScrollBlock';
import { useCallback, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import ModalWrapper from './ModalWrapper';
import Overlay from './Overlay';

type BaseModalProps = {
  children: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
  type: 'baseModal' | 'notification';
  isShowBtnClose?: boolean;
  modalWrapperStyles?: string;
};

const BaseModal = ({
  children,
  isOpen,
  onClose,
  type,
  isShowBtnClose,
  modalWrapperStyles,
}: BaseModalProps) => {
  const [blockScroll, allowScroll] = useScrollBlock();
  const [mounted, setMounted] = useState(false);
  const [modalRoot, setModalRoot] = useState<HTMLElement | null>(null);

  const closeModal = useCallback(() => {
    allowScroll();
    onClose?.();
  }, [allowScroll, onClose]);

  useEscapeClose(closeModal);
  usePopStateClose(isOpen, closeModal);

  useEffect(() => {
    setMounted(true);
    setModalRoot(document.getElementById('modal-root'));

    if (isOpen) {
      blockScroll();
      history.pushState({ modal: true }, '');
    } else {
      allowScroll();
    }
  }, [isOpen, blockScroll, allowScroll, onClose]);

  if (!mounted || !isOpen || !modalRoot) return null;

  return createPortal(
    isOpen ? (
      <Overlay closeModal={closeModal}>
        <ModalWrapper
          closeModal={closeModal}
          type={type}
          isShowBtnClose={isShowBtnClose}
          styles={modalWrapperStyles}
        >
          {children}
        </ModalWrapper>
      </Overlay>
    ) : null,
    modalRoot
  );
};

export default BaseModal;
