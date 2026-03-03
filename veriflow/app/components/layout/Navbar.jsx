import Image from "next/image";
import logo from "../../../public/logo.png";
import { LogOut } from "lucide-react";
import AuthStatus from "../shared/AuthStatus";
import Button from "../ui/Button";
import Link from "next/link";
import { logout } from "../../libs/services/auth/action";

export default function Navbar({ title }) {
  return (
    <nav className="flex justify-between items-center py-4  bg-transparent border-b border-slate-700">
      {/* Logo & Title Section */}

      <div className="flex items-center font-semibold text-sm md:text-2xl lg:text-3xl text-white">
        <Image src={logo} height={40} width={40} alt="VeriFlow" priority />
        {title || "VeriFlow"}
      </div>

      <div className="flex gap-4 items-center justify-between">
        <AuthStatus
          signedIn={
            <div className="flex items-center gap-4">
              <Link
                href="/dashboard"
                className="text-sm lg:text-2xl font-medium hover:text-blue-400 transition-colors"
              >
               Dashboard
              </Link>

              <Button
                onClick={logout}
                className="bg-[#6c47ff] text-white rounded-full font-medium  sm:text-base px-4 sm:px-5  hover:bg-[#5a3ae6] transition-all cursor-pointer"
              >
                <LogOut className="w-4 h-4" />
              </Button>
            </div>
          }
          signedOut={
            <Link href="/login">
              <Button className="bg-[#6c47ff] text-white rounded-full font-medium text-sm sm:text-base h-10 px-4 sm:px-5 cursor-pointer">
                Sign In
              </Button>
            </Link>
          }
        />
      </div>
    </nav>
  );
}
