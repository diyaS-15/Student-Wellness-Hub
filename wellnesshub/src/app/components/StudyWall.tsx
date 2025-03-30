import Image from "next/image";
export default function StudyWall() {
    return (
        <div>
        <h2 className="text-4xl">study wall</h2>
        <div>
            <iframe
            src="https://flocus.com/retro-anime-clock/"
            allow="encrypted-media"
            className="rounded-lg w-full max-w-[400px] h-auto ml-2 mt-3"
        ></iframe>
        </div>
        <div className="">
            <Image className="float-left"
                    src="/images/cat8.png"
                    alt="wave cat"
                    width={400}
                    height={100}
            />
        </div>
        <h3 className="text-3xl">coming soon!</h3>
        </div>
    )
}