import Navigate from "@/components/navigate";

export default function page() {
  return (
    <main className="flex flex-col items-center justify-between pt-24">
      <Navigate title="Ups..." />
      <div className="py-10 px-10 md:px-52 lg:px-[300px] xl:px-[450px]">
        <div className="flex flex-col items-center justify-center gap-3">
          <h1 className="text-2xl font-bold">404</h1>
          <p className="text-sm">Page not found</p>
        </div>
      </div>
    </main>
  );
}
