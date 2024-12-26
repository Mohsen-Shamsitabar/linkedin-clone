import { Input } from "@/components/ui";
import { SearchIcon } from "lucide-react";

const Searchbar = () => {
  return (
    <div className="bg-slate-100 rounded-sm">
      <div className="flex flex-row items-center px-2">
        <SearchIcon />

        <Input className="bg-slate-100 border-none" placeholder="Search" />
      </div>
    </div>
  );
};

export default Searchbar;
