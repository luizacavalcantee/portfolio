function WhiteGlow() {
  return (
    <div
      className="absolute blur-[5px] h-[30px] left-[-11px] rounded-[999px] top-[24.94px] w-[58px]"
      data-name="White Glow"
      style={{
        backgroundImage:
          "url('data:image/svg+xml;utf8,<svg viewBox=\'0 0 58 30\' xmlns=\'http://www.w3.org/2000/svg\' preserveAspectRatio=\'none\'><rect x=\'0\' y=\'0\' height=\'100%\' width=\'100%\' fill=\'url(%23grad)\' opacity=\'1\'/><defs><radialGradient id=\'grad\' gradientUnits=\'userSpaceOnUse\' cx=\'0\' cy=\'0\' r=\'10\' gradientTransform=\'matrix(2.9 0 0 1.5 29 15)\'><stop stop-color=\'rgba(171,171,171,1)\' offset=\'0\'/><stop stop-color=\'rgba(171,171,171,0)\' offset=\'1\'/></radialGradient></defs></svg>')",
      }}
    />
  );
}

function WhiteGlow1() {
  return (
    <div
      className="absolute blur-[5px] h-[41px] opacity-[0.62] right-[-11.99px] rounded-[21px] top-[-7px] w-[74px]"
      data-name="White Glow"
      style={{
        backgroundImage:
          "url('data:image/svg+xml;utf8,<svg viewBox=\'0 0 74 41\' xmlns=\'http://www.w3.org/2000/svg\' preserveAspectRatio=\'none\'><rect x=\'0\' y=\'0\' height=\'100%\' width=\'100%\' fill=\'url(%23grad)\' opacity=\'1\'/><defs><radialGradient id=\'grad\' gradientUnits=\'userSpaceOnUse\' cx=\'0\' cy=\'0\' r=\'10\' gradientTransform=\'matrix(3.7 0 0 2.05 37 20.5)\'><stop stop-color=\'rgba(255,255,255,1)\' offset=\'0\'/><stop stop-color=\'rgba(255,255,255,0)\' offset=\'1\'/></radialGradient></defs></svg>')",
      }}
    />
  );
}

function WhiteTop() {
  return (
    <div
      className="absolute bg-white blur-[4px] h-[36px] right-[-16.99px] top-[-19px] w-[95px]"
      data-name="White Top"
    />
  );
}

function White() {
  return (
    <div
      className="absolute bg-[#e6e6e6] blur-[4px] bottom-[-18px] h-[46px] left-[-22px] w-[54px]"
      data-name="white"
    />
  );
}

function White1() {
  return (
    <div
      className="absolute bg-white blur-[4px] bottom-[-17px] h-[34px] left-[-22px] w-[40px]"
      data-name="white"
    />
  );
}

function WhiteGlow2() {
  return (
    <div
      className="absolute blur-[5px] h-[41px] left-[-22.72px] opacity-[0.41] rounded-[999px] top-[32.44px] w-[77px]"
      data-name="White Glow"
      style={{
        backgroundImage:
          "url('data:image/svg+xml;utf8,<svg viewBox=\'0 0 77 41\' xmlns=\'http://www.w3.org/2000/svg\' preserveAspectRatio=\'none\'><rect x=\'0\' y=\'0\' height=\'100%\' width=\'100%\' fill=\'url(%23grad)\' opacity=\'1\'/><defs><radialGradient id=\'grad\' gradientUnits=\'userSpaceOnUse\' cx=\'0\' cy=\'0\' r=\'10\' gradientTransform=\'matrix(3.85 0 0 2.05 38.5 20.5)\'><stop stop-color=\'rgba(163,163,163,1)\' offset=\'0\'/><stop stop-color=\'rgba(163,163,163,0)\' offset=\'1\'/></radialGradient></defs></svg>')",
      }}
    />
  );
}

function WhiteGlow3() {
  return (
    <div
      className="absolute blur-[5px] h-[40px] left-[87.95px] rounded-[999px] top-[-20px] w-[92px]"
      data-name="White Glow"
      style={{
        backgroundImage:
          "url('data:image/svg+xml;utf8,<svg viewBox=\'0 0 92 40\' xmlns=\'http://www.w3.org/2000/svg\' preserveAspectRatio=\'none\'><rect x=\'0\' y=\'0\' height=\'100%\' width=\'100%\' fill=\'url(%23grad)\' opacity=\'1\'/><defs><radialGradient id=\'grad\' gradientUnits=\'userSpaceOnUse\' cx=\'0\' cy=\'0\' r=\'10\' gradientTransform=\'matrix(4.6 0 0 2 46 20)\'><stop stop-color=\'rgba(115,115,115,1)\' offset=\'0\'/><stop stop-color=\'rgba(115,115,115,0)\' offset=\'1\'/></radialGradient></defs></svg>')",
      }}
    />
  );
}

function PFramerText({ label }: { label: string }) {
  return (
    <div
      className="content-stretch flex flex-col items-start pb-[0.8px] relative shrink-0 w-full"
      data-name="p.framer-text"
    >
      <div className="flex flex-col font-normal justify-center leading-[0] not-italic relative shrink-0 text-[16.5px] text-left text-white whitespace-nowrap">
        <p className="leading-[28.8px]">{label}</p>
      </div>
    </div>
  );
}

function DivFramerXbxnw({ label }: { label: string }) {
  return (
    <div
      className="content-stretch flex flex-col items-start relative shrink-0"
      data-name="div.framer-xbxnw4"
    >
      <PFramerText label={label} />
    </div>
  );
}

function Text({ label }: { label: string }) {
  return (
    <div
      className="content-stretch flex items-center justify-center relative shrink-0 w-full"
      data-name="text"
    >
      <DivFramerXbxnw label={label} />
    </div>
  );
}

function InnerContainer({ label }: { label: string }) {
  return (
    <div
      className="bg-black relative rounded-[10px] shrink-0 w-full"
      data-name="Inner Container"
    >
      <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center justify-center pb-[8px] pt-[7px] px-[24px] relative w-full">
          <WhiteGlow2 />
          <WhiteGlow3 />
          <Text label={label} />
        </div>
      </div>
    </div>
  );
}

function Container({ label }: { label: string }) {
  return (
    <div
      className="bg-[#3b3b3b] relative rounded-[11.5px] shrink-0 w-full"
      data-name="container"
    >
      <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center justify-center p-[1.4px] relative w-full">
          <WhiteTop />
          <White />
          <White1 />
          <InnerContainer label={label} />
        </div>
      </div>
    </div>
  );
}

type MainButtonProps = {
  label?: string;
  href?: string;
};

export default function MainButton({
  label = "Get Started Now",
  href = "https://framer.link/Z1h7gsj",
}: MainButtonProps) {
  const isExternal = href.startsWith("http://") || href.startsWith("https://");

  return (
    <a
      className="content-stretch cursor-pointer flex flex-col items-start justify-center relative min-w-[182px]"
      data-name="Main Button"
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noreferrer" : undefined}
    >
      <WhiteGlow />
      <WhiteGlow1 />
      <Container label={label} />
    </a>
  );
}
