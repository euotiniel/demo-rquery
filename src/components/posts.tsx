"use client";
import Link from "next/link";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

type PostsProps = {
  id: number;
  username: string;
  title: string;
};

const getPosts = async () => {
  const response = await axios.get<PostsProps[]>("http://localhost:3000/posts");
  // console.log(response);
  return response.data;
};

export default function Home() {
  const { data, isLoading } = useQuery({
    queryKey: ["posts"],
    queryFn: getPosts,
  });

  return (
    <div>
      {isLoading ? (
        <p>A carregar...</p>
      ) : (
        <>
          {data?.map((post) => (
            <Link href={`/posts/${post.id}`} key={post.id} className="flex flex-col items-start gap-2 py-4">
              <h1 className="font-semibold underline">{post.title}</h1>
              <p className="opacity-70 text-sm">{post.username}</p>
            </Link>
          ))}
        </>
      )}
    </div>
  );
}
