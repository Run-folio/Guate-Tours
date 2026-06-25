import svgPaths from "./svg-iinxsx3gog";
import imgHero from "./b77e1988d70ea4d08badfb7a06bbd50a7f4e5ea2.png";
import imgTourImage from "./99a952a4beb8ea5048354f81cddea84bd25ccbd3.png";
import imgTourImage1 from "./e130a794774da661e9c0738e4694d693874660f2.png";
import imgTourImage2 from "./edeec8f6ef2c19457f5dc6df849b279bf42b7659.png";
import imgTourImage3 from "./00c77899e6ebf409401b067ab7b4f245138629c6.png";
import imgTourImage4 from "./ade151d521da9a32a3663f9f7814543744229da8.png";
import imgTourImage5 from "./3f5554c2420320c35c056d8f5dca2f0abba524db.png";
import imgTourImage6 from "./d3f00030f299010fdef25c90e9e9892e76058df8.png";
import imgTourImage7 from "./62f386234353f257c6b4ed58e55f7fad9f138e0d.png";
import imgRectangle from "./5622f99b896357143dfaea99459e1eb39114d125.png";
import imgRectangle1 from "./bf35b9056e0ca3b3ef1e7765ca0e86a510f1a3a8.png";
import imgRectangle2 from "./ff10c0ac98e754d82d33ea7e460f3945c135065c.png";
import imgRectangle3 from "./ed8f3898de3bf425dbba7a5f994a0f5eed73c81a.png";
import imgRectangle4 from "./2f1834e16feb1a347ae6b2b34b8358abe8f9173c.png";
import imgRectangle5 from "./448dfe9aff65b58ed6dfc01dc2a105487f3b83d6.png";

function Leaf() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="leaf">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="leaf">
          <path d={svgPaths.p261ac300} id="Vector" stroke="var(--stroke-0, #FF7F6D)" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Brand() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="brand">
      <Leaf />
      <p className="[word-break:break-word] font-['Young_Serif:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[28px] text-white whitespace-nowrap">Ruta Verde</p>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex items-start px-[24px] py-[12px] relative rounded-[4px] shrink-0" data-name="Frame">
      <div aria-hidden className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[4px]" />
      <p className="[word-break:break-word] font-['Schibsted_Grotesk:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[14px] text-white uppercase whitespace-nowrap">Book Tour</p>
    </div>
  );
}

function NavLinks() {
  return (
    <div className="content-stretch flex gap-[48px] items-center relative shrink-0" data-name="nav-links">
      <p className="[word-break:break-word] font-['Schibsted_Grotesk:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[16px] text-white whitespace-nowrap">Tours</p>
      <p className="[word-break:break-word] font-['Schibsted_Grotesk:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[16px] text-white whitespace-nowrap">About</p>
      <p className="[word-break:break-word] font-['Schibsted_Grotesk:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[16px] text-white whitespace-nowrap">Gallery</p>
      <p className="[word-break:break-word] font-['Schibsted_Grotesk:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[16px] text-white whitespace-nowrap">Contact</p>
      <Frame />
    </div>
  );
}

function Navbar() {
  return (
    <div className="content-stretch flex items-center justify-between px-[80px] py-[32px] relative shrink-0 w-[1440px]" data-name="navbar">
      <Brand />
      <NavLinks />
    </div>
  );
}

function Frame2() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[24px] items-center relative shrink-0 text-center text-white" data-name="Frame">
      <p className="font-['Young_Serif:Regular',sans-serif] leading-[0.95] not-italic relative shrink-0 text-[96px] w-[1000px]">{`Explore Guatemala's Wild Heart`}</p>
      <p className="font-['Schibsted_Grotesk:Regular',sans-serif] font-normal leading-[1.4] relative shrink-0 text-[24px] w-[720px]">Private guided tours to the most breathtaking natural places in Central America. Discover hidden jungles and active peaks.</p>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#ff7f6d] content-stretch flex items-center justify-center px-[32px] py-[16px] relative rounded-[4px] shrink-0" data-name="button">
      <p className="[word-break:break-word] font-['Schibsted_Grotesk:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[16px] text-white uppercase whitespace-nowrap">Book Your Adventure</p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Frame">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col gap-[40px] items-center pt-[160px] px-[80px] relative size-full">
          <Frame2 />
          <Button />
        </div>
      </div>
    </div>
  );
}

function Hero() {
  return (
    <div className="content-stretch flex flex-col h-[900px] items-center relative shrink-0 w-[1440px]" data-name="hero">
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <img alt="" className="absolute max-w-none object-cover size-full" src={imgHero} />
        <div className="absolute bg-[rgba(27,43,27,0.3)] inset-0" />
      </div>
      <Navbar />
      <Frame1 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-start leading-[normal] relative shrink-0 text-white whitespace-nowrap" data-name="Frame">
      <p className="font-['Young_Serif:Regular',sans-serif] not-italic relative shrink-0 text-[40px]">12+ Years</p>
      <p className="font-['Schibsted_Grotesk:SemiBold',sans-serif] font-semibold relative shrink-0 text-[16px] uppercase">Experience</p>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[400px]" data-name="Frame">
      <Frame4 />
      <div className="flex h-[60px] items-center justify-center relative shrink-0 w-0">
        <div className="flex-none rotate-90">
          <div className="h-0 relative w-[60px]" data-name="Line">
            <div className="absolute inset-[-2px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 60 2">
                <line id="Line" stroke="var(--stroke-0, #FF7F6D)" strokeWidth="2" x2="60" y1="1" y2="1" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame6() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-start leading-[normal] relative shrink-0 text-white whitespace-nowrap" data-name="Frame">
      <p className="font-['Young_Serif:Regular',sans-serif] not-italic relative shrink-0 text-[40px]">8 Natural</p>
      <p className="font-['Schibsted_Grotesk:SemiBold',sans-serif] font-semibold relative shrink-0 text-[16px] uppercase">Destinations</p>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[400px]" data-name="Frame">
      <Frame6 />
      <div className="flex h-[60px] items-center justify-center relative shrink-0 w-0">
        <div className="flex-none rotate-90">
          <div className="h-0 relative w-[60px]" data-name="Line">
            <div className="absolute inset-[-2px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 60 2">
                <line id="Line" stroke="var(--stroke-0, #FF7F6D)" strokeWidth="2" x2="60" y1="1" y2="1" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame8() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-start leading-[normal] relative shrink-0 text-white whitespace-nowrap" data-name="Frame">
      <p className="font-['Young_Serif:Regular','Noto_Sans:Regular','Noto_Sans_Math:Regular','Noto_Sans_Symbols:Regular','Noto_Sans_Symbols2:Regular',sans-serif] relative shrink-0 text-[40px]" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100, "wght" 400' }}>
        5★ Rating
      </p>
      <p className="font-['Schibsted_Grotesk:SemiBold',sans-serif] font-semibold relative shrink-0 text-[16px] uppercase">Guided Experience</p>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Frame">
      <Frame8 />
    </div>
  );
}

function IntroStrip() {
  return (
    <div className="bg-[#2d8a8a] content-stretch flex items-center justify-between px-[80px] py-[64px] relative shrink-0 w-[1440px]" data-name="intro-strip">
      <Frame3 />
      <Frame5 />
      <Frame7 />
    </div>
  );
}

function SectionHeading() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="section-heading">
      <p className="[word-break:break-word] font-['Young_Serif:Regular',sans-serif] leading-[1.1] not-italic relative shrink-0 text-[#1b2b1b] text-[56px] w-full">Choose Your Destination</p>
    </div>
  );
}

function DifficultyBadge() {
  return (
    <div className="bg-[#e6f1f1] content-stretch flex items-start px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="difficulty-badge">
      <p className="[word-break:break-word] font-['Schibsted_Grotesk:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#2d8a8a] text-[12px] uppercase whitespace-nowrap">Easy</p>
    </div>
  );
}

function MetaRow() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="meta-row">
      <DifficultyBadge />
      <p className="[word-break:break-word] font-['Schibsted_Grotesk:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#2d8a8a] text-[14px] whitespace-nowrap">1 day</p>
    </div>
  );
}

function Frame11() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Frame">
      <p className="font-['Young_Serif:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#1b2b1b] text-[28px] w-full">Lake Atitlán</p>
      <p className="font-['Schibsted_Grotesk:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[15px] text-[rgba(27,43,27,0.8)] w-full">Kayak the volcanic crater lake and visit traditional villages.</p>
    </div>
  );
}

function CardContent() {
  return (
    <div className="relative shrink-0 w-full" data-name="card-content">
      <div className="content-stretch flex flex-col gap-[16px] items-start p-[24px] relative size-full">
        <MetaRow />
        <Frame11 />
      </div>
    </div>
  );
}

function CardTop() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="card-top">
      <div className="h-[260px] relative shrink-0 w-full" data-name="tour-image">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgTourImage} />
      </div>
      <CardContent />
    </div>
  );
}

function Frame12() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[2px] items-start leading-[normal] relative shrink-0 whitespace-nowrap" data-name="Frame">
      <p className="font-['Schibsted_Grotesk:Regular',sans-serif] font-normal relative shrink-0 text-[12px] text-[rgba(27,43,27,0.5)] uppercase">From</p>
      <p className="font-['Young_Serif:Regular',sans-serif] not-italic relative shrink-0 text-[#1b2b1b] text-[20px]">$89</p>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-[#ff7f6d] content-stretch flex items-center justify-center px-[32px] py-[16px] relative rounded-[4px] shrink-0" data-name="button">
      <p className="[word-break:break-word] font-['Schibsted_Grotesk:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[16px] text-white uppercase whitespace-nowrap">Book Now</p>
    </div>
  );
}

function CardFooter() {
  return (
    <div className="relative shrink-0 w-full" data-name="card-footer">
      <div aria-hidden className="absolute border-[#faf9f6] border-solid border-t inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between p-[24px] relative size-full">
          <Frame12 />
          <Button1 />
        </div>
      </div>
    </div>
  );
}

function TourCard() {
  return (
    <div className="bg-white content-stretch flex flex-[1_0_0] flex-col items-start justify-between min-w-px overflow-clip relative rounded-[8px] self-stretch shadow-[0px_4px_12px_0px_rgba(0,0,0,0.05)]" data-name="tour-card">
      <CardTop />
      <CardFooter />
    </div>
  );
}

function DifficultyBadge1() {
  return (
    <div className="bg-[#e6f1f1] content-stretch flex items-start px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="difficulty-badge">
      <p className="[word-break:break-word] font-['Schibsted_Grotesk:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#2d8a8a] text-[12px] uppercase whitespace-nowrap">Moderate</p>
    </div>
  );
}

function MetaRow1() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="meta-row">
      <DifficultyBadge1 />
      <p className="[word-break:break-word] font-['Schibsted_Grotesk:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#2d8a8a] text-[14px] whitespace-nowrap">2 days</p>
    </div>
  );
}

function Frame13() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Frame">
      <p className="font-['Young_Serif:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#1b2b1b] text-[28px] w-full">Tikal</p>
      <p className="font-['Schibsted_Grotesk:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[15px] text-[rgba(27,43,27,0.8)] w-full">Trek ancient Maya ruins hidden deep in the subtropical jungle.</p>
    </div>
  );
}

function CardContent1() {
  return (
    <div className="relative shrink-0 w-full" data-name="card-content">
      <div className="content-stretch flex flex-col gap-[16px] items-start p-[24px] relative size-full">
        <MetaRow1 />
        <Frame13 />
      </div>
    </div>
  );
}

function CardTop1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="card-top">
      <div className="h-[260px] relative shrink-0 w-full" data-name="tour-image">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgTourImage1} />
      </div>
      <CardContent1 />
    </div>
  );
}

function Frame14() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[2px] items-start leading-[normal] relative shrink-0 whitespace-nowrap" data-name="Frame">
      <p className="font-['Schibsted_Grotesk:Regular',sans-serif] font-normal relative shrink-0 text-[12px] text-[rgba(27,43,27,0.5)] uppercase">From</p>
      <p className="font-['Young_Serif:Regular',sans-serif] not-italic relative shrink-0 text-[#1b2b1b] text-[20px]">$245</p>
    </div>
  );
}

function Button2() {
  return (
    <div className="bg-[#ff7f6d] content-stretch flex items-center justify-center px-[32px] py-[16px] relative rounded-[4px] shrink-0" data-name="button">
      <p className="[word-break:break-word] font-['Schibsted_Grotesk:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[16px] text-white uppercase whitespace-nowrap">Book Now</p>
    </div>
  );
}

function CardFooter1() {
  return (
    <div className="relative shrink-0 w-full" data-name="card-footer">
      <div aria-hidden className="absolute border-[#faf9f6] border-solid border-t inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between p-[24px] relative size-full">
          <Frame14 />
          <Button2 />
        </div>
      </div>
    </div>
  );
}

function TourCard1() {
  return (
    <div className="bg-white content-stretch flex flex-[1_0_0] flex-col items-start justify-between min-w-px overflow-clip relative rounded-[8px] self-stretch shadow-[0px_4px_12px_0px_rgba(0,0,0,0.05)]" data-name="tour-card">
      <CardTop1 />
      <CardFooter1 />
    </div>
  );
}

function DifficultyBadge2() {
  return (
    <div className="bg-[#e6f1f1] content-stretch flex items-start px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="difficulty-badge">
      <p className="[word-break:break-word] font-['Schibsted_Grotesk:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#2d8a8a] text-[12px] uppercase whitespace-nowrap">Challenging</p>
    </div>
  );
}

function MetaRow2() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="meta-row">
      <DifficultyBadge2 />
      <p className="[word-break:break-word] font-['Schibsted_Grotesk:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#2d8a8a] text-[14px] whitespace-nowrap">2 days</p>
    </div>
  );
}

function Frame15() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Frame">
      <p className="font-['Young_Serif:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#1b2b1b] text-[28px] w-full">Volcán Acatenango</p>
      <p className="font-['Schibsted_Grotesk:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[15px] text-[rgba(27,43,27,0.8)] w-full">Summit an active volcano at dawn for views of erupting Fuego.</p>
    </div>
  );
}

function CardContent2() {
  return (
    <div className="relative shrink-0 w-full" data-name="card-content">
      <div className="content-stretch flex flex-col gap-[16px] items-start p-[24px] relative size-full">
        <MetaRow2 />
        <Frame15 />
      </div>
    </div>
  );
}

function CardTop2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="card-top">
      <div className="h-[260px] relative shrink-0 w-full" data-name="tour-image">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgTourImage2} />
      </div>
      <CardContent2 />
    </div>
  );
}

function Frame16() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[2px] items-start leading-[normal] relative shrink-0 whitespace-nowrap" data-name="Frame">
      <p className="font-['Schibsted_Grotesk:Regular',sans-serif] font-normal relative shrink-0 text-[12px] text-[rgba(27,43,27,0.5)] uppercase">From</p>
      <p className="font-['Young_Serif:Regular',sans-serif] not-italic relative shrink-0 text-[#1b2b1b] text-[20px]">$179</p>
    </div>
  );
}

function Button3() {
  return (
    <div className="bg-[#ff7f6d] content-stretch flex items-center justify-center px-[32px] py-[16px] relative rounded-[4px] shrink-0" data-name="button">
      <p className="[word-break:break-word] font-['Schibsted_Grotesk:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[16px] text-white uppercase whitespace-nowrap">Book Now</p>
    </div>
  );
}

function CardFooter2() {
  return (
    <div className="relative shrink-0 w-full" data-name="card-footer">
      <div aria-hidden className="absolute border-[#faf9f6] border-solid border-t inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between p-[24px] relative size-full">
          <Frame16 />
          <Button3 />
        </div>
      </div>
    </div>
  );
}

function TourCard2() {
  return (
    <div className="bg-white content-stretch flex flex-[1_0_0] flex-col items-start justify-between min-w-px overflow-clip relative rounded-[8px] self-stretch shadow-[0px_4px_12px_0px_rgba(0,0,0,0.05)]" data-name="tour-card">
      <CardTop2 />
      <CardFooter2 />
    </div>
  );
}

function DifficultyBadge3() {
  return (
    <div className="bg-[#e6f1f1] content-stretch flex items-start px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="difficulty-badge">
      <p className="[word-break:break-word] font-['Schibsted_Grotesk:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#2d8a8a] text-[12px] uppercase whitespace-nowrap">Moderate</p>
    </div>
  );
}

function MetaRow3() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="meta-row">
      <DifficultyBadge3 />
      <p className="[word-break:break-word] font-['Schibsted_Grotesk:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#2d8a8a] text-[14px] whitespace-nowrap">1 day</p>
    </div>
  );
}

function Frame17() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Frame">
      <p className="font-['Young_Serif:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#1b2b1b] text-[28px] w-full">Semuc Champey</p>
      <p className="font-['Schibsted_Grotesk:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[15px] text-[rgba(27,43,27,0.8)] w-full">Turquoise limestone pools and mysterious water-filled caves.</p>
    </div>
  );
}

function CardContent3() {
  return (
    <div className="relative shrink-0 w-full" data-name="card-content">
      <div className="content-stretch flex flex-col gap-[16px] items-start p-[24px] relative size-full">
        <MetaRow3 />
        <Frame17 />
      </div>
    </div>
  );
}

function CardTop3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="card-top">
      <div className="h-[260px] relative shrink-0 w-full" data-name="tour-image">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgTourImage3} />
      </div>
      <CardContent3 />
    </div>
  );
}

function Frame18() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[2px] items-start leading-[normal] relative shrink-0 whitespace-nowrap" data-name="Frame">
      <p className="font-['Schibsted_Grotesk:Regular',sans-serif] font-normal relative shrink-0 text-[12px] text-[rgba(27,43,27,0.5)] uppercase">From</p>
      <p className="font-['Young_Serif:Regular',sans-serif] not-italic relative shrink-0 text-[#1b2b1b] text-[20px]">$119</p>
    </div>
  );
}

function Button4() {
  return (
    <div className="bg-[#ff7f6d] content-stretch flex items-center justify-center px-[32px] py-[16px] relative rounded-[4px] shrink-0" data-name="button">
      <p className="[word-break:break-word] font-['Schibsted_Grotesk:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[16px] text-white uppercase whitespace-nowrap">Book Now</p>
    </div>
  );
}

function CardFooter3() {
  return (
    <div className="relative shrink-0 w-full" data-name="card-footer">
      <div aria-hidden className="absolute border-[#faf9f6] border-solid border-t inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between p-[24px] relative size-full">
          <Frame18 />
          <Button4 />
        </div>
      </div>
    </div>
  );
}

function TourCard3() {
  return (
    <div className="bg-white content-stretch flex flex-[1_0_0] flex-col items-start justify-between min-w-px overflow-clip relative rounded-[8px] self-stretch shadow-[0px_4px_12px_0px_rgba(0,0,0,0.05)]" data-name="tour-card">
      <CardTop3 />
      <CardFooter3 />
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex gap-[24px] h-[581px] items-start relative shrink-0 w-full" data-name="Frame">
      <TourCard />
      <TourCard1 />
      <TourCard2 />
      <TourCard3 />
    </div>
  );
}

function DifficultyBadge4() {
  return (
    <div className="bg-[#e6f1f1] content-stretch flex items-start px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="difficulty-badge">
      <p className="[word-break:break-word] font-['Schibsted_Grotesk:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#2d8a8a] text-[12px] uppercase whitespace-nowrap">Easy</p>
    </div>
  );
}

function MetaRow4() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="meta-row">
      <DifficultyBadge4 />
      <p className="[word-break:break-word] font-['Schibsted_Grotesk:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#2d8a8a] text-[14px] whitespace-nowrap">1 day</p>
    </div>
  );
}

function Frame20() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Frame">
      <p className="font-['Young_Serif:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#1b2b1b] text-[28px] w-full">{`Río Dulce & Livingston`}</p>
      <p className="font-['Schibsted_Grotesk:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[15px] text-[rgba(27,43,27,0.8)] w-full">Explore river canyons and the unique Caribbean Garifuna coast.</p>
    </div>
  );
}

function CardContent4() {
  return (
    <div className="relative shrink-0 w-full" data-name="card-content">
      <div className="content-stretch flex flex-col gap-[16px] items-start p-[24px] relative size-full">
        <MetaRow4 />
        <Frame20 />
      </div>
    </div>
  );
}

function CardTop4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="card-top">
      <div className="h-[260px] relative shrink-0 w-full" data-name="tour-image">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgTourImage4} />
      </div>
      <CardContent4 />
    </div>
  );
}

function Frame21() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[2px] items-start leading-[normal] relative shrink-0 whitespace-nowrap" data-name="Frame">
      <p className="font-['Schibsted_Grotesk:Regular',sans-serif] font-normal relative shrink-0 text-[12px] text-[rgba(27,43,27,0.5)] uppercase">From</p>
      <p className="font-['Young_Serif:Regular',sans-serif] not-italic relative shrink-0 text-[#1b2b1b] text-[20px]">$99</p>
    </div>
  );
}

function Button5() {
  return (
    <div className="bg-[#ff7f6d] content-stretch flex items-center justify-center px-[32px] py-[16px] relative rounded-[4px] shrink-0" data-name="button">
      <p className="[word-break:break-word] font-['Schibsted_Grotesk:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[16px] text-white uppercase whitespace-nowrap">Book Now</p>
    </div>
  );
}

function CardFooter4() {
  return (
    <div className="relative shrink-0 w-full" data-name="card-footer">
      <div aria-hidden className="absolute border-[#faf9f6] border-solid border-t inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between p-[24px] relative size-full">
          <Frame21 />
          <Button5 />
        </div>
      </div>
    </div>
  );
}

function TourCard4() {
  return (
    <div className="bg-white content-stretch flex flex-[1_0_0] flex-col items-start justify-between min-w-px overflow-clip relative rounded-[8px] self-stretch shadow-[0px_4px_12px_0px_rgba(0,0,0,0.05)]" data-name="tour-card">
      <CardTop4 />
      <CardFooter4 />
    </div>
  );
}

function DifficultyBadge5() {
  return (
    <div className="bg-[#e6f1f1] content-stretch flex items-start px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="difficulty-badge">
      <p className="[word-break:break-word] font-['Schibsted_Grotesk:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#2d8a8a] text-[12px] uppercase whitespace-nowrap">Challenging</p>
    </div>
  );
}

function MetaRow5() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="meta-row">
      <DifficultyBadge5 />
      <p className="[word-break:break-word] font-['Schibsted_Grotesk:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#2d8a8a] text-[14px] whitespace-nowrap">5 days</p>
    </div>
  );
}

function Frame22() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Frame">
      <p className="font-['Young_Serif:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#1b2b1b] text-[28px] w-full">El Mirador</p>
      <p className="font-['Schibsted_Grotesk:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[15px] text-[rgba(27,43,27,0.8)] w-full">Remote jungle trek to the tallest Maya pyramid in the world.</p>
    </div>
  );
}

function CardContent5() {
  return (
    <div className="relative shrink-0 w-full" data-name="card-content">
      <div className="content-stretch flex flex-col gap-[16px] items-start p-[24px] relative size-full">
        <MetaRow5 />
        <Frame22 />
      </div>
    </div>
  );
}

function CardTop5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="card-top">
      <div className="h-[260px] relative shrink-0 w-full" data-name="tour-image">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgTourImage5} />
      </div>
      <CardContent5 />
    </div>
  );
}

function Frame23() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[2px] items-start leading-[normal] relative shrink-0 whitespace-nowrap" data-name="Frame">
      <p className="font-['Schibsted_Grotesk:Regular',sans-serif] font-normal relative shrink-0 text-[12px] text-[rgba(27,43,27,0.5)] uppercase">From</p>
      <p className="font-['Young_Serif:Regular',sans-serif] not-italic relative shrink-0 text-[#1b2b1b] text-[20px]">$695</p>
    </div>
  );
}

function Button6() {
  return (
    <div className="bg-[#ff7f6d] content-stretch flex items-center justify-center px-[32px] py-[16px] relative rounded-[4px] shrink-0" data-name="button">
      <p className="[word-break:break-word] font-['Schibsted_Grotesk:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[16px] text-white uppercase whitespace-nowrap">Book Now</p>
    </div>
  );
}

function CardFooter5() {
  return (
    <div className="relative shrink-0 w-full" data-name="card-footer">
      <div aria-hidden className="absolute border-[#faf9f6] border-solid border-t inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between p-[24px] relative size-full">
          <Frame23 />
          <Button6 />
        </div>
      </div>
    </div>
  );
}

function TourCard5() {
  return (
    <div className="bg-white content-stretch flex flex-[1_0_0] flex-col items-start justify-between min-w-px overflow-clip relative rounded-[8px] self-stretch shadow-[0px_4px_12px_0px_rgba(0,0,0,0.05)]" data-name="tour-card">
      <CardTop5 />
      <CardFooter5 />
    </div>
  );
}

function DifficultyBadge6() {
  return (
    <div className="bg-[#e6f1f1] content-stretch flex items-start px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="difficulty-badge">
      <p className="[word-break:break-word] font-['Schibsted_Grotesk:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#2d8a8a] text-[12px] uppercase whitespace-nowrap">Easy</p>
    </div>
  );
}

function MetaRow6() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="meta-row">
      <DifficultyBadge6 />
      <p className="[word-break:break-word] font-['Schibsted_Grotesk:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#2d8a8a] text-[14px] whitespace-nowrap">1 day</p>
    </div>
  );
}

function Frame24() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Frame">
      <p className="font-['Young_Serif:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#1b2b1b] text-[28px] w-full">Quetzal Cloud Forest</p>
      <p className="font-['Schibsted_Grotesk:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[15px] text-[rgba(27,43,27,0.8)] w-full">Spot resplendent quetzals in the misty highland cloud forest.</p>
    </div>
  );
}

function CardContent6() {
  return (
    <div className="relative shrink-0 w-full" data-name="card-content">
      <div className="content-stretch flex flex-col gap-[16px] items-start p-[24px] relative size-full">
        <MetaRow6 />
        <Frame24 />
      </div>
    </div>
  );
}

function CardTop6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="card-top">
      <div className="h-[260px] relative shrink-0 w-full" data-name="tour-image">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgTourImage6} />
      </div>
      <CardContent6 />
    </div>
  );
}

function Frame25() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[2px] items-start leading-[normal] relative shrink-0 whitespace-nowrap" data-name="Frame">
      <p className="font-['Schibsted_Grotesk:Regular',sans-serif] font-normal relative shrink-0 text-[12px] text-[rgba(27,43,27,0.5)] uppercase">From</p>
      <p className="font-['Young_Serif:Regular',sans-serif] not-italic relative shrink-0 text-[#1b2b1b] text-[20px]">$89</p>
    </div>
  );
}

function Button7() {
  return (
    <div className="bg-[#ff7f6d] content-stretch flex items-center justify-center px-[32px] py-[16px] relative rounded-[4px] shrink-0" data-name="button">
      <p className="[word-break:break-word] font-['Schibsted_Grotesk:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[16px] text-white uppercase whitespace-nowrap">Book Now</p>
    </div>
  );
}

function CardFooter6() {
  return (
    <div className="relative shrink-0 w-full" data-name="card-footer">
      <div aria-hidden className="absolute border-[#faf9f6] border-solid border-t inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between p-[24px] relative size-full">
          <Frame25 />
          <Button7 />
        </div>
      </div>
    </div>
  );
}

function TourCard6() {
  return (
    <div className="bg-white content-stretch flex flex-[1_0_0] flex-col items-start justify-between min-w-px overflow-clip relative rounded-[8px] self-stretch shadow-[0px_4px_12px_0px_rgba(0,0,0,0.05)]" data-name="tour-card">
      <CardTop6 />
      <CardFooter6 />
    </div>
  );
}

function DifficultyBadge7() {
  return (
    <div className="bg-[#e6f1f1] content-stretch flex items-start px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="difficulty-badge">
      <p className="[word-break:break-word] font-['Schibsted_Grotesk:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#2d8a8a] text-[12px] uppercase whitespace-nowrap">Moderate</p>
    </div>
  );
}

function MetaRow7() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="meta-row">
      <DifficultyBadge7 />
      <p className="[word-break:break-word] font-['Schibsted_Grotesk:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#2d8a8a] text-[14px] whitespace-nowrap">2 days</p>
    </div>
  );
}

function Frame26() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Frame">
      <p className="font-['Young_Serif:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#1b2b1b] text-[28px] w-full">Laguna Lachuá</p>
      <p className="font-['Schibsted_Grotesk:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[15px] text-[rgba(27,43,27,0.8)] w-full">A pristine, perfectly circular turquoise lagoon in the lowland jungle.</p>
    </div>
  );
}

function CardContent7() {
  return (
    <div className="relative shrink-0 w-full" data-name="card-content">
      <div className="content-stretch flex flex-col gap-[16px] items-start p-[24px] relative size-full">
        <MetaRow7 />
        <Frame26 />
      </div>
    </div>
  );
}

function CardTop7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="card-top">
      <div className="h-[260px] relative shrink-0 w-full" data-name="tour-image">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgTourImage7} />
      </div>
      <CardContent7 />
    </div>
  );
}

function Frame27() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[2px] items-start leading-[normal] relative shrink-0 whitespace-nowrap" data-name="Frame">
      <p className="font-['Schibsted_Grotesk:Regular',sans-serif] font-normal relative shrink-0 text-[12px] text-[rgba(27,43,27,0.5)] uppercase">From</p>
      <p className="font-['Young_Serif:Regular',sans-serif] not-italic relative shrink-0 text-[#1b2b1b] text-[20px]">$149</p>
    </div>
  );
}

function Button8() {
  return (
    <div className="bg-[#ff7f6d] content-stretch flex items-center justify-center px-[32px] py-[16px] relative rounded-[4px] shrink-0" data-name="button">
      <p className="[word-break:break-word] font-['Schibsted_Grotesk:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[16px] text-white uppercase whitespace-nowrap">Book Now</p>
    </div>
  );
}

function CardFooter7() {
  return (
    <div className="relative shrink-0 w-full" data-name="card-footer">
      <div aria-hidden className="absolute border-[#faf9f6] border-solid border-t inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between p-[24px] relative size-full">
          <Frame27 />
          <Button8 />
        </div>
      </div>
    </div>
  );
}

function TourCard7() {
  return (
    <div className="bg-white content-stretch flex flex-[1_0_0] flex-col items-start justify-between min-w-px overflow-clip relative rounded-[8px] self-stretch shadow-[0px_4px_12px_0px_rgba(0,0,0,0.05)]" data-name="tour-card">
      <CardTop7 />
      <CardFooter7 />
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex gap-[24px] h-[581px] items-start relative shrink-0 w-full" data-name="Frame">
      <TourCard4 />
      <TourCard5 />
      <TourCard6 />
      <TourCard7 />
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full" data-name="Frame">
      <Frame10 />
      <Frame19 />
    </div>
  );
}

function ToursSection() {
  return (
    <div className="bg-[#faf9f6] content-stretch flex flex-col gap-[80px] items-start px-[80px] py-[120px] relative shrink-0 w-[1440px]" data-name="tours-section">
      <SectionHeading />
      <Frame9 />
    </div>
  );
}

function SectionHeading1() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[16px] items-center relative shrink-0 text-center w-full" data-name="section-heading">
      <p className="font-['Young_Serif:Regular',sans-serif] leading-[1.1] min-w-full not-italic relative shrink-0 text-[#1b2b1b] text-[56px] w-[min-content]">Design Your Own Adventure</p>
      <p className="font-['Schibsted_Grotesk:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[20px] text-[rgba(27,43,27,0.8)] w-[720px]">Have a specific destination or experience in mind? Our expert guides will build a fully personalised itinerary just for you.</p>
    </div>
  );
}

function Frame30() {
  return (
    <div className="bg-white h-[48px] relative rounded-[4px] shrink-0 w-full" data-name="Frame">
      <div aria-hidden className="absolute border border-[#1b2b1b] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] py-[14px] relative size-full">
          <p className="[word-break:break-word] font-['Schibsted_Grotesk:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[16px] text-[rgba(27,43,27,0.5)] whitespace-nowrap">John Doe</p>
        </div>
      </div>
    </div>
  );
}

function Frame29() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-w-px relative" data-name="Frame">
      <p className="[word-break:break-word] font-['Schibsted_Grotesk:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#1b2b1b] text-[14px] uppercase whitespace-nowrap">Full Name</p>
      <Frame30 />
    </div>
  );
}

function Frame32() {
  return (
    <div className="bg-white h-[48px] relative rounded-[4px] shrink-0 w-full" data-name="Frame">
      <div aria-hidden className="absolute border border-[#1b2b1b] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] py-[14px] relative size-full">
          <p className="[word-break:break-word] font-['Schibsted_Grotesk:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[16px] text-[rgba(27,43,27,0.5)] whitespace-nowrap">john@example.com</p>
        </div>
      </div>
    </div>
  );
}

function Frame31() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-w-px relative" data-name="Frame">
      <p className="[word-break:break-word] font-['Schibsted_Grotesk:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#1b2b1b] text-[14px] uppercase whitespace-nowrap">Email Address</p>
      <Frame32 />
    </div>
  );
}

function Frame34() {
  return (
    <div className="bg-white h-[48px] relative rounded-[4px] shrink-0 w-full" data-name="Frame">
      <div aria-hidden className="absolute border border-[#1b2b1b] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] py-[14px] relative size-full">
          <p className="[word-break:break-word] font-['Schibsted_Grotesk:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[16px] text-[rgba(27,43,27,0.5)] whitespace-nowrap">+1 (555) 000-0000</p>
        </div>
      </div>
    </div>
  );
}

function Frame33() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-w-px relative" data-name="Frame">
      <p className="[word-break:break-word] font-['Schibsted_Grotesk:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#1b2b1b] text-[14px] uppercase whitespace-nowrap">Phone Number</p>
      <Frame34 />
    </div>
  );
}

function Frame28() {
  return (
    <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-full" data-name="Frame">
      <Frame29 />
      <Frame31 />
      <Frame33 />
    </div>
  );
}

function Frame37() {
  return (
    <div className="bg-white h-[120px] relative rounded-[4px] shrink-0 w-full" data-name="Frame">
      <div aria-hidden className="absolute border border-[#1b2b1b] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="content-stretch flex items-start px-[16px] py-[14px] relative size-full">
        <p className="[word-break:break-word] font-['Schibsted_Grotesk:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[16px] text-[rgba(27,43,27,0.5)] whitespace-nowrap">Describe your dream trip...</p>
      </div>
    </div>
  );
}

function Frame36() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-w-px relative" data-name="Frame">
      <p className="[word-break:break-word] font-['Schibsted_Grotesk:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#1b2b1b] text-[14px] uppercase whitespace-nowrap">Destination / Idea</p>
      <Frame37 />
    </div>
  );
}

function ChevronDown() {
  return (
    <div className="-translate-y-1/2 absolute right-[16px] size-[16px] top-1/2" data-name="chevron-down">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="chevron-down">
          <path d="M4 6L8 10L12 6" id="Vector" stroke="var(--stroke-0, #1B2B1B)" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame40() {
  return (
    <div className="bg-white h-[48px] relative rounded-[4px] shrink-0 w-full" data-name="Frame">
      <div aria-hidden className="absolute border border-[#1b2b1b] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] py-[14px] relative size-full">
          <p className="[word-break:break-word] font-['Schibsted_Grotesk:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[16px] text-[rgba(27,43,27,0.5)] whitespace-nowrap">Select size</p>
          <ChevronDown />
        </div>
      </div>
    </div>
  );
}

function Frame39() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Frame">
      <p className="[word-break:break-word] font-['Schibsted_Grotesk:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#1b2b1b] text-[14px] uppercase whitespace-nowrap">Group Size</p>
      <Frame40 />
    </div>
  );
}

function Frame42() {
  return (
    <div className="bg-white h-[48px] relative rounded-[4px] shrink-0 w-full" data-name="Frame">
      <div aria-hidden className="absolute border border-[#1b2b1b] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] py-[14px] relative size-full">
          <p className="[word-break:break-word] font-['Schibsted_Grotesk:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[16px] text-[rgba(27,43,27,0.5)] whitespace-nowrap">Pick a range</p>
        </div>
      </div>
    </div>
  );
}

function Frame41() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Frame">
      <p className="[word-break:break-word] font-['Schibsted_Grotesk:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#1b2b1b] text-[14px] uppercase whitespace-nowrap">Preferred Dates</p>
      <Frame42 />
    </div>
  );
}

function Frame38() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[24px] items-start min-w-px relative" data-name="Frame">
      <Frame39 />
      <Frame41 />
    </div>
  );
}

function Frame35() {
  return (
    <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-full" data-name="Frame">
      <Frame36 />
      <Frame38 />
    </div>
  );
}

function Button9() {
  return (
    <div className="bg-[#ff7f6d] content-stretch flex items-center justify-center px-[32px] py-[16px] relative rounded-[4px] shrink-0" data-name="button">
      <p className="[word-break:break-word] font-['Schibsted_Grotesk:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[16px] text-white uppercase whitespace-nowrap">Request Custom Tour</p>
    </div>
  );
}

function Frame43() {
  return (
    <div className="content-stretch flex items-start justify-center relative shrink-0 w-full" data-name="Frame">
      <Button9 />
    </div>
  );
}

function FormCard() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[32px] items-start p-[48px] relative rounded-[8px] shrink-0 w-[1100px]" data-name="form-card">
      <Frame28 />
      <Frame35 />
      <Frame43 />
    </div>
  );
}

function CustomTour() {
  return (
    <div className="bg-[#ffc75f] content-stretch flex flex-col gap-[64px] items-start px-[80px] py-[100px] relative shrink-0 w-[1440px]" data-name="custom-tour">
      <SectionHeading1 />
      <FormCard />
    </div>
  );
}

function SectionHeading2() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[16px] items-center relative shrink-0 text-center w-full" data-name="section-heading">
      <p className="font-['Young_Serif:Regular',sans-serif] leading-[1.1] min-w-full not-italic relative shrink-0 text-[56px] text-white w-[min-content]">Ready to Go? Book Directly</p>
      <p className="font-['Schibsted_Grotesk:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[20px] text-[rgba(255,255,255,0.8)] w-[720px]">Skip the middleman — book your tour directly with us in minutes. Instant confirmation, flexible cancellation, no booking fees.</p>
    </div>
  );
}

function ChevronDown1() {
  return (
    <div className="-translate-y-1/2 absolute right-[15.67px] size-[16px] top-1/2" data-name="chevron-down">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="chevron-down">
          <path d="M4 6L8 10L12 6" id="Vector" stroke="var(--stroke-0, #1B2B1B)" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame46() {
  return (
    <div className="bg-white h-[48px] relative rounded-[4px] shrink-0 w-full" data-name="Frame">
      <div aria-hidden className="absolute border border-[#1b2b1b] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] py-[14px] relative size-full">
          <p className="[word-break:break-word] font-['Schibsted_Grotesk:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[16px] text-[rgba(27,43,27,0.5)] whitespace-nowrap">Select your tour</p>
          <ChevronDown1 />
        </div>
      </div>
    </div>
  );
}

function Frame45() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-w-px relative" data-name="Frame">
      <p className="[word-break:break-word] font-['Schibsted_Grotesk:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#1b2b1b] text-[14px] uppercase whitespace-nowrap">Tour Selector</p>
      <Frame46 />
    </div>
  );
}

function Frame48() {
  return (
    <div className="bg-white h-[48px] relative rounded-[4px] shrink-0 w-full" data-name="Frame">
      <div aria-hidden className="absolute border border-[#1b2b1b] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] py-[14px] relative size-full">
          <p className="[word-break:break-word] font-['Schibsted_Grotesk:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[16px] text-[rgba(27,43,27,0.5)] whitespace-nowrap">Select date</p>
        </div>
      </div>
    </div>
  );
}

function Frame47() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-w-px relative" data-name="Frame">
      <p className="[word-break:break-word] font-['Schibsted_Grotesk:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#1b2b1b] text-[14px] uppercase whitespace-nowrap">Date</p>
      <Frame48 />
    </div>
  );
}

function Frame50() {
  return (
    <div className="bg-white h-[48px] relative rounded-[4px] shrink-0 w-full" data-name="Frame">
      <div aria-hidden className="absolute border border-[#1b2b1b] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] py-[14px] relative size-full">
          <p className="[word-break:break-word] font-['Schibsted_Grotesk:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[16px] text-[rgba(27,43,27,0.5)] whitespace-nowrap">1-8 people</p>
        </div>
      </div>
    </div>
  );
}

function Frame49() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-w-px relative" data-name="Frame">
      <p className="[word-break:break-word] font-['Schibsted_Grotesk:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#1b2b1b] text-[14px] uppercase whitespace-nowrap">Group Size</p>
      <Frame50 />
    </div>
  );
}

function Frame44() {
  return (
    <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-full" data-name="Frame">
      <Frame45 />
      <Frame47 />
      <Frame49 />
    </div>
  );
}

function Frame53() {
  return (
    <div className="bg-white h-[48px] relative rounded-[4px] shrink-0 w-full" data-name="Frame">
      <div aria-hidden className="absolute border border-[#1b2b1b] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] py-[14px] relative size-full">
          <p className="[word-break:break-word] font-['Schibsted_Grotesk:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[16px] text-[rgba(27,43,27,0.5)] whitespace-nowrap">John Doe</p>
        </div>
      </div>
    </div>
  );
}

function Frame52() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-w-px relative" data-name="Frame">
      <p className="[word-break:break-word] font-['Schibsted_Grotesk:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#1b2b1b] text-[14px] uppercase whitespace-nowrap">Name</p>
      <Frame53 />
    </div>
  );
}

function Frame55() {
  return (
    <div className="bg-white h-[48px] relative rounded-[4px] shrink-0 w-full" data-name="Frame">
      <div aria-hidden className="absolute border border-[#1b2b1b] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] py-[14px] relative size-full">
          <p className="[word-break:break-word] font-['Schibsted_Grotesk:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[16px] text-[rgba(27,43,27,0.5)] whitespace-nowrap">john@example.com</p>
        </div>
      </div>
    </div>
  );
}

function Frame54() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-w-px relative" data-name="Frame">
      <p className="[word-break:break-word] font-['Schibsted_Grotesk:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#1b2b1b] text-[14px] uppercase whitespace-nowrap">Email</p>
      <Frame55 />
    </div>
  );
}

function Frame57() {
  return (
    <div className="bg-white h-[48px] relative rounded-[4px] shrink-0 w-full" data-name="Frame">
      <div aria-hidden className="absolute border border-[#1b2b1b] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] py-[14px] relative size-full">
          <p className="[word-break:break-word] font-['Schibsted_Grotesk:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[16px] text-[rgba(27,43,27,0.5)] whitespace-nowrap">+1 (555) 000-0000</p>
        </div>
      </div>
    </div>
  );
}

function Frame56() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-w-px relative" data-name="Frame">
      <p className="[word-break:break-word] font-['Schibsted_Grotesk:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#1b2b1b] text-[14px] uppercase whitespace-nowrap">Phone</p>
      <Frame57 />
    </div>
  );
}

function Frame51() {
  return (
    <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-full" data-name="Frame">
      <Frame52 />
      <Frame54 />
      <Frame56 />
    </div>
  );
}

function Lock() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="lock">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="lock">
          <path d={svgPaths.p3ad10700} id="Vector" stroke="var(--stroke-0, #2D8A8A)" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame60() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Frame">
      <Lock />
      <p className="[word-break:break-word] font-['Schibsted_Grotesk:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[14px] text-[rgba(27,43,27,0.8)] whitespace-nowrap">Secure Payment</p>
    </div>
  );
}

function CheckCircle() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="check-circle">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_1_371)" id="check-circle">
          <path d={svgPaths.p14571d48} id="Vector" stroke="var(--stroke-0, #2D8A8A)" strokeLinecap="round" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_1_371">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame61() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Frame">
      <CheckCircle />
      <p className="[word-break:break-word] font-['Schibsted_Grotesk:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[14px] text-[rgba(27,43,27,0.8)] whitespace-nowrap">Instant Confirmation</p>
    </div>
  );
}

function RefreshCw() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="refresh-cw">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="refresh-cw">
          <path d={svgPaths.p16e7ef00} id="Vector" stroke="var(--stroke-0, #2D8A8A)" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame62() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Frame">
      <RefreshCw />
      <p className="[word-break:break-word] font-['Schibsted_Grotesk:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[14px] text-[rgba(27,43,27,0.8)] whitespace-nowrap">Free Cancellation</p>
    </div>
  );
}

function Frame59() {
  return (
    <div className="content-stretch flex gap-[32px] items-center relative shrink-0" data-name="Frame">
      <Frame60 />
      <Frame61 />
      <Frame62 />
    </div>
  );
}

function Button10() {
  return (
    <div className="bg-[#ff7f6d] content-stretch flex items-center justify-center px-[32px] py-[16px] relative rounded-[4px] shrink-0" data-name="button">
      <p className="[word-break:break-word] font-['Schibsted_Grotesk:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[16px] text-white uppercase whitespace-nowrap">Confirm Booking</p>
    </div>
  );
}

function Frame58() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Frame">
      <Frame59 />
      <Button10 />
    </div>
  );
}

function BookingForm() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[32px] items-start p-[48px] relative rounded-[8px] shrink-0 w-[1100px]" data-name="booking-form">
      <Frame44 />
      <Frame51 />
      <Frame58 />
    </div>
  );
}

function DirectBooking() {
  return (
    <div className="bg-[#2d8a8a] content-stretch flex flex-col gap-[64px] items-start px-[80px] py-[100px] relative shrink-0 w-[1440px]" data-name="direct-booking">
      <SectionHeading2 />
      <BookingForm />
    </div>
  );
}

function Frame64() {
  return (
    <div className="content-stretch flex flex-col font-['Schibsted_Grotesk:Regular',sans-serif] font-normal gap-[24px] items-start leading-[1.6] relative shrink-0 text-[18px] text-[rgba(27,43,27,0.8)] w-full" data-name="Frame">
      <p className="relative shrink-0 w-full">Founded in 2012, Ruta Verde is a local family-run company dedicated to sharing the raw beauty of our homeland. We believe that true travel is about deep connection with nature and the communities that protect it.</p>
      <p className="relative shrink-0 w-full">Our guides carry generations of indigenous knowledge and a conservation-first ethos. We specialize in intimate, small-group experiences (max 8 people) to ensure every journey leaves a light footprint and a lasting memory.</p>
    </div>
  );
}

function Frame66() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0" data-name="Frame">
      <p className="font-['Young_Serif:Regular',sans-serif] not-italic relative shrink-0 text-[#2d8a8a] text-[24px]">Native Insights</p>
      <p className="font-['Schibsted_Grotesk:Regular',sans-serif] font-normal relative shrink-0 text-[14px] text-[rgba(27,43,27,0.5)]">Local indigenous perspective</p>
    </div>
  );
}

function Frame67() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0" data-name="Frame">
      <p className="font-['Young_Serif:Regular',sans-serif] not-italic relative shrink-0 text-[#2d8a8a] text-[24px]">Eco-Conscious</p>
      <p className="font-['Schibsted_Grotesk:Regular',sans-serif] font-normal relative shrink-0 text-[14px] text-[rgba(27,43,27,0.5)]">Sustainable trekking practices</p>
    </div>
  );
}

function Frame65() {
  return (
    <div className="content-stretch flex gap-[24px] items-start leading-[normal] relative shrink-0 whitespace-nowrap" data-name="Frame">
      <Frame66 />
      <Frame67 />
    </div>
  );
}

function Frame63() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[32px] items-start min-w-px relative" data-name="Frame">
      <p className="font-['Young_Serif:Regular',sans-serif] leading-[1.1] min-w-full not-italic relative shrink-0 text-[#1b2b1b] text-[56px] w-[min-content]">Your Expert Guatemalan Guides</p>
      <Frame64 />
      <Frame65 />
    </div>
  );
}

function AboutStrip() {
  return (
    <div className="bg-[#faf9f6] content-stretch flex gap-[80px] items-center px-[80px] py-[120px] relative shrink-0 w-[1440px]" data-name="about-strip">
      <div className="h-[700px] relative rounded-[8px] shrink-0 w-[600px]" data-name="Rectangle">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[8px] size-full" src={imgRectangle} />
      </div>
      <Frame63 />
    </div>
  );
}

function SectionHeading3() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[16px] items-center relative shrink-0 text-center w-full" data-name="section-heading">
      <p className="font-['Young_Serif:Regular',sans-serif] leading-[1.1] min-w-full not-italic relative shrink-0 text-[#1b2b1b] text-[56px] w-[min-content]">Adventure Stories</p>
      <p className="font-['Schibsted_Grotesk:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[20px] text-[rgba(27,43,27,0.8)] w-[720px]">Read what our travelers have to say about their wild journeys across Guatemala.</p>
    </div>
  );
}

function Quote() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="quote">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="quote">
          <g id="Vector">
            <path d={svgPaths.p34a93b00} stroke="var(--stroke-0, #FF7F6D)" strokeLinecap="round" strokeWidth="2" />
            <path d={svgPaths.p2f8bc900} stroke="var(--stroke-0, #FF7F6D)" strokeLinecap="round" strokeWidth="2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame70() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-start leading-[normal] relative shrink-0 whitespace-nowrap" data-name="Frame">
      <p className="font-['Schibsted_Grotesk:Bold',sans-serif] font-bold relative shrink-0 text-[#1b2b1b] text-[16px]">Sarah Jenkins</p>
      <p className="font-['Schibsted_Grotesk:Regular',sans-serif] font-normal relative shrink-0 text-[#2d8a8a] text-[14px]">Tikal Ancient Maya</p>
    </div>
  );
}

function Frame69() {
  return (
    <div className="bg-[#faf9f6] flex-[1_0_0] min-w-px relative rounded-[8px]" data-name="Frame">
      <div className="content-stretch flex flex-col gap-[24px] items-start p-[40px] relative size-full">
        <Quote />
        <p className="[word-break:break-word] font-['Schibsted_Grotesk:Italic',sans-serif] font-normal italic leading-[1.5] min-w-full relative shrink-0 text-[#1b2b1b] text-[18px] w-[min-content]">{`"The Tikal sunrise tour was spiritual. Seeing the pyramids emerge from the jungle mist with a guide who knew every bird call was unforgettable."`}</p>
        <Frame70 />
      </div>
    </div>
  );
}

function Quote1() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="quote">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="quote">
          <g id="Vector">
            <path d={svgPaths.p34a93b00} stroke="var(--stroke-0, #FF7F6D)" strokeLinecap="round" strokeWidth="2" />
            <path d={svgPaths.p2f8bc900} stroke="var(--stroke-0, #FF7F6D)" strokeLinecap="round" strokeWidth="2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame72() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-start leading-[normal] relative shrink-0 whitespace-nowrap" data-name="Frame">
      <p className="font-['Schibsted_Grotesk:Bold',sans-serif] font-bold relative shrink-0 text-[#1b2b1b] text-[16px]">David Miller</p>
      <p className="font-['Schibsted_Grotesk:Regular',sans-serif] font-normal relative shrink-0 text-[#2d8a8a] text-[14px]">Volcán Acatenango</p>
    </div>
  );
}

function Frame71() {
  return (
    <div className="bg-[#faf9f6] flex-[1_0_0] min-w-px relative rounded-[8px]" data-name="Frame">
      <div className="content-stretch flex flex-col gap-[24px] items-start p-[40px] relative size-full">
        <Quote1 />
        <p className="[word-break:break-word] font-['Schibsted_Grotesk:Italic',sans-serif] font-normal italic leading-[1.5] min-w-full relative shrink-0 text-[#1b2b1b] text-[18px] w-[min-content]">{`"Acatenango was the hardest thing I've ever done, but Ruta Verde made it safe and spectacular. Watching Fuego erupt while drinking coffee was wild."`}</p>
        <Frame72 />
      </div>
    </div>
  );
}

function Quote2() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="quote">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="quote">
          <g id="Vector">
            <path d={svgPaths.p34a93b00} stroke="var(--stroke-0, #FF7F6D)" strokeLinecap="round" strokeWidth="2" />
            <path d={svgPaths.p2f8bc900} stroke="var(--stroke-0, #FF7F6D)" strokeLinecap="round" strokeWidth="2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame74() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-start leading-[normal] relative shrink-0 whitespace-nowrap" data-name="Frame">
      <p className="font-['Schibsted_Grotesk:Bold',sans-serif] font-bold relative shrink-0 text-[#1b2b1b] text-[16px]">Elena Rodriguez</p>
      <p className="font-['Schibsted_Grotesk:Regular',sans-serif] font-normal relative shrink-0 text-[#2d8a8a] text-[14px]">Semuc Champey</p>
    </div>
  );
}

function Frame73() {
  return (
    <div className="bg-[#faf9f6] flex-[1_0_0] min-w-px relative rounded-[8px]" data-name="Frame">
      <div className="content-stretch flex flex-col gap-[24px] items-start p-[40px] relative size-full">
        <Quote2 />
        <p className="[word-break:break-word] font-['Schibsted_Grotesk:Italic',sans-serif] font-normal italic leading-[1.5] min-w-full relative shrink-0 text-[#1b2b1b] text-[18px] w-[min-content]">{`"Semuc Champey is a paradise. The pools are even more turquoise in person. The small group size meant we had the caves mostly to ourselves."`}</p>
        <Frame74 />
      </div>
    </div>
  );
}

function Frame68() {
  return (
    <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-full" data-name="Frame">
      <Frame69 />
      <Frame71 />
      <Frame73 />
    </div>
  );
}

function Testimonials() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[64px] items-center px-[80px] py-[120px] relative shrink-0 w-[1440px]" data-name="testimonials">
      <SectionHeading3 />
      <Frame68 />
    </div>
  );
}

function Gallery() {
  return (
    <div className="content-stretch flex h-[400px] items-start relative shrink-0 w-[1440px]" data-name="gallery">
      <div className="flex-[1_0_0] h-full min-w-px relative" data-name="Rectangle">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgRectangle1} />
      </div>
      <div className="flex-[1_0_0] h-full min-w-px relative" data-name="Rectangle">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgRectangle2} />
      </div>
      <div className="flex-[1_0_0] h-full min-w-px relative" data-name="Rectangle">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgRectangle3} />
      </div>
      <div className="flex-[1_0_0] h-full min-w-px relative" data-name="Rectangle">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgRectangle4} />
      </div>
      <div className="flex-[1_0_0] h-full min-w-px relative" data-name="Rectangle">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgRectangle5} />
      </div>
    </div>
  );
}

function Leaf1() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="leaf">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="leaf">
          <path d={svgPaths.p261ac300} id="Vector" stroke="var(--stroke-0, #FF7F6D)" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame77() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Frame">
      <Leaf1 />
      <p className="[word-break:break-word] font-['Young_Serif:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[32px] text-white whitespace-nowrap">Ruta Verde</p>
    </div>
  );
}

function Frame76() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-[400px]" data-name="Frame">
      <Frame77 />
      <p className="[word-break:break-word] font-['Schibsted_Grotesk:Regular',sans-serif] font-normal leading-[1.5] min-w-full relative shrink-0 text-[18px] text-[rgba(255,255,255,0.8)] w-[min-content]">{`Guatemala's premier nature tour specialist. Immersive, sustainable, and unforgettable adventures.`}</p>
      <p className="[word-break:break-word] font-['Young_Serif:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#ffc75f] text-[20px] whitespace-nowrap">Where the wild things are</p>
    </div>
  );
}

function Frame80() {
  return (
    <div className="content-stretch flex flex-col font-['Schibsted_Grotesk:Regular',sans-serif] font-normal gap-[16px] items-start relative shrink-0 text-[rgba(255,255,255,0.6)]" data-name="Frame">
      <p className="relative shrink-0">All Tours</p>
      <p className="relative shrink-0">About Us</p>
      <p className="relative shrink-0">Gallery</p>
      <p className="relative shrink-0">Sustainability</p>
    </div>
  );
}

function Frame79() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0" data-name="Frame">
      <p className="font-['Schibsted_Grotesk:Bold',sans-serif] font-bold relative shrink-0 text-white uppercase">Explore</p>
      <Frame80 />
    </div>
  );
}

function Frame82() {
  return (
    <div className="content-stretch flex flex-col font-['Schibsted_Grotesk:Regular',sans-serif] font-normal gap-[16px] items-start relative shrink-0 text-[rgba(255,255,255,0.6)]" data-name="Frame">
      <p className="relative shrink-0">info@rutaverde.gt</p>
      <p className="relative shrink-0">+502 2456-7890</p>
      <p className="relative shrink-0">Guatemala City, Zona 10</p>
    </div>
  );
}

function Frame81() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0" data-name="Frame">
      <p className="font-['Schibsted_Grotesk:Bold',sans-serif] font-bold relative shrink-0 text-white uppercase">Contact</p>
      <Frame82 />
    </div>
  );
}

function Frame78() {
  return (
    <div className="[word-break:break-word] content-stretch flex gap-[120px] items-start leading-[normal] relative shrink-0 text-[16px] whitespace-nowrap" data-name="Frame">
      <Frame79 />
      <Frame81 />
    </div>
  );
}

function Frame75() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="Frame">
      <Frame76 />
      <Frame78 />
    </div>
  );
}

function Instagram() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="instagram">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_1_365)" id="instagram">
          <path d={svgPaths.p39e97e00} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_1_365">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Facebook() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="facebook">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="facebook">
          <path d={svgPaths.p3e6b5500} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Youtube() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="youtube">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="youtube">
          <path d={svgPaths.p2a83ba00} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Twitter() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="twitter">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_1_353)" id="twitter">
          <path d={svgPaths.p68ff180} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_1_353">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame84() {
  return (
    <div className="content-stretch flex gap-[24px] items-start relative shrink-0" data-name="Frame">
      <Instagram />
      <Facebook />
      <Youtube />
      <Twitter />
    </div>
  );
}

function Frame83() {
  return (
    <div className="content-stretch flex items-center justify-between pt-[40px] relative shrink-0 w-full" data-name="Frame">
      <div aria-hidden className="absolute border-[rgba(255,255,255,0.1)] border-solid border-t inset-0 pointer-events-none" />
      <p className="[word-break:break-word] font-['Schibsted_Grotesk:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[14px] text-[rgba(255,255,255,0.4)] whitespace-nowrap">© 2024 Ruta Verde Nature Tours. All rights reserved.</p>
      <Frame84 />
    </div>
  );
}

function Footer() {
  return (
    <div className="bg-[#1b2b1b] content-stretch flex flex-col gap-[80px] items-start pb-[60px] pt-[120px] px-[80px] relative shrink-0 w-[1440px]" data-name="footer">
      <Frame75 />
      <Frame83 />
    </div>
  );
}

export default function RutaVerdeLandingPage() {
  return (
    <div className="bg-[#faf9f6] content-stretch flex flex-col items-start relative size-full" data-name="ruta-verde-landing-page">
      <Hero />
      <IntroStrip />
      <ToursSection />
      <CustomTour />
      <DirectBooking />
      <AboutStrip />
      <Testimonials />
      <Gallery />
      <Footer />
    </div>
  );
}