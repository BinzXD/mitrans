import { Link } from "@inertiajs/react";
import { useState, useRef } from "react";

export default function TopBar({name}) {
    const [dropdownOpen, setDropdownOpen] = useState(true);
    const dropdownTarget = useRef(null);

    const triggerDropdown = () => {
        if (dropdownOpen) {
            dropdownTarget.current.classList.remove("hidden");
        } else {
            dropdownTarget.current.classList.add("hidden");
        }
        setDropdownOpen(!dropdownOpen);
    };

    return (
        <div className="flex justify-between items-center">
            <input
                type="text"
                className="top-search"
                placeholder="Search movie, cast, genre"
            />
            <div className="flex items-center gap-4">
                <span className="text-black text-sm font-medium">
                    Welcome, {name}
                </span>
                <div className="collapsible-dropdown flex flex-col gap-2 relative">
                    <a
                        href="#!"
                        onClick={triggerDropdown}
                        className="outline outline-2 outline-gray-2 p-[5px] rounded-full w-[60px] dropdown-button"
                    >
                        <img
                            src="/images/avatar.png"
                            className="rounded-full object-cover w-full"
                            alt=""
                        />
                    </a>
                    <div
                        ref={dropdownTarget}
                        className="bg-white rounded-2xl text-black font-medium flex flex-col gap-1 absolute z-[999] right-0 top-[80px] min-w-[180px] hidden overflow-hidden"
                    >
                        <Link href={route('user.dashboarddasuser', { user: name })}  className="transition-all hover:bg-sky-100 p-4">
                            Dashboard
                        </Link>
                        <a href="" className="transition-all hover:bg-sky-100 p-4">
                            Settings
                        </a>
                        <Link href={route('logout')} className="transition-all hover:bg-sky-100 p-4" method="post" >
                            Sign Out
                        </Link>
                    </div>
                </div>
            </div>
            <style jsx="true">{`
                .top-search {
                    background-image: url("/icons/ic_search.svg");
                }
            `}</style>
        </div>
    );
}
