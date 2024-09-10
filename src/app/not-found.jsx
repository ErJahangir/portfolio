import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="h-screen bg-black text-white not-found flex items-center justify-center flex-col">
      <Image
        src="/image.png"
        width={2000}
        height={2000}
        className="w-80 h-80 mb-3"
        alt="404 not-found"
      />
      <Link href="/">Return Home</Link>
    </div>
  );
}
