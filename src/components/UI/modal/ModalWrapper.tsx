import { Cross } from '@/assets/icons';

type ModalWrapperProps = {
  children: React.ReactNode;
  closeModal: () => void;
  styles?: string;
  type: 'baseModal' | 'notification';
};

const ModalWrapper = ({ children, closeModal, styles, type }: ModalWrapperProps) => {
  const modalStyles = 'bg-bgColor/20 ${styles} inset-shadow bg-[rgba(45,45,45,0.04)] ';
  return (
    <div
      className={`relative mx-auto flex h-[75%] w-[75%] flex-col overflow-hidden rounded-base p-5 backdrop-blur-[15px]`}
    >
      <button
        className="group absolute top-0 right-0 flex h-10 w-10 items-center justify-center rounded-full bg-primary/80 hover:bg-accent/80"
        onClick={closeModal}
      >
        <Cross className="fill-accent group-hover:fill-primary" />
      </button>
      <div className="my-auto overflow-auto rounded-base">{children}</div>
    </div>
  );
};

export default ModalWrapper;
