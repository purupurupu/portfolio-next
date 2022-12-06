import Head from "next/head";
import Image from "next/image";
import NavBar from "@/components/navBar";
// import NameAndImage from "../components/nameAndImage";
// import TopContents from "../components/topContents";
import Footer from "@/components/footer";
import styles from "@/styles/Home.module.css";
import BlogContents from "./blogContents";
// import { user } from "../utils/commonUtil";
import SnsIntroduction from "@/components/snsIntroduction";

export default function Blog() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Blog</title>
        <meta name="description" content="Shintaro Yamamoto's portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <main>
        <BlogContents />
        <SnsIntroduction />
      </main>
      <Footer />
    </div>
  );
}
