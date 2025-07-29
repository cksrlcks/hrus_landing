import Image from "next/image";
import Link from "next/link";
import { FAMILY_SITE } from "./constants";

export default function Family() {
  return (
    <div className="flex items-center gap-10">
      {FAMILY_SITE.map((site) => (
        <Link key={site.id} href={site.path}>
          <Image src={site.image} alt={site.label} />
        </Link>
      ))}
    </div>
  );
}
