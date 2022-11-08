import aboutUsImage from "../public/images/about-us.png";
import Image from "next/image";

const AboutUs = () => {
  return (
    <section className="about-us-container p-24 flex lg:flex-row sm:flex-col">
      <div className="">
      <h1 className="font-bold text-center text-5xl mb-2">About Us</h1>
      <div className="flex gap-6 items-center">
          <div className="text-xl max-w-4xl">
              <p>One might think that the capabilities of an entrepreneurship cell is limited to gathering accolades in competitions, but here at <span className="font-bold">eCell NSUT</span>, we take it as a challenge to propel our ideas to greater heights. We take initiatives to develop and adapt ourselves into the changing popular market culture, while having a strong hold over our core and foundational values, irrespective of our predicament.</p>
              <p>eCell NSUT has been successful in creating a space for itself in the entrepreneurial circuit of India and cross borders as well. As one of the most active and cross-functional entrepreneurship entities of Delhi, our mission is to work on different projects and start-ups while becoming the most approachable eCell.</p>
          </div>
      </div>
       </div>
      <Image src={aboutUsImage} alt="About Us" className="" />
    </section>
  )
}

export default AboutUs