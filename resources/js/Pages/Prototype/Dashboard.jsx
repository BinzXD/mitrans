import Auth from "./Auth";
import Flickity from "react-flickity-component";
import { Head } from "@inertiajs/react";

export default function Dashboard() {
    const flickityOptions = {
        cellAlign: "left",
        contain: true,
        groupCells: 1,
        wrapAround: false,
        pageDots: false,
        prevNextButtons: false,
        draggable: ">1",
    };
    return (
        <Auth>
            <Head>
                <link
                    rel="stylesheet"
                    href="https://unpkg.com/flickity@2/dist/flickity.min.css"
                />
            </Head>
            <div>
                <div className="font-semibold text-[22px] text-black mb-4">
                    Featured Movies
                </div>
                <Flickity
                    className="gap-[30px] __scroll-selector"
                    options={flickityOptions}
                >
                    {[1, 2, 3].map((i) => (
                        <div
                            key={i}
                            className="relative overflow-hidden group mr-[30px]"
                        >
                            <img
                                src={`/images/featured-${i}.png`}
                                className="object-cover rounded-[30px] w-[520px] h-[340px]"
                                alt=""
                            />

                            <div className="rating absolute top-0 left-0">
                                <div className="p-[30px] flex items-center gap-1">
                                    <img src="/icons/ic_star.svg" alt="" />
                                    <span className="text-sm font-medium text-white mt-1">
                                        {4.5 + (i % 2) * 0.2}/5.0
                                    </span>
                                </div>
                            </div>

                            <div
                                className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black rounded-bl-[28px]
                                    rounded-br-[28px] flex justify-between items-center px-7 h-[130px]"
                            >
                                <div>
                                    <div className="font-medium text-[22px] text-white">
                                        {i === 1
                                            ? "The Batman in Love"
                                            : i === 2
                                            ? "Despicable Me 2"
                                            : "Train Dragons II"}
                                    </div>
                                    <p className="mb-0 text-white text-sm font-light">
                                        {i === 1
                                            ? "Action • Horror"
                                            : i === 2
                                            ? "Action • Adventure"
                                            : "Love • Adventure"}
                                    </p>
                                </div>
                                <div className="translate-x-[100px] group-hover:translate-x-0 transition ease-in-out duration-500">
                                    <img
                                        src="/icons/ic_play.svg"
                                        width="50"
                                        alt=""
                                    />
                                </div>
                            </div>
                            <a
                                href="watching.html"
                                className="inset-0 absolute z-50"
                            ></a>
                        </div>
                    ))}
                </Flickity>
            </div>

            <div className="mt-5">
                    <div class="font-semibold text-[22px] text-black mb-4">Browse</div>
                    <Flickity   className="gap-[30px] __scroll-selector"
                    options={flickityOptions}>
                         {[1, 2, 3, 4, 5].map((i) => (
                       <div key={i} className="absolute group overflow-hidden mr-[30px]">
                       <img src={`/images/browse-${i}.png`}
                           className="object-cover rounded-[30px] h-[340px] w-[250px]" alt=""/>
                       <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black rounded-bl-[28px] rounded-br-[28px]">
                           <div className="px-7 pb-7">
                               <div className="font-medium text-xl text-white">{i === 1
                                            ? "The Batman in Love"
                                            : i === 2
                                            ? "Despicable Me 2"
                                            : "Train Dragons II"}</div>
                               <p className="mb-0 text-gray-300 text-base mt-[10px]">Genre {i}</p>
                           </div>
                       </div>
                       <div className="absolute top-1/2 left-1/2 -translate-y-[500px] group-hover:-translate-y-1/2 -translate-x-1/2 z-20 transition ease-in-out duration-500">
                           <img src="/icons/ic_play.svg" width="50" alt=""/>
                       </div>
                       <a href="watching.html" className="inset-0 absolute z-50"></a>
                   </div>

                        
                    ))}
                       
                    </Flickity>
                </div>
        </Auth>
    );
}
