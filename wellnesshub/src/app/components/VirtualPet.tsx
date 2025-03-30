import Image from "next/image";
export default function VirtualPet() {
    return (
        <div className="">
            <Image className="mt-[-20] float-right"
            src="/images/cat2.png"
            alt="Bo the virtual cat pet"
            width={300}
            height={300}
            />
        </div>
    )
}