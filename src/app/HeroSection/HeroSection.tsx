import Socials from "./Socials";
import Text from "./Text";
import Title from "./Title";
import ScrollIndicator from "./ScrollIndicator";

export default function HeroSection() {
  return (
    <>
      <Socials />
      <Title />
      <Text />
      <section className='mt-16 flex justify-center items-center mb-3'>
        <ScrollIndicator />
      </section>
    </>
  )
}
