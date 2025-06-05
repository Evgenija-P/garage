type OverlayProps = {
  children: React.ReactNode;
  closeModal: () => void;
};

const Overlay = ({ children, closeModal }: OverlayProps) => {
  function handleOverlayClick(e: React.MouseEvent<HTMLDivElement>) {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  }
  return (
    <div
      className="bg-white/0.01 fixed top-0 left-0 z-[79] flex h-screen w-full items-center justify-center backdrop-blur-[15px]"
      onClick={handleOverlayClick}
    >
      {children}
    </div>
  );
};

export default Overlay;
