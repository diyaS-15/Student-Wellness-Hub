import StudyWall from "./StudyWall";
import ToDo from "./ToDo";
import SelfCare from "./SelfCareSection";
import MoodTracker from "./MoodTrackerSection"; 
import VirtualPet from "./VirtualPet";

export default function Homepage() {
    return (
        <div className="w-full h-full text-center">
            <h1 className="text-7xl m-10 font-bold tracking-widest">student wellness hub</h1>
            <div className="grid grid-cols-3 gap-4 p-5"> 
                <div className="bg-[#ede9e1] rounded-lg row-span-4">
                    <StudyWall/>
                </div>
                <div className="bg-[#ede9e1] rounded-lg row-span-2">
                    <ToDo/>
                </div>
                <div className="bg-[#ede9e1] rounded-lg row-span-1">
                    <SelfCare/>
                </div>
                <div className="bg-[#ede9e1] rounded-lg row-span-1">
                    <MoodTracker/>
                </div>
                <div className="text-4xl bg-[#ede9e1] rounded-lg row-span-2">music hub</div>
                <div className="row-span-2">
                    <VirtualPet/>
                </div>
            </div>
        </div>
    )
}