import Auth from "@/Pages/Prototype/Auth";
import Subcribers from "@/Components/Subcribers";
import { Head } from "@inertiajs/react";
import { router } from "@inertiajs/react";

export default function Subcribe({ auth, data, userSubscription }) {
    const selectSubcriber = (id) => {
        router.post(
            route("user.dashboardsubcriberuser", { subcriptionPlan: id }),
            {}, 
            {
                only: ["userSubscription"],
                onSuccess: (page) => {
                    const subscription = page.props.userSubscription;
                    if (subscription && subscription.snap_token) {
                        onSnapMidtrans(subscription.snap_token);
                    } else {
                        console.error("Snap token is missing");
                    }
                },
            }
        );
    };

    const onSnapMidtrans = (snapToken) => {
        if (typeof snap === "undefined") {
            console.error("Midtrans Snap.js is not loaded");
            return;
        }

        snap.pay(snapToken, {
            onSuccess: function (result) {
                console.log("Payment Success:", result);
            },
            onPending: function (result) {
                console.log("Payment Pending:", result);
            },
            onError: function (result) {
                console.log("Payment Error:", result);
            },
            onClose: function () {
                console.log("Payment popup closed");
            },
        });
    };

    return (
        <Auth coba={auth}>
            <Head title="Subcriber">
                <script
                    src="https://app.sandbox.midtrans.com/snap/snap.js"
                    data-client-key="SB-Mid-client-QTIJSF4sLZA42vK7"
                ></script>
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
                            key={data.id} 
                            name={data.name}
                            price={data.price}
                            duractions={data.active_periode}
                            features={JSON.parse(data.features)}
                            isPremium={data.name === "Premium"}
                            onSubscribers={() => selectSubcriber(data.id)}
                        />
                    ))}
                </div>
            </div>
        </Auth>
    );
}
