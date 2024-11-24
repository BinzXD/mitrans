import Auth from "../Prototype/Auth"
import Button from "@/Components/Button"
import { Link } from "@inertiajs/react"
export default function Index({ auth }) {
    return (
        <Auth coba={auth}>
            <Link href={route('admin.dashboardmovie.create')}>
            <Button className="w-60 mb-10">
                Kocak
            </Button>
            </Link>
        </Auth>

    )
}