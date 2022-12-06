import styles from "../styles/Home.module.css";

export default function SnsIntroduction() {
  return (
    <div className="flex justify-center mt-12">
      <a
        href="https://github.com/purupurupu"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          className="bg-white w-12 h-12 rounded-full"
          src="/icons/github-mark.svg"
          alt=""
        />
      </a>
      <a
        href="https://www.linkedin.com/in/shintaro-yamamoto-8b8641257/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          className="bg-white w-12 h-12 ml-6 rounded-full"
          src="/icons/linkedin-30.svg"
          alt=""
        />
      </a>
      <a
        href="https://leetcode.com/purupurupu/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          className="bg-white w-12 h-12 ml-6 rounded-full"
          src="/icons/leetcode.png"
          alt=""
        />
      </a>
    </div>
  );
}
