import Posts from "@/components/posts"
import Navigate from "@/components/navigate";

export default function page() {
  return (
    <main className="flex flex-col items-center justify-between pt-24">
      <Navigate title="All Posts" />
      <div className="py-10">
      <Posts />
      </div>
    </main>
  );
}
