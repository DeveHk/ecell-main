import Layout from '@/components/blogs/Layout';

const AboutPage = () => {
  return (
    <Layout title="About DevSpace">
      <h1 className="text-5xl border-b-4 pb-5 font-bold">About</h1>

      <div className="bg-white rounded-lg px-10 py-6 mt-6 md:w-[40%]">
        <h3 className="text-2xl mb-5">eCell NSUT Blog</h3>
        <p className="mb-3">People are always curious to share their knowledge, expressing their opinion and acquiring more information. </p>
        <p className="mb-3">And if you are a budding entrepreneur then information about businesses and finance world holds most value for you.</p>
        <p className="mb-3">So, here is a reliable source for all your daily dose of knowledge. eCell bolgs are written by members of eCell NSUT. We put regular bolg about diverse topics.... </p>

        
      </div>
    </Layout>
  );
};

export default AboutPage;
