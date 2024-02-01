import Image from "next/image";
import styles from "./page.module.css";


export default function Home() {
  console.log(styles);
  return (
    <div className="relative container mx-auto pt-[200px]">
      <img className="absolute top-0 pointer-events-none hidden lg:block" src="./HeroImg.svg"/>
      <div>
        <h1 className="text-5xl font-semibold text-gray-800">
          Learn <br/>
          new concepts <br/>
          for each question
        </h1>
        <h2 className={" mt-16 text-xl font-normal text-gray-400 border-l-[1px] ml-[4px] py-2 px-3 border-gray-900 "}>
          We help you prepare for exams and quizes 
        </h2>
        <div className="mt-16 flex items-center gap-8">
          <a href="/questions" className=" bg-primary shadow-xl shadow-primary/50 text-white font-semibold p-4 ">
            Start Solving
          </a>
        </div>
      </div>
    </div>
  );
}
