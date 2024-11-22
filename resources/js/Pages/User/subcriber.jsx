import Auth from "@/Pages/Prototype/Auth";
import Subcribers from "@/Components/Subcribers";
import { Head } from "@inertiajs/react";
import { router } from '@inertiajs/react'

export default function Subcribe({ auth, data, }) {
    const selectSubcriber = id => {
        router.post(route("user.dashboardsubcriberuser", { subcriptionPlan: id  }));
    }
    return (
        <Auth coba={auth}>
              <Head title="Subcriber">
                <link
                    rel="stylesheet"
                    href="https://unpkg.com/flickity@2/dist/flickity.min.css"
                />
            </Head>
            <div className="py-20 flex flex-col items-center">
                <div className="text-black font-semibold text-[26px] mb-3">
                    Pricing for Everyone
                </div>
                <p className="text-base text-gray-1 leading-7 max-w-[302px] text-center">
                    Invest your little money to get a whole new experiences from
                    movies.
                </p>

                <div className="flex justify-center gap-10 mt-[70px]">
                    {data.map((data) => (
                        <Subcribers
                            name={data.name}
                            price={data.price}
                            duractions={data.active_periode}
                            features={JSON.parse(data.features)}
                            isPremium={data.name === 'Premium'}
                            onSubscribers={() => selectSubcriber(data.id)}
                        />
                    ))}
                </div>
            </div>
        </Auth>
    );
}
