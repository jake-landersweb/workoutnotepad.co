import LottiePlayer from "@/components/lottie-player";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import lottieJson from '../../public/lottie/woman-workout.json'
import Link from "next/link";
import { ButtonStoreApple, ButtonStoreGoogle } from "@/components/store-buttons";

export default function Home() {
  return <div className="">
    {/* <div className="z-[-10] bg-[url('/images/eye.jpg')] bg-cover bg-no-repeat bg-opacity-30 absolute top-0 left-0 w-[100%] h-[100vh] x-[-1]"></div> */}
    <div className="absolute -z-10 inset-0 h-full w-full 
            bg-[radial-gradient(circle,#73737350_1px,transparent_1px)] 
            bg-[size:30px_30px]"/>
    <div className="relative z-10">
      <div className="safe-area">
        <div data-aos="fade-up" className="px-4 h-[800px] overflow-hidden space-y-8 text-lt mt-8 md:mt-16">
          <div className="">
            <div className="text-center space-y-4">
              <h1 className='txt-title'>
                A Workout App Designed to Get Out of Your Way.
              </h1>
              <p className='text-lg md:text-xl max-w-2xl mx-auto'>
                Workout Notepad gives you an easy way to input your workout data paired with a best-in-class visualization engine.
              </p>
            </div>
            <div className="center pt-10">
              <div className="flex items-center space-x-4">
                <ButtonStoreGoogle />
                <ButtonStoreApple />
              </div>
            </div>
            <div className="center pt-8">
              <Image
                src="/screenshots/device/0-homescreen.webp"
                alt="Workout Notepad Page"
                className="w-min"
                height={300}
                width={300}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-background border-t min-h-[1000px]">
        {/* <div className="p-8 pt-12">
          <div className="space-y-8">
            <h3 className="title-sm text-center">We Build For</h3>
            <div className="max-w-3xl mx-auto">
              <div className="grid grid-cols-3 md:grid-cols-6 gap-4 place-items-center">
                <Link href="/services/ios"><SiIos size={50} /></Link>
                <Link href="/services/android"><IoLogoAndroid size={50} /> </Link>
                <Link href="/services/desktop#macos"><SiMacos size={50} /> </Link>
                <Link href="/services/desktop#windows"><IoLogoWindows size={50} /> </Link>
                <Link href="/services/desktop#linux"><SiArtixlinux size={50} /> </Link>
                <Link href="/services/web"><FaChrome size={50} /> </Link>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  </div>
}
