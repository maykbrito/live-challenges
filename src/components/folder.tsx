import { useState } from "react";
import * as Collapsible from '@radix-ui/react-collapsible';
import { ChevronDownIcon, ChevronRightIcon, ChevronUpIcon } from "@radix-ui/react-icons";

interface FolderProps extends React.ComponentProps<'div'> {
  defaultOpen?: boolean
}

export function Folder({title, children, defaultOpen = false}: FolderProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen)

  return (
    <Collapsible.Root open={isOpen} onOpenChange={setIsOpen}>
    
      <Collapsible.Trigger className="flex items-center gap-2 px-2 py-1 w-full border rounded-sm   border-transparent text-slate-200 text-sm hover:bg-gray-800 hover:text-[#E0DEF2] focus:bg-gray-800 focus:border-[#363247] focus:text-[#e0def2] outline-none">
        {isOpen ? <ChevronDownIcon className="mr-1 h-4 w-4" /> : <ChevronRightIcon className="mr-1 h-4 w-4" /> }

        <span>{title}</span>
      </Collapsible.Trigger>
    
      <Collapsible.Content>
        {children}
      </Collapsible.Content>
    </Collapsible.Root>
  )
}