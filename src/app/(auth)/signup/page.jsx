import LeftSide from "@/components/LeftSide";
import RightSide from "@/components/signupPageComponents/RightSide";

const SignUpPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 overflow-hidden relative">
      
      {/* Background Blur Effects */}
      <div className="absolute top-[-120px] left-[-120px] w-[300px] h-[300px] bg-teal-500/30 blur-3xl rounded-full" />
      <div className="absolute bottom-[-120px] right-[-120px] w-[300px] h-[300px] bg-cyan-500/20 blur-3xl rounded-full" />

      {/* Main Container */}
      <div className="relative z-10 w-full max-w-7xl grid lg:grid-cols-2 rounded-[32px] overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl">

        <LeftSide />

        <div className=" backdrop-blur-xl min-h-[600px]">
          <RightSide />
        </div>

      </div>
    </div>
  );
};

export default SignUpPage;