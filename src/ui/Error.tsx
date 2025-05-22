import { ImCross } from "react-icons/im";

interface ErrorProps {
  error: string | null;
  setFlag: (val: boolean) => void;
}

function Error({ error, setFlag }: ErrorProps) {
  return (
    <div className="absolute left-[50%] translate-x-[-50%] top-16 text-red-500 bg-black p-4 rounded-xl text-center z-50 md:p-8 border-2 border-green-500">
      <span className='absolute left-4 bottom-2 font-bold scale-200 animate-pulse'>!</span>
      {error}
      <span className='absolute right-4 bottom-2 font-bold scale-200 animate-pulse'>!</span>
      <span
        className='absolute right-3 top-2 text-white hover:cursor-pointer hover:text-green-500 transition-colors'
        onClick={() => setFlag(false)}
      >
        <ImCross />
      </span>
    </div>
  );
}

export default Error;
