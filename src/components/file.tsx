import { cn } from "@/lib/utils";
import { FileIcon } from "@radix-ui/react-icons";

interface FileProps extends React.ComponentProps<'div'> {
  href: string
}

export function File(props: FileProps) {

  const isCurrentActive = props.href === window.location.pathname

  return (
    <div className="ml-4 mt-1">
      <a href={props.href}>
        <div className={cn("flex items-center gap-2 px-2 py-1 w-full border rounded-sm   border-transparent text-slate-200 text-xs hover:bg-gray-800 hover:text-[#E0DEF2] focus:bg-gray-800 focus:border-[#363247] focus:text-[#e0def2] outline-none", { 'bg-gray-800 text-white': isCurrentActive })}>
          <FileIcon className="mr-1 h-4 w-4" />
          <span>{props.children}</span>
        </div>
      </a>
    </div>
  )

}