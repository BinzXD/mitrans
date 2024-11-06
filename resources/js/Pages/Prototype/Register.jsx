import { Link, Head } from "@inertiajs/react";
import Input from "@/Components/Input";
import Button from "@/Components/Button";

export default function Register() {
    return (
        <>
            <Head title="Sign UP" />
            <div className="mx-auto max-w-screen min-h-screen bg-black text-white md:px-10 px-3">
                <div className="fixed top-[-50px] hidden lg:block">
                    <img
                        src="/images/signup-image.png"
                        className="hidden laptopLg:block laptopLg:max-w-[450px] laptopXl:max-w-[640px]"
                        alt=""
                    />
                </div>
                <div className="py-24 flex laptopLg:ml-[680px] laptopXl:ml-[870px]">
                    <div>
                        <img src="/images/moonton-white.svg" alt="" />
                        <div className="my-[70px]">
                            <div className="font-semibold text-[26px] mb-3">
                                Sign Up
                            </div>
                            <p className="text-base text-[#767676] leading-7">
                                Explore our new movies and get <br />
                                the better insight for your life
                            </p>
                        </div>
                        <form className="w-[370px]">
                            <div className="flex flex-col gap-6">
                                <div>
                                    <label className="text-base block mb-2">
                                        Full Name
                                    </label>
                                    <Input
                                        type="text"
                                        name="Username"
                                        placeholder="Your Full name"
                                        variant="primary"
                                        required={true}
                                    />
                                </div>
                                <div>
                                    <label className="text-base block mb-2">
                                        Email Address
                                    </label>
                                    <Input
                                        type="email"
                                        name="email"
                                        placeholder="Your Email Address"
                                        variant="primary"
                                        required={true}
                                    />
                                </div>
                                <div>
                                    <label className="text-base block mb-2">
                                        Password
                                    </label>
                                    <Input
                                        type="password"
                                        name="password"
                                        placeholder="Your Password"
                                        variant="primary"
                                        required={true}
                                    />
                                </div>
                            </div>
                            <div className="grid space-y-[14px] mt-[30px]">
                                <Button type="button" variant="primary">
                                    <span className="text-base font-semibold">
                                        Sign Up
                                    </span>
                                </Button>
                                <Link href="/prototype/login">
                                    <Button
                                        type="button"
                                        variant="light-outline"
                                    >
                                        <span className="text-base text-white">
                                            Sign In to My Account
                                        </span>
                                    </Button>
                                </Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}
