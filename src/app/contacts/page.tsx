import Navigate from "@/components/navigate";
import Contacts from "@/components/contacts";

export default function page() {
  return (
    <main className="flex flex-col items-center justify-between pt-24">
      <Navigate title="Talk to me" />
      <div className="py-10">
        <Contacts />
      </div>
    </main>
  );
}
