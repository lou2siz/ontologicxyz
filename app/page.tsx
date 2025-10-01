import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen grid place-items-center safe-area text-center">
      <div className="logo-fixed">
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
      <div className="h-48 sm:h-56" />
      <p className="text-3xl sm:text-6xl font-extrabold tracking-tight leading-tight break-words uppercase">
        DONT FUCKING TALK TO ME UNTIL OCTOBER 21ST.
      </p>
    </div>
  );
}
