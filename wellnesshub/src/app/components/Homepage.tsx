import StudyWall from "./StudyWall";
import ToDo from "./ToDo";


export default function Homepage() {
    return (
        <div className="w-full h-full text-center">
            <h1 className="text-3xl m-10">Student Wellness Hub</h1>
            <div className="grid grid-cols-3 gap-4 p-5"> 
                <div className="bg-[#ede9e1] rounded-lg row-span-4">
                    <StudyWall/>
                </div>
                <div className="row-span-2">
                    <ToDo/>
                </div>
                <div className="bg-[#ede9e1] rounded-lg row-span-1">Self Care</div>
                <div className="bg-[#ede9e1] rounded-lg row-span-1">Mood</div>
                <div className="bg-[#ede9e1] rounded-lg row-span-2">Spotify</div>
                <div className="bg-[#ede9e1] rounded-lg row-span-2">Pet image</div>
            </div>
        </div>
    )
}