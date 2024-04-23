// components
import { ModeToggle } from "src/shared/config/theme/mode-toggle";
import { LocaleSwitcher } from "src/shared/ui/LocaleSwitcher/LocaleSwitcher";
import { Link } from "../shared/config/i18n/navigation";

const navItems = {
  "/": {
    name: "home",
  },
  "/work": {
    name: "work",
  },
  "/blog": {
    name: "blog",
  },
};

export function Navbar() {
  return (
    <aside className="-ml-[8px] mb-16 tracking-tight">
      <div className="lg:sticky lg:top-20 flex gap-6 justify-between items-center">
        <nav
          className="flex flex-row items-start relative px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative"
          id="nav"
        >
          <ul className="flex flex-row space-x-0 pr-10">
            {Object.entries(navItems).map(([path, { name }]) => {
              return (
                <li key={path}>
                  <Link
                    href={path}
                    className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative py-1 px-2"
                  >
                    {name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
        <div className="flex gap-6">
          <ModeToggle />
          <LocaleSwitcher />
        </div>
      </div>
    </aside>
  );
}
