import AboutUs from "@/components/AboutUs";
import ContactUs from "@/components/ContactUs";
import Events from "@/components/Events";
import Footer from "@/components/Footer";
import Sponsors from "@/components/Sponsors";
import OurBlogs from "@/components/OurBlogs";
import Navbar from "@/components/navbar/Navbar";
import Head from "next/head";
import { getPosts } from "@/lib/posts";
import Header from "@/components/Header/Header";
import OurTeam from "@/components/OurTeam";

export default function Home({ posts }) {
  return (
    <div className="bg-white overflow-hidden relative">
      <Head>
      <link
      rel="stylesheet"
      href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css"
      integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p"
      crossOrigin="anonymous"
    />
      </Head>
      <Navbar/>
      <Header/>
      <Sponsors/>
      <AboutUs />
      <OurBlogs posts={posts} />
      <OurTeam/>
      <Events />
      
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