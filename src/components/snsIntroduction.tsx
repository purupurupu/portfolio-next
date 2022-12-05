import styles from "../styles/Home.module.css";

export default function SnsIntroduction() {
  return (
    <div className="flex justify-center mt-12">
      <img
        className="bg-white w-12 h-12 rounded-full"
        src="/icons/github-mark.svg"
        alt=""
      />
      <img
        className="bg-white w-12 h-12 ml-6 rounded-full"
        src="/icons/linkedin-30.svg"
        alt=""
      />
      <img
        className="bg-white w-12 h-12 ml-6 rounded-full"
        src="/icons/leetcode.png"
        alt=""
      />
    </div>
  );
}
