import { useEffect } from "react";
import { Head, Link, useForm } from "@inertiajs/react";
import InputError from "@/Components/InputError";
import Input from "@/Components/Input";
import Button from "@/Components/Button";

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
    });

    useEffect(() => {
        // Reset password fields on component unmount
        return () => {
            reset("password", "password_confirmation");
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();
      
        post(route("register"));
    };

    return (
        <>
            <Head title="Sign Up" />
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
                        <form className="w-[370px]" onSubmit={submit}>
                            <div className="flex flex-col gap-6">
                                {/* Input Full Name */}
                                <div>
                                    <label className="text-base block mb-2">
                                        Full Name
                                    </label>
                                    <Input
                                        type="text"
                                        name="name"
                                        variant="primary"
                                        value={data.name}
                                        placeholder="Your Full Name"
                                        onChange={(e) =>
                                            setData("name", e.target.value)
                                        }
                                        required
                                    />
                                    <InputError
                                        message={errors.name}
                                        className="mt-2"
                                    />
                                </div>

                                {/* Input Email Address */}
                                <div>
                                    <label className="text-base block mb-2">
                                        Email Address
                                    </label>
                                    <Input
                                        type="email"
                                        name="email"
                                        variant="primary"
                                        value={data.email}
                                        placeholder="Your Email Address"
                                        onChange={(e) =>
                                            setData("email", e.target.value)
                                        }
                                        required
                                    />
                                    <InputError
                                        message={errors.email}
                                        className="mt-2"
                                    />
                                </div>

                                {/* Input Password */}
                                <div>
                                    <label className="text-base block mb-2">
                                        Password
                                    </label>
                                    <Input
                                        type="password"
                                        name="password"
                                        variant="primary"
                                        value={data.password}
                                        placeholder="Your Password"
                                        onChange={(e) =>
                                            setData("password", e.target.value)
                                        }
                                        required
                                    />
                                    <InputError
                                        message={errors.password}
                                        className="mt-2"
                                    />
                                </div>

                                {/* Input Password Confirmation */}
                                <div>
                                    <label className="text-base block mb-2">
                                        Password Confirmation
                                    </label>
                                    <Input
                                        type="password"
                                        name="password_confirmation"
                                        variant="primary"
                                        value={data.password_confirmation}
                                        placeholder="Confirm Your Password"
                                        onChange={(e) =>
                                            setData(
                                                "password_confirmation",
                                                e.target.value
                                            )
                                        }
                                        required
                                    />
                                </div>
                            </div>

                            {/* Buttons */}
                            <div className="grid space-y-[14px] mt-[30px]">
                                <Button
                                    type="submit"
                                    variant="primary"
                                    disabled={processing}
                                >
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
