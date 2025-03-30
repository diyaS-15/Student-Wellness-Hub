import Image from "next/image";
export default function VirtualPet() {
    return (
        <div>
            <Image className="float-center"
            src="/images/speechbubble.png"
            alt="speech bubble background"
            width={175}
            height={200}
            />
            <Image className="float-right"
            src="/images/cat.png"
            alt="Bo the virtual cat pet"
            width={250}
            height={400}
            />
        </div>
    )
}