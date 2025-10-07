import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center safe-area text-center px-4">
      <div className="logo-fixed mb-8">
        <Image
          src="/betalogo.png"
          alt="Logo"
          width={720}
          height={240}
          priority
          sizes="(max-width: 768px) 90vw, 720px"
          style={{ width: "min(90vw, 720px)", height: "auto" }}
        />
      </div>
      
      {/* NBA Scoreboard Button */}
      <div className="mb-12">
        <Link 
          href="/nba-scoreboard.html"
          className="group relative inline-flex items-center px-10 py-5 bg-gradient-to-br from-black via-blue-900 to-blue-600 text-white font-black text-2xl rounded-2xl shadow-2xl transform transition-all duration-500 hover:scale-110 hover:rotate-1 hover:shadow-blue-500/50 overflow-hidden border-2 border-blue-400/30 hover:border-blue-400"
          target="_blank"
        >
          {/* Animated background gradient */}
          <span className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse"></span>
          
          {/* Glowing effect */}
          <span className="absolute inset-0 rounded-2xl blur-xl bg-blue-500 opacity-0 group-hover:opacity-75 transition-opacity duration-500 -z-10"></span>
          
          {/* Content */}
          <span className="relative flex items-center gap-3">
            <span className="text-3xl animate-bounce">🏀</span>
            <span className="tracking-wider drop-shadow-[0_0_10px_rgba(59,130,246,0.5)]">NBA SCOREBOARD</span>
          </span>
        </Link>
      </div>
      
      <p className="text-3xl sm:text-6xl font-extrabold tracking-tight leading-tight break-words uppercase mt-8">
        DONT FUCKING TALK TO ME UNTIL OCTOBER 21ST.
      </p>
    </div>
  );
}
