import ReactPlayer from "react-player";
import { Link } from "@inertiajs/react";
import { Head } from "@inertiajs/react";


export default function Details({data, auth}) {
    return ( 
        <>
        <Head title="Dashboard">
                <link
                    rel="stylesheet"
                    href="https://unpkg.com/flickity@2/dist/flickity.min.css"
                />
            </Head>
        <section className="mx-auto w-screen h-screen relative watching-page font-poppins" id="stream">
            <div className="pt-[100px] w-full h-full flex justify-center items-center">
                <ReactPlayer
                    url={data.video_url}
                    controls
                    playing={true}
                    width="100%"
                    height="100%"
                />
            </div>

            <div className="absolute top-5 left-5 z-20">
                <Link href={route('user.dashboarddasuser',{ user: auth.user.name })}>
                    <img src="/icons/ic_arrow-left.svg" className="transition-all btn-back w-[46px]" alt="stream" />
                </Link>
            </div>

            <div className="absolute title-video top-7 left-1/2 -translate-x-1/2 max-w-[310px] md:max-w-[620px] text-center">
                <span className="font-medium text-2xl transition-all text-black drop-shadow-md select-none">
                    Film {data.name}
                </span>
            </div>
        </section>
    </>
    );
}
