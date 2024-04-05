import Link from "next/link";

import Navigate from "@/components/navigate";

export default function page() {
  return (
    <main className="flex flex-col items-center justify-between pt-24">
      <Navigate title="Hello world. 👋🏾" />
      <div className="py-10 px-10 md:px-52 lg:px-[300px] xl:px-[450px]">
        <p>
          Another random project completed, this time exploring useQuery. I
          found the process quite interesting. All it took was one db.json and
          that's it! A great template for my reminders.
        </p>
        <p className="py-3">Used:</p>
        <ul className="flex flex-col justify-center gap-2 opacity-50">
          <li>
            <Link
              href="https://nextjs.org/"
              target="_blank"
              className="text-sm underline"
            >
              Next.js;
            </Link>
          </li>
          <li>
            <Link
              href="https://tanstack.com/query/latest"
              target="_blank"
              className="text-sm underline"
            >
              Tanstack query;
            </Link>
          </li>
          <li>
            <Link
              href="https://www.npmjs.com/package/json-server"
              target="_blank"
              className="text-sm underline"
            >
              Json server;
            </Link>
          </li>
          <li>
            <Link
              href="https://www.npmjs.com/package/axios"
              target="_blank"
              className="text-sm underline"
            >
              Axios;
            </Link>
          </li>
          <li>
            <Link
              href="https://react-icons.github.io/react-icons/"
              target="_blank"
              className="text-sm underline"
            >
              React icons.
            </Link>
          </li>
        </ul>
      </div>
    </main>
  );
}
