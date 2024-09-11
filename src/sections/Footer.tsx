import Logo from "@/assets/logo.svg";
import Instagram from "@/assets/social-instagram.svg";
import X from "@/assets/social-x.svg";
import Youtube from "@/assets/social-youtube.svg";

export const Footer = () => {
  return (
    <footer className="border border-white/15 py-5">
      <div className="container">
        <div className="flex flex-col gap-8 lg:flex-row lg:justify-between">
          <div className="flex items-center gap-2">
            <Logo className="size-6" />
            <span className="text-sm font-medium">AI Startup Landing Page</span>
          </div>

          <ul className="flex flex-col gap-5 lg:flex-row">
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
          <div className="flex gap-5 opacity-40">
            <X className="cursor-pointer" />
            <Instagram className="cursor-pointer" />
            <Youtube className="cursor-pointer" />
          </div>
        </div>
      </div>
    </footer>
  );
};
