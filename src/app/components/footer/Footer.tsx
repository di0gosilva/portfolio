import Marquee from "./Marquee";
import ScrollToTop from "./ScrollToTop";
import Copyright from "./Copyright";
import { SocialsFooter } from "@/app/Socials";

export default function Footer() {
  return (
    <footer>
      <div className='mx-5 flex justify-between items-center
        sm:mx-10
        md:mx-10
        lg:mx-[3.75rem]
        xl:mx-20
        2xl:mx-[6.25rem]
      '>
        <Copyright />
        <SocialsFooter />
      </div>

      <span className='mt-3 border-b-[1px] w-full border-white absolute'></span>
      <ScrollToTop />
      <Marquee />
    </footer>
  )
}
