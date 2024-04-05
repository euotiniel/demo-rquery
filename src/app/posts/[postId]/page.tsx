"use client";
import { useParams } from "next/navigation";
import Navigate from "@/components/navigate";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

type PostProps = {
  id: number;
  username: string;
  title: string;
  description: string;
  image: string;
};

export default function Page() {
  const params = useParams();
  const id = params.postId;

  const getPost = async () => {
    const response = await axios.get<PostProps>(
      `http://localhost:3000/posts/${id}`
    );
    console.log("Aqui", response);
    return response.data;
  };

  const { data, isLoading, isFetched, error } = useQuery({
    queryKey: ["post"],
    queryFn: getPost,
  });

  return (
    <main className="flex flex-col items-center justify-between pt-24">
      <Navigate title="Learn" />
      <div className="py-10 px-10 md:px-52 lg:px-[300px] xl:px-[450px]">
        <h1 className="text-lg font-semibold">Post {data?.id}</h1>
        <span className="opacity-45 text-sm">
          March 23, 2024 by @{data?.username}
        </span>
        <img
          src={data?.image}
          alt={data?.title}
          className="py-3 object-cover h-60 w-full"
        />
        <p className="opacity-75 text-sm">{data?.description}</p>
      </div>
    </main>
  );
}
