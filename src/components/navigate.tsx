import Link from "next/link";

type TitleProps = {
    title: string
}

export default function navigate({title} : TitleProps) {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-xl font-semibold mb-8">{title}</h1>
      <div className="flex flex-row items-center justify-center gap-2">
        <Link href="/" className="underline p-1 text-sm">
          home
        </Link>
        <Link href="/posts" className="underline p-1 text-sm">
          posts
        </Link>
        <Link href="/demo" className="underline p-1 text-sm">
          demo
        </Link>
        <Link href="/contacts" className="underline p-1 text-sm">
          contacts
        </Link>
      </div>
    </div>
  );
}
