import UnderlineLink from "@modules/common/components/underline-link"
import style from "../../../../styles/hero.module.css"
import Image from "next/image"

const Hero = () => {
  return (
    <>
      <div className={style.video}>
        <video autoPlay loop muted>
          <source src="/hero-bg-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="w-full flex flex-row justify-center items-center text-center absolute top-0">
        <div className="text-white z-10 flex flex-col justify-center items-center text-center small:text-left small:justify-end small:items-start small:p-32">
          <div id={style.bubbles}>
            <Image
              id={style.bubblesImage1}
              src="/VectorBubble1.svg"
              alt="vector bubble"
              width={190}
              height={190}
              draggable="false"
            />
            <Image
              id={style.bubblesImage2}
              src="/VectorBubble2.svg"
              alt="vector bubble 2"
              width={120}
              height={120}
              draggable="false"
            />
          </div>
          <div className="flex flex-row mb-4">
            <Image
              src="/medusa-icon.svg"
              height="60px"
              width="60px"
              loading="eager"
              priority={true}
              quality={90}
              objectFit="contain"
              alt="medusa-icon"
              className="absolute inset-0"
              draggable="false"
            />
            <h1 className="text-7xl font-bold ml-2 drop-shadow-md shadow-black">
              StreamPay Demo Store
            </h1>
          </div>
          <p className="text-base-regular text-base max-w-[42rem] mb-6 drop-shadow-md shadow-black z-10">
            <div className="text-3xl font-bold">
              Revolutionizing The Online Payment Industry <br />
            </div>
            <i className="text-white text-xl font-bold z-10">
              StreamPay offers an infrastructure that serves as the backbone of online payments designed to enable online merchants and users to accept cryptocurrency as a method of payment.
            </i>
          </p>
          <div className="animate-bounce">
            <UnderlineLink href="/store">Explore products</UnderlineLink>
          </div>
        </div>
        <div id={style.medusaLogo} className="float-right mt-[4rem] mr-[5rem]">
          <Image
            src="/streampay-icon.svg"
            width={804}
            height={865.63}
            loading="eager"
            priority={true}
            quality={90}
            objectFit="cover"
            alt="streampay icon"
            className="absolute inset-0"
            draggable="false"
          />
        </div>
      </div>
    </>
  )
}

export default Hero
