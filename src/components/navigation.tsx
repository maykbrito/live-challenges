import { File } from "./file";
import { Folder } from "./folder";

export function Navigation() {
  return (
    <nav className="flex flex-col gap-1">
      <Folder title="Challenges" defaultOpen>
        <File href="/">index.astro</File>
      </Folder>

      <Folder title="Articles">
        <File href="/second">Second</File>
      </Folder>
    </nav>
  );
}
