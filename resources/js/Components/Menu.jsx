import { Link } from "@inertiajs/react";

export default function Menu({ link, icon, isActive, text, method = "get" }) {
    return (
        <Link
            href={link}
            className={`side-link ${isActive && "active"}`}
            method={method}
            as="button"
        >
            {icon}
            {text}
        </Link>
    );
}
