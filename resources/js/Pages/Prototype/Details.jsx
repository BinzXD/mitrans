import ReactPlayer from "react-player";

export default function Details() {
    return ( 
        <section className="mx-auto w-screen h-screen relative watching-page font-poppins" id="stream">
            <div className="pt-[100px] w-full h-full flex justify-center items-center">
                <ReactPlayer
                    url="https://youtu.be/ZZKcJskRALY?si=ZjWFNQBH2zg8lBUD"
                    controls
                    playing={true}
                    width="100%"
                    height="100%"
                />
            </div>

            <div className="absolute top-5 left-5 z-20">
                <a href="/">
                    <img src="/icons/ic_arrow-left.svg" className="transition-all btn-back w-[46px]" alt="stream" />
                </a>
            </div>

            <div className="absolute title-video top-7 left-1/2 -translate-x-1/2 max-w-[310px] md:max-w-[620px] text-center">
                <span className="font-medium text-2xl transition-all text-black drop-shadow-md select-none">
                    Details Screen Part Final
                </span>
            </div>
        </section>
    );
}
