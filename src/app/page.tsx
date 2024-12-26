import Link from "next/link";
import { VerifiedUser } from "@mui/icons-material";
import WhoWeAre from "./components/whoWeAre/page";

function HomePage() {
  return (
    <>
      <div
        className="h-screen bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: "url('/assets/images/logo/home-bg.jpg')",
        }}
      >
        <div className="w-full h-full flex flex-col md:flex-row">
          {/* Left section */}
          <div className="flex-1 text-white p-6 flex flex-col items-start justify-center md:pl-24">
            <p className="uppercase font-bold" style={{ letterSpacing: "0.5em" }}>
              Turning ideas into digital reality.
            </p>
            <h1 className="font-bold text-4xl md:text-6xl mt-4 mb-4">
              We convert concepts into technology
            </h1>
            <p className="font-bold mt-4">
              From visionary ideas to fully realized software solutions, Dexterz
              Sol transforms your concepts into cutting-edge technology that
              drives growth and innovations.
            </p>
            <Link href="/contact" className="px-4 py-2 mt-10 bg-blue-500 bg-opacity-50 rounded-lg shadow-2xl hover:bg-slate-200 hover:bg-opacity-50 transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
              Schedule strategy call
            </Link>
          </div>

          {/* Right section */}
          <div className="flex-1 text-center text-white p-6 flex items-center justify-center">
            {/* Content for the right section */}
            <div className="flex flex-row p-10 bg-blue-500 rounded-lg bg-opacity-50">
              <VerifiedUser sx={{ fontSize: "5rem" }} />
              <p className="flex font-bold flex-col">
                <span className="text-4xl">5 +</span>
                <span>Years Working Experience</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <WhoWeAre />
    </>
  );
}

export default HomePage;
