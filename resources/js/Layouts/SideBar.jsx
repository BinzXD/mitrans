import { Link } from "@inertiajs/react";
import SubcriberDetails from "./SubcriberDetails";
import Menu from "@/Components/Menu";
import {MainMenu, MenuOthers} from "@/Data/ListMenu";
export default function SideBar({ auth }) {
    return (
        <aside className="fixed z-50 w-[300px] h-full">
            <div className="flex flex-col p-[30px] pr-0 border-r border-gray-[#F1F1F1] overflow-y-auto h-full">
                <a href="/">
                    <img src="/images/moonton.svg" alt="" />
                </a>
                <div className="links flex flex-col mt-[60px] h-full gap-[50px]">
                    <div>
                        <div className="text-gray-1 text-sm mb-4">Menu</div>
                        {MainMenu.map((item, index) => (
                            <Menu
                                key={`$(index)-${item.text}`}
                                icon={item.icon}
                                text={item.text}
                                link={item.link ? route(item.link, { user: auth.user.name }) : null}
                                isActive={item.link && route().current(item.link)}
                            />
                        ))}
                    </div>

                    <div>
                        <div className="text-gray-1 side-link mb-4">Others</div>
                        {MenuOthers.map((item, index) => (
                            <Menu
                                key={`$(index)-${item.text}`}
                                icon={item.icon}
                                text={item.text}
                                method={item.method}
                                link={item.link ? route(item.link, { user: auth.user.name }) : null}
                                isActive={item.link && route().current(item.link)}
                            />
                        ))}
                    </div>

                    {auth.activePlan && (
                        <SubcriberDetails
                            name={auth.activePlan.name}
                            ispremium={auth.activePlan.name === "Premium"}
                            activeDay={auth.activePlan.activeDay}
                            remainingActive={auth.activePlan.remainingActive}
                        />
                    )}
                </div>
            </div>
        </aside>
    );
}
