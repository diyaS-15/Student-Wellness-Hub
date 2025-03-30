import Image from "next/image";
import StudyWall from "./StudyWall";
import ToDo from "./ToDo";
import SelfCare from "./SelfCareSection";
import MoodTracker from "./MoodTrackerSection"; 
import MusicHub from "./MusicHub";
import VirtualPet from "./VirtualPet";

export default function Homepage() {
    return (
        <div className="w-full h-full text-center">
            <h1 className="text-7xl m-10 font-bold tracking-widest">student wellness hub</h1>
            <div className="grid grid-cols-3 gap-4 p-5"> 
                <section className="bg-[#ede9e1] rounded-lg pt-3">
                    <StudyWall/>
                </section>
                <section className="">
                    <div className="bg-[#ede9e1] rounded-lg pb-5 mb-5">
                        <ToDo/>
                    </div>
                    <div className=" bg-[#ede9e1] rounded-lg">
                        <MusicHub/>
                    </div>
                </section>
                <section>
                    <div className="bg-[#ede9e1] rounded-lg pb-10 mb-5">
                        <SelfCare/>
                    </div>
                    <div className="bg-[#ede9e1] rounded-lg ">
                        <MoodTracker/>
                    </div>
                    <div className="">
                        <VirtualPet/>
                    </div>
                </section>
            </div>
        </div>
    )
}