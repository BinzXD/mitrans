import Auth from "../Prototype/Auth"
import Button from "@/Components/Button"
import { Link } from "@inertiajs/react"
import FlashMessage from "@/Components/FlashMessage"
export default function Index({ auth, flash, movie }) {
    return (
        <Auth coba={auth}>
            <Link href={route('admin.dashboardmovie.create')}>
            <Button className="w-60 mb-10">
                Insert New Movie 
            </Button>
            </Link>
            <table className="table-auto w-full border-collapse border border-gray-300">
                <thead>
                    <tr className="bg-gray-200">
                        <th className="border border-gray-300 px-4 py-2">No</th>
                        <th className="border border-gray-300 px-4 py-2">Title</th>
                        <th className="border border-gray-300 px-4 py-2">Thumbnail</th>
                        <th className="border border-gray-300 px-4 py-2">Actions</th>
                    </tr>
                </thead>
                <tbody>
                   {movie.map((movies, index) => (
                        <tr key={movies.id} className="text-center">
                            <td className="border border-gray-300 px-4 py-2">{index + 1}</td>
                            <td className="border border-gray-300 px-4 py-2">{movies.name}</td>
                            <td className="border border-gray-300 px-4 py-2">
                                <img
                                    src={movies.thumbnail}
                                    alt={movies.name}
                                    className="h-12 w-12 object-cover mx-auto"
                                />
                            </td>
                            <td className="border border-gray-300 px-4 py-2">
                                <Link
                                    href={route("admin.dashboardmovie.edit", { id: movies.id })}
                                    className="text-blue-500 hover:underline"
                                >
                                    Edit
                                </Link>
                                <span> | </span>
                                <button
                                    onClick={() => handleDelete(movies.id)}
                                    className="text-red-500 hover:underline"
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </Auth>

    );
}