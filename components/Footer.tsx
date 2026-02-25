import Image from "next/image";

const links = [
  { href: "/technology", label: "Technology" },
  { href: "/about", label: "About Us" },
  { href: "/news", label: "News" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="bg-dark text-white/60 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pb-10 border-b border-white/10">
          {/* Brand */}
          <div>
            <Image
              src="/images/CRecTech_logo.png"
              alt="CRecTech"
              width={110}
              height={36}
              className="h-8 w-auto mb-3 brightness-0 invert"
            />
            <p className="text-sm leading-relaxed">
              Carbon Recycle Technologies. Turning waste biogas into renewable
              bio-methanol for a sustainable future.
            </p>
          </div>

          {/* Nav */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Pages</h4>
            <ul className="space-y-2">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-sm hover:text-primary transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Contact</h4>
            <p className="text-sm">
              <a
                href="mailto:contact@crectech.net"
                className="hover:text-primary transition-colors"
              >
                contact@crectech.net
              </a>
            </p>
            <a
              href="mailto:khlim@crectech.net?subject=Meeting%20Request%20-%20CRecTech"
              className="mt-4 inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary text-white text-sm font-semibold hover:bg-primary/90 transition-colors"
            >
              Book a Meeting →
            </a>
          </div>
        </div>

        <div className="pt-6 flex flex-col md:flex-row justify-between gap-2 text-xs">
          <p>© {new Date().getFullYear()} CRecTech Pte. Ltd. All rights reserved.</p>
          <p>Carbon Recycle Technologies</p>
        </div>
      </div>
    </footer>
  );
}
