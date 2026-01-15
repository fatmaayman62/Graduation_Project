import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from "@heroui/react";
import { FiMoreVertical } from "react-icons/fi";

export default function DropDownList() {
  return (
    <Dropdown className="min-w-full rounded-[8px]">
      <DropdownTrigger>
        <FiMoreVertical className="text-[#717182] cursor-pointer outline-0" />
      </DropdownTrigger>

      {/* Set a smaller width using Tailwind classes like w-24 or w-32 */}
      <DropdownMenu 
        aria-label="Example with disabled actions" 
        className="dark:bg-[#1D293D] w-30" // small width
      >
        <DropdownItem key="edit" className="dark:text-gray-300">Edit</DropdownItem>
        <DropdownItem key="view" className="dark:text-gray-300">View Details</DropdownItem>
        <DropdownItem key="delete" className="text-red-500">Delete</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}
