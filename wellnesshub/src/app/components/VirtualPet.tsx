import Image from "next/image";
export default function VirtualPet() {
    return (
        <div>
            <h2 className="text-xl">Pet Here!</h2>
            <Image 
            src="/images/cat.png"
            alt="Bo the virtual cat pet"
            width={311}
            height={379}
            />
        </div>
    )
}