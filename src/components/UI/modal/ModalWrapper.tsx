import { Cross } from '@/assets/icons';

type ModalWrapperProps = {
  children: React.ReactNode;
  closeModal: () => void;
  styles?: string;
  type: 'baseModal' | 'notification';
  isShowBtnClose?: boolean;
};

const ModalWrapper = ({
  children,
  closeModal,
  styles,
  type,
  isShowBtnClose = true,
}: ModalWrapperProps) => {
  const modalStyles = `bg-bgColor/20 inset-shadow bg-[rgba(45,45,45,0.04)]`;

  const ModalStyles = {
    baseModal: 'h-[75%] w-[75%] p-10',
    notification: `h-[322px] w-[510px] bg-bgColor p-[50px]`,
  };
  return (
    <div
      className={`relative mx-auto flex flex-col overflow-hidden rounded-base backdrop-blur-[15px] ${ModalStyles[type]} ${styles}`}
    >
      {isShowBtnClose && (
        <button
          className="group absolute top-0 right-0 flex h-10 w-10 items-center justify-center rounded-full bg-primary/80 hover:bg-accent/80"
          onClick={closeModal}
        >
          <Cross className="fill-accent group-hover:fill-primary" />
        </button>
      )}

      <div className="my-auto overflow-auto rounded-base">{children}</div>
    </div>
  );
};

export default ModalWrapper;
