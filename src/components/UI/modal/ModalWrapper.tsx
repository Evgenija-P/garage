import { Cross } from '@/assets/icons';

type ModalWrapperProps = {
  children: React.ReactNode;
  closeModal: () => void;
  styles?: string;
  type: 'baseModal' | 'notification';
};

const ModalWrapper = ({ children, closeModal, styles, type }: ModalWrapperProps) => {
  return (
    <div
      className={`modal-wrapper-border relative mx-auto flex flex-col overflow-hidden rounded-base bg-bgColor px-20 py-12 ${styles}`}
    >
      <button
        className="group absolute top-0 right-0 flex h-10 w-10 items-center justify-center rounded-full"
        onClick={closeModal}
      >
        <Cross className="fill-primary group-hover:fill-accent" />
      </button>
      <div className="my-auto overflow-auto">{children}</div>
    </div>
  );
};

export default ModalWrapper;
