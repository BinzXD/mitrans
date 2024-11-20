import Auth from "@/Pages/Prototype/Auth";
import Flickity from "react-flickity-component";
import { Head } from "@inertiajs/react";
import FeaturMovie from "@/Components/FeaturMovie";
import Browser from "@/Components/Browser";

export default function index({ features, movies, auth }) {
    const flickityOptions = {
        cellAlign: "left",
        contain: true,
        groupCells: 1,
        wrapAround: false,
        pageDots: false,
        prevNextButtons: false,
        draggable: ">1",
    };
    console.log(features);
    return (
        <Auth coba={auth}>
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
                    {features.map((features) => (
                        <FeaturMovie 
                        key={features.id}
                        slug={features.slug}
                        name={features.name}
                        thumbnail={features.thumbnail}
                        category={features.category}
                        rating={features.rating}/>
                       
                    ))}
                </Flickity>
            </div>

            <div className="mt-5">
                    <div className="font-semibold text-[22px] text-black mb-4">Browse</div>
                    <Flickity   className="gap-[30px] __scroll-selector"
                    options={flickityOptions}>
                         {movies.map((movies) => (
                            <Browser key={movies.id} slug={movies.slug}
                            name={movies.name}
                            category={movies.category}
                            thumbnail={movies.thumbnail}
                            />
                        
                    ))}
                       
                    </Flickity>
                </div>
        </Auth>
    );
}
