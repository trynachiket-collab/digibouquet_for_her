// app/bouquet/[id]/page.tsx
import { supabase } from "@/lib/supabase";
import Bouquet from "../../../components/bouquet/Bouquet";
import Image from "next/image";
import Link from "next/link";

export const dynamic = "force-dynamic";
export const revalidate = 0;

interface Params {
  params: Promise<{
    id: string;
  }>;
}

export default async function BouquetPage(props: Params) {
  const params = await props.params;
  const { id } = params;

  const { data, error } = await supabase
    .from("bouquets")
    .select()
    .eq("id", id)
    .single();

  if (error || !data) {
    return <div>404 - Bouquet not found</div>;
  }

  return (
    <div className="text-center p-6 bg-[#F9F9EE] min-h-screen">
      {/* Logo */}
      <Link href="/">
        <Image
          src="/digibouquet.png"
          alt="Nachi Bouquet for her"
          width={200}
          height={80}
          className="object-cover mx-auto my-10"
          priority
        />
      </Link>

      <h2 className="text-lg mb-14">
        🌸 Hi, I made this bouquet especially for you! 🌸
      </h2>

      <Bouquet bouquet={data} />

      <div className="mt-8">
        <p className="text-sm text-gray-500">
          Made with ❤️ by <span className="font-semibold">Nachi</span>, just
          for you.
        </p>

        <Link
          href="/"
          className="inline-block mt-3 text-sm underline text-pink-600 hover:text-pink-700"
        >
          Create your own digital bouquet 🌷
        </Link>
      </div>
    </div>
  );
}
