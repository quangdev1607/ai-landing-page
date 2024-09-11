import MenuIcon from "@/assets/icon-menu.svg";
import LogoIcon from "@/assets/logo.svg";
import { Button } from "@/components/Button";

export const Header = () => {
  return (
    <header className="sticky top-0 z-10 border-b border-white/20 py-4 backdrop-blur-sm md:border-none">
      <div className="container">
        <div className="mx-auto flex max-w-2xl items-center justify-between rounded-xl md:border md:border-white/15 md:p-2.5">
          <div className="">
            <div className="inline-flex size-10 items-center justify-center rounded-lg border border-white/20">
              <LogoIcon className="size-8" />
            </div>
          </div>
          <nav className="hidden md:block">
            <ul className="flex items-center gap-8">
              <li>
                <span className="cursor-pointer text-sm font-normal text-white/70 transition hover:text-white">
                  Features
                </span>
              </li>
              <li>
                <span className="cursor-pointer text-sm font-normal text-white/70 transition hover:text-white">
                  Developers
                </span>
              </li>
              <li>
                <span className="cursor-pointer text-sm font-normal text-white/70 transition hover:text-white">
                  Pricing
                </span>
              </li>
              <li>
                <span className="cursor-pointer text-sm font-normal text-white/70 transition hover:text-white">
                  Changelog
                </span>
              </li>
            </ul>
          </nav>
          <div className="flex items-center gap-4">
            <Button label="Join waitlist" />
            <MenuIcon className="size-8 md:hidden" />
          </div>
        </div>
      </div>
    </header>
  );
};
