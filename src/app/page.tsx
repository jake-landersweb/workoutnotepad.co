import Image from "next/image";
import { ButtonStoreApple, ButtonStoreGoogle } from "@/components/store-buttons";
import ScreenshotSection, { ScreenshotSectionProps } from "@/components/screenshot-section/screenshot-section";
import ExploreButton from "@/components/explore-button";

export default function Home() {

  const sections: ScreenshotSectionProps[] = [
    {
      header: "Visualization",
      title: "Visualization at the Core",
      desc: "Workout Notepad is built from the ground up as a data visualization engine. Our app is simply an easy and efficient way to input information for us to visualize for you.",
      images: [
        { src: "/screenshots/device/8-insights-home.webp", alt: "Insights Home" },
      ],
      items: [
        "Automatic Workout Insights",
        "Exercise Specific Overviews",
        "Dashboards by Category/Type/+More",
        "Custom Visualization Creation",
      ],
      extra: < ExploreButton title="Learn more about visualization" href="/features/visualization" />
    },
    {
      header: "workouts",
      title: "Workout Templates",
      desc: "Explore the large catalogue of online workout templates crafted by experts in the field to help you achieve your goals. We have templates for everyone.",
      images: [{ src: "/screenshots/device/7-discover-home.webp", alt: "Workout Templates" }],
      items: [
        "Templates for Every Type of Lifter",
        "Saveable and Editable",
        "Personal Template Collections",
      ],
      extra: < ExploreButton title="Explore templates" href="/templates" />
    },
    {
      header: "exercises",
      title: "Expandable Exercise Bank",
      desc: "We give you a robust set of default exercises with the ability to add your own. Complete with levels, images, and custom attributes to fit what you need.",
      images: [
        { src: "/screenshots/device/5-exercise-home.webp", alt: "Exercise Home" },
      ],
      items: [
        "5+ Different Types",
        "Custom Categories and Types",
        "Super-Set Support",
        "Image and Video Uploading",
      ],
      extra: < ExploreButton title="Learn more about exercises" href="/features/exercises" />
    },
  ]
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
            <div className="center pt-4 md:pt-10">
              <div className="space-y-2 md:space-y-0 md:flex md:space-x-4">
                <div className=""><ButtonStoreGoogle /></div>
                <div className=""><ButtonStoreApple /></div>
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
      <div className="bg-background border-t">
        <div className="my-16 md:my-32 space-y-16 md:space-y-32">
          <div className="center">
            <div className="mx-auto space-y-32">
              {sections.map((item, i) => <ScreenshotSection
                key={`screenshot-section-${i}`}
                header={item.header}
                title={item.title}
                desc={item.desc}
                images={item.images}
                items={item.items}
                extra={item.extra}
                reverse={i % 2 == 1}
              />)}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
}
