import Head from "next/head";
import Image from "next/image";
import { Roboto_Mono } from "@next/font/google";
import Link from "next/link";
import { FaFacebook, FaTwitter, FaInstagram, FaTiktok } from "react-icons/fa";

const roboto = Roboto_Mono({
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

const config = {
  title: "Wahyudi - Web Developer",
  description:
    "Personal Link Tree of Wahyudi as a Web Developer base in Makassar.",
  profileImage: "https://avatars.githubusercontent.com/u/102675086?v=4",
  link: "https://link.wahyudi.id",
};

const socialMedia = {
  instagram: "https://www.instagram.com/halowahyudi",
  facebook: "https://www.facebook.com/halowahyudi",
  twitter: "https://twitter.com/halowahyudi",
  tiktok: "https://tiktok.com/halowahyudi",
};

export default function Home() {
  return (
    <>
      <Head>
        <title>{config.title}</title>
        <meta name="description" content={config.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={config.link} />
        <meta property="og:title" content={config.title} />
        <meta property="og:description" content={config.description} />
        <meta property="og:image" content={config.profileImage} />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={config.link} />
        <meta property="twitter:title" content={config.title} />
        <meta property="twitter:description" content={config.description} />
        <meta property="twitter:image" content={config.profileImage} />
      </Head>
      <main className={`text-white md:max-w-md mx-auto ${roboto.className}`}>
        <section className="mt-10 text-center">
          <Image
            src={config.profileImage}
            width={220}
            height={220}
            className="rounded-full mx-auto border w-44"
          />
          <h1 className="mt-5 font-bold text-3xl">Wahyudi</h1>
          <h2 className="mt-3 tracking-tighter">Web Developer</h2>
        </section>

        <section className="uppercase mt-3">
          <LinkTree link="https://wahyudi.id" title="Personal Web" />
          <LinkTree
            link="https://losaritech.biz.id"
            title="Digital Solutions"
          />
          <LinkTree link="https://topup.monster" title="Topup Game Online" />
          <LinkTree link="https://meenikah.link" title="Undangan Digital" />
          <LinkTree link="mailto:business@wahyudi.id" title="Business e-mail" />
        </section>

        <section className="flex justify-center items-center gap-3 mt-8">
          <Link href={socialMedia.instagram}>
            <div className="p-2 bg-slate-800 rounded-md">
              <FaInstagram className="text-3xl" />
            </div>
          </Link>
          <Link href={socialMedia.facebook}>
            <div className="p-2 bg-slate-800 rounded-md">
              <FaFacebook className="text-3xl" />
            </div>
          </Link>
          <Link href={socialMedia.twitter}>
            <div className="p-2 bg-slate-800 rounded-md">
              <FaTwitter className="text-3xl" />
            </div>
          </Link>
          <Link href={socialMedia.tiktok}>
            <div className="p-2 bg-slate-800 rounded-md">
              <FaTiktok className="text-3xl" />
            </div>
          </Link>
        </section>
      </main>
    </>
  );
}

const LinkTree = (props) => {
  const { link = "#", title = "" } = props;
  return (
    <Link href={link} target="_blank" rel="noopener noreferrer">
      <div className="bg-slate-800 hover:bg-slate-700 mb-4 mx-4 py-5 rounded-md flex flex-row justify-center items-center">
        <span className="text-center text-md">{title}</span>
      </div>
    </Link>
  );
};
