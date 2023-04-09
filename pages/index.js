import Hero from "@/components/Hero";
import Nav from "@/components/Nav";
import Head from "next/head";
import InfoBoxes from "@/components/InfoBoxes";
import Team from "@/components/Team";
import Footer from "@/components/Footer";
import ProjectSection from "@/components/ProjectSection";
import Collabrations from "@/components/Collabrations";
import Testimonial from "@/components/Testimonial";
import FAQ from "@/components/FAQ";

export default function Home() {
  return (
    <>
      <Head>
        <title>GDSC FET JU</title>
        <meta
          name="description"
          content="At Google Developer Student Clubs FET- Jain University we as a university based community functioning with an aim to promote peer-to-peer learning with an active usage of tools and technologies offered by Google. Here in the community, we learn and further our developers skills with an intent to abide by the idea of putting knowledge to practical use."
        />
        <meta name="robots" content="index, follow" />

        <meta property="og:image" content="/gdsc.png" />
        <meta
          name="keywords"
          content="gdscfetju,gdsc fetju, fetju, gdsc, Google Developer Students Clubs - FETJU, jain university, jain"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://gdscju.tech/" />
        <meta
          name="google-site-verification"
          content="8ejDHRsgK4hPVX8eaStpyxdTQwIEF9H72phicCSwxwE"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="shortcut icon" href="gdsc.png" type="image/x-icon" />
      </Head>
      <main>
        {/* NavBar */}
        <Nav />
        {/* Hero Section */}
        <Hero />
        {/* Info about events / students */}
        <InfoBoxes />
        {/* Our Team */}
        <Team />
        {/* Past Events */}
        {/* Testimonials */}
        <Testimonial />
        {/* Collaborations */}
        <Collabrations />
        {/* Idea discussion */}
        <ProjectSection />
        {/* FAQ */}
        <FAQ />
        {/* Footer Section */}
        <Footer />
      </main>
    </>
  );
}
