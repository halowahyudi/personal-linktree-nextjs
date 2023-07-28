import Head from "next/head";
import Image from "next/image";
import { Roboto_Mono } from "@next/font/google";
import Link from "next/link";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaTiktok,
  FaGithub,
} from "react-icons/fa";

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
  favIcon: "https://www.wahyudi.dev/fav.png",
  link: "https://link.wahyudi.dev",
};

const socialMedia = {
  github: "https://www.github.com/halowahyudi",
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
        <link rel="icon" href={config.favIcon} />
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
            className="mx-auto border rounded-full w-44"
          />
          <h1 className="mt-5 text-3xl font-bold">Wahyudi</h1>
          <h2 className="mt-3 tracking-tighter">Web Developer</h2>
        </section>

        <section className="mt-3 uppercase">
          <LinkTree link="https://wahyudi.dev" title="Personal Web" />
          <LinkTree
            link="https://losaritech.biz.id"
            title="Digital Solutions"
          />
          <LinkTree
            link="mailto:business@wahyudi.dev"
            title="Business e-mail"
          />
        </section>

        <section className="flex items-center justify-center gap-3 mt-8 mb-10">
          <Link href={socialMedia.instagram}>
            <div className="p-2 rounded-md bg-slate-800">
              <FaInstagram className="text-3xl" />
            </div>
          </Link>
          <Link href={socialMedia.github}>
            <div className="p-2 rounded-md bg-slate-800">
              <FaGithub className="text-3xl" />
            </div>
          </Link>
          <Link href={socialMedia.facebook}>
            <div className="p-2 rounded-md bg-slate-800">
              <FaFacebook className="text-3xl" />
            </div>
          </Link>
          <Link href={socialMedia.twitter}>
            <div className="p-2 rounded-md bg-slate-800">
              <FaTwitter className="text-3xl" />
            </div>
          </Link>
          <Link href={socialMedia.tiktok}>
            <div className="p-2 rounded-md bg-slate-800">
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
      <div className="flex flex-row items-center justify-center py-5 mx-4 mb-4 rounded-md bg-slate-800 hover:bg-slate-700">
        <span className="text-center text-md">{title}</span>
      </div>
    </Link>
  );
};
