import Image from "next/image";
import Post from "./blogs/Post";
import waveImg from "../public/images/wave.svg"

const OurBlogs = ({ posts }) => {
	return (
		<>
			<div className="translate-y-2 relative">
				<Image src={waveImg} alt="wave" />
			</div>
			<section className="px-24 py-12 pt-0 relative bg-primary">
				<h2 className='text-center text-4xl font-bold mb-8 text-white'>Our Blogs</h2>
				<div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 ">
					{
						posts.map((post, index) => (
							<Post key={index} post={post} />
						))
					}
				</div>
			</section>
			<Image src={waveImg} alt="wave" className="rotate-180 -translate-y-2 w-screen" />
		</>
	)
}

export default OurBlogs;