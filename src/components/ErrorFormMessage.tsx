const ErrorFormMessage = ({ information }: { information: string | undefined }) => {
  return <p className="absolute -bottom-[20px] left-2 mt-1 text-sm text-red-500">{information}</p>;
};

export default ErrorFormMessage;
