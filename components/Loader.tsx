import { ReloadIcon } from "@radix-ui/react-icons";

const Loader = () => {
  return (
    <div className="flex items-center justify-center h-screen w-screen bg-black">
      <ReloadIcon className="animate-spin w-5 h-5" />
    </div>
  );
};

export default Loader;
