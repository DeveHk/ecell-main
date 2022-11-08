import AboutUs from "@/components/AboutUs";
import ContactUs from "@/components/ContactUs";
import Events from "@/components/Events";
import Footer from "@/components/Footer";
import Sponsors from "@/components/Sponsors";
import OurBlogs from "@/components/OurBlogs";
import { getPosts } from "@/lib/posts";

export default function Home({ posts }) {
  return (
    <div className="bg-white">
      <AboutUs />
      <OurBlogs posts={posts} />
      <Events />
      <Sponsors/>
      <ContactUs />
      <Footer />
    </div>
  );
}

export async function getStaticProps() {
  return {
    props: {
      posts: getPosts().slice(0, 3)
    }
  }
}