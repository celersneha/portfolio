import React from "react";
import { Input } from "@/components/ui/input";
import { FiSearch } from "react-icons/fi";

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

const SearchBar: React.FC<SearchBarProps> = ({
  value,
  onChange,
  placeholder,
}) => (
  <div className="relative w-full max-w-md mx-auto mb-10">
    <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground w-5 h-5" />
    <Input
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder || "Search projects..."}
      className="pl-10"
    />
  </div>
);

export default SearchBar;
