import Image from "next/image";

export default function Home() {
    return (
        <div className="px-12">
            <div className="relative container mx-auto pt-[75px]">
                <img className=" absolute top-0 pointer-events-none hidden lg:block" src="./HeroImg.svg" />
                <div className=" w-full lg:w-1/2">
                    <h2 className={" text-xl font-normal text-gray-400 border-l-[1px] ml-[4px] px-3 mb-[60px] border-gray-900 "}>
                        At Bharat QuizTaker, we believe that learning should be an exciting adventure for kids! Our platform is designed to make education engaging, interactive, and, most importantly, fun for children of all ages. Whether they are exploring new concepts, reinforcing classroom learning, or just having a good time, our website offers a wide range of educational activities.
                    </h2>
                    <div class="grid grid-cols-2 gap-4">
                        <div class="bg-blue-500 p-4 font-semibold">
                        Diverse Question Types
                        </div>
                        <div class="bg-green-500 p-4 font-semibold">
                        Subject Variety
                        </div>
                        <div class="bg-red-500 p-4 font-semibold">
                        User-Friendly Interface
                        </div>
                        <div class="bg-yellow-500 p-4 font-semibold">
                        Results for analysis
                        </div>
                    </div>

                    <div className="mt-16 flex items-center gap-8">
                        <a href="/" className=" text-primary text-xl font-semibold">
                            ◀ back
                        </a>
                    </div>

                </div>
            </div>
        </div>
    );
}
