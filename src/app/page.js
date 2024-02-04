import Image from "next/image";
import styles from "./page.module.css";


export default function Home() {
  console.log(styles);
  return (
    <div className="px-12">
      <div className="relative container mx-auto pt-[100px]">
        <img className="absolute top-0 pointer-events-none hidden lg:block" src="./HeroImg.svg"/>
        <div>
          <h1 className="text-5xl font-semibold text-gray-800">
            Learn <br/>
            new concepts <br/>
            for each question
          </h1>
          <h2 className={" mt-16 text-xl font-normal text-gray-400 border-l-[1px] ml-[4px] py-2 px-3 border-gray-900 w-full lg:w-1/2"}>
            We help you prepare for exams and quizes <br/>
            <p className="text-sm text-gray-800 text-wrap">Developed under the guidance of Shri Bhavesh Mishra IAS & Shri Uma Shankar Prasad IAS</p>
          </h2>
          <div className="mt-16 flex items-center gap-8">
            <a href="/questions" className=" bg-primary shadow-xl shadow-primary/50 text-white font-semibold p-4 ">
              Start Solving
            </a>
            <a href="/about" className=" text-primary font-normal">
              ▼ know more
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
