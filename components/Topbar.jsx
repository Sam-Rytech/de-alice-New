import { RiPhoneFill, RiMailFill } from "react-icons/ri";
import Socials from "./Socials";

const Topbar = () => {
  return (
    <section
      id="home"
      className="px-4 bg-gradient-to-t from-[#ea0f0a] to-[#ff5a4d] xl:h-16 flex items-center py-4 xl:py-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-6 justify-between items-center">
          <div className="hidden xl:flex items-center gap-8">
            {/* phone */}
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-black text-white flex items-center justify-center">
                <RiPhoneFill />
              </div>
              <p className="font-medium text-white">+234 814 794 1672</p>
            </div>

            {/* email */}
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-black text-white flex items-center justify-center">
                <RiMailFill />
              </div>
              <p className="font-medium text-white">dealice@company.com</p>
            </div>
          </div>

          <Socials />
        </div>
      </div>
    </section>
  );
};

export default Topbar;
