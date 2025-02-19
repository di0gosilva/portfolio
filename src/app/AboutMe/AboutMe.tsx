"use client"
import FadeIn from "../FadeIn";
import SectionTitle from "../SectionTitle";
import Description from "./Description";
import ProfileImage from "./ProfileImage";
import TechnologiesFirstRow from "./TechnologiesFirstRow";
import TechnologiesSecondRow from "./TechnologiesSecondRow";
import Title from "./Title";

export default function AboutMe() {
  return (
    <>
      <SectionTitle title="Sobre mim"/>
      <FadeIn>
        <Title />
      </FadeIn>
      <FadeIn>
        <ProfileImage />
      </FadeIn>
      <FadeIn>
        <Description />
      </FadeIn>
      <FadeIn>
        <TechnologiesFirstRow />
        <TechnologiesSecondRow />
      </FadeIn>
    </>
  )
}
