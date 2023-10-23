import Recents from "@/components/Recents"
import Acitvities from "@/components/Acitvities"
import Enroll from "@/components/Enroll"
import Guiding from "@/components/Guiding"
import Hero from "@/components/Hero"
import WhyChoose from "@/components/WhyChoose"
import Testimonial from "@/components/Testimonial"
import Teachers from "@/components/Teachers"
import Accordion from "@/components/Accordian"
import Discover from "@/components/Discover"
import Enrollment from "@/components/Enrollment"
import Circle from "@/components/Circle"
import Tests from "@/components/Event"
import Classes from "@/components/Classes"
export default function Home() {
  return (
   <div>  
    <Hero></Hero>
    <WhyChoose></WhyChoose>
    <Enroll></Enroll>
    <Guiding></Guiding>
    <Acitvities></Acitvities>
    <Accordion></Accordion>
     <Classes></Classes>
    <Testimonial></Testimonial>
    <Circle></Circle>
    <Teachers></Teachers>
    <Tests></Tests>
    <Recents></Recents>
    <Discover></Discover>
    <Enrollment></Enrollment>
   </div>
  )
}
