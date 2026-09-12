import footLogo from "../assets/logo-text.png";
const Footer = () => {
  return (
    <div className="mt-20 border-t border-gray-200">
      <div className="container mx-auto flex gap-65 pt-20 pb-20 border-b border-gray-200">
        <div>
          <img src={footLogo} alt="" />

          <p className="mt-4 max-w-xs text-sm font-light text-[#64748B]">
            Curated tools, technologies, and resources for developers building
            modern software.
          </p>

          <ul className="mt-4 flex gap-4 text-[14px] font-semibold text-[#475569]">
            <li className="cursor-pointer hover:text-gray-900">GitHub</li>
            <li className="cursor-pointer hover:text-gray-900">Twitter</li>
            <li className="cursor-pointer hover:text-gray-900">LinkedIn</li>
          </ul>
        </div>

        <div>
          <p className="text-xs font-bold tracking-wider text-gray-900 uppercase">
            Product
          </p>
          <ul className="mt-3 space-y-2 text-sm text-[#64748B]">
            <li className="cursor-pointer hover:text-gray-900">Home</li>
            <li className="cursor-pointer hover:text-gray-900">Technologies</li>
            <li className="cursor-pointer hover:text-gray-900">Projects</li>
          </ul>
        </div>

        <div>
          <p className="text-xs font-bold tracking-wider text-gray-900 uppercase">
            Company
          </p>
          <ul className="mt-3 space-y-2 text-sm text-[#64748B]">
            <li className="cursor-pointer hover:text-gray-900">About</li>
            <li className="cursor-pointer hover:text-gray-900">Contact</li>
            <li className="cursor-pointer hover:text-gray-900">Careers</li>
          </ul>
        </div>

        <div>
          <p className="text-xs font-bold tracking-wider text-gray-900 uppercase">
            Legal
          </p>
          <ul className="mt-3 space-y-2 text-sm text-[#64748B]">
            <li className="cursor-pointer hover:text-gray-900">
              Privacy Policy
            </li>
            <li className="cursor-pointer hover:text-gray-900">
              Terms of Service
            </li>
          </ul>
        </div>
      </div>

      <div className="container mx-auto py-6">
        <div className="flex items-center justify-between">
          <p className="text-sm text-[#64748B]">
            © 2026 Dev Stack. All rights reserved.
          </p>

          <ul className="flex gap-6 text-sm text-[#64748B]">
            <li className="cursor-pointer hover:text-gray-900">Privacy</li>
            <li className="cursor-pointer hover:text-gray-900">Terms</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
