import Marquee from "./Marquee";
import ScrollToTop from "./ScrollToTop";
import Copyright from "./Copyright";
import SocialsFooter from "./SocialsFooter";

export default function Footer() {
  return (
    <footer>
      <div className='mx-5 flex justify-between items-center
        sm:mx-10
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
