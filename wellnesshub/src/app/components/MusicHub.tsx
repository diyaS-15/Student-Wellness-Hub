import Image from "next/image";
export default function MusicHub() {
    return(
        <div>
        <h2 className="text-4xl">music hub</h2>
        <div className="flex relative justify-center mt-4">
        <iframe
        src="https://open.spotify.com/embed/playlist/37i9dQZF1DX8Uebhn9wzrS?utm_source=generator"
        allow="encrypted-media"
        className="rounded-lg w-full h-auto mr-4 ml-4"
      ></iframe>
        </div>
    </div>
    )
}