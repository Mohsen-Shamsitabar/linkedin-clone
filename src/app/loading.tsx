import { LineLoader } from "@/components/loaders";

const GlobalLoading = () => {
  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center">
      <LineLoader />
    </div>
  );
};

export default GlobalLoading;
