import Auth from "@/Pages/Prototype/Auth";
import Button from "@/Components/Button";
import Input from "@/Components/Input";
import Checkbox from "@/Components/Checkbox";
import { Link, Head, useForm } from "@inertiajs/react";
import { useEffect } from "react";

export default function Created({ auth }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
        category: "",
        video_url: "",
        thumbnail: "",
        rating: "",
        is_featured: 0,
    });

    useEffect(() => {
        return () => {
            reset("password");
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();
        post(route("admin.dashboardmovie.store"));
    };
    return (
        <Auth coba={auth}>
            <h1 className="text-2xl text-center">Created Movie</h1>
            <hr className="mb-5" />
            <form onSubmit={submit}>
                {/* Movie Name */}
                <label htmlFor="name" className="text-base block my-2">
                    Movie Name
                </label>
                <Input
                    type="text"
                    name="name"
                    placeholder="Enter movie name"
                    variant="primary-outline"
                    value={data.name}
                    onChange={(e) => setData("name", e.target.value)}
                    isError={errors.name}
                />

                {/* Category */}
                <label htmlFor="category" className="text-base block my-2">
                    Category Name
                </label>
                <Input
                    type="text"
                    name="category"
                    placeholder="Enter category name"
                    variant="primary-outline"
                    value={data.category}
                    onChange={(e) => setData("category", e.target.value)}
                    isError={errors.category}
                />

                {/* Video URL */}
                <label htmlFor="video_url" className="text-base block my-2">
                    Video URL
                </label>
                <Input
                    type="text"
                    name="video_url"
                    placeholder="Enter video URL"
                    variant="primary-outline"
                    value={data.video_url}
                    onChange={(e) => setData("video_url", e.target.value)}
                    isError={errors.video_url}
                />

                {/* Thumbnail */}
                <label htmlFor="thumbnail" className="text-base block my-2">
                    Thumbnail
                </label>
                <Input
                    type="file"
                    name="thumbnail"
                    variant="primary-outline"
                    onChange={(e) => setData("thumbnail", e.target.files[0])}
                />

                {/* Rating */}
                <label htmlFor="rating" className="text-base block my-2">
                    Rating
                </label>
                <Input
                    type="number"
                    name="rating"
                    placeholder="Enter rating"
                    variant="primary-outline"
                    value={data.rating}
                    onChange={(e) => {
                        const value = e.target.value;
                        if (value >= 0) {
                            setData("rating", value);
                        }
                    }}
                    isError={errors.rating}
                />

                <div className="flex items-center mt-4">
                    <Checkbox
                        name="is_featured"
                        checked={data.is_featured}
                        onChange={(e) =>
                            setData("is_featured", e.target.checked)
                        }
                    />

                    <label htmlFor="is_featured" className="ml-2 text-sm">
                        Is Featured
                    </label>
                </div>

                <Button type="submit" className="mt-4" disabled={processing}>
                    Save
                </Button>
            </form>
        </Auth>
    );
}
