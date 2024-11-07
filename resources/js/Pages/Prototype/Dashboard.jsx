import Auth from "./Auth";
import Flickity from "react-flickity-component";
import { Head } from "@inertiajs/react";
import FeaturMovie from "@/Components/FeaturMovie";
import Browser from "@/Components/Browser";

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
            <Head title="Dashboard">
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
                        <FeaturMovie key={i}
                        slug="batman-vs-superman"
                        name={`The Batman vs Superman`}
                        thumbnail="/images/featured-1.png"
                        category="actions"
                        rating={3}/>
                       
                    ))}
                </Flickity>
            </div>

            <div className="mt-5">
                    <div class="font-semibold text-[22px] text-black mb-4">Browse</div>
                    <Flickity   className="gap-[30px] __scroll-selector"
                    options={flickityOptions}>
                         {[1, 2, 3, 4, 5].map((i) => (
                            <Browser key={i} slug="the-minions"
                            name={`The Minions 2`}
                            category="Cartoon"
                            thumbnail="/images/browse-1.png"
                            />
                        
                    ))}
                       
                    </Flickity>
                </div>
        </Auth>
    );
}
