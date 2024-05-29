import Image from "next/image";
import Link from "next/link";
export function Credits() {
  const contributorGithub = [
    "anshnk",
    "jeseki83",
    "localuser-isback",
    "lolzthedev",
    "notplayingallday383",
    "proudparrot2",
    "skullcrushercmd",
    "subby2006",
  ];
  return (
    <div className="mx-auto flex flex-wrap items-center justify-center">
      {contributorGithub.map((contributor: string) => (
        <div className="m-5 flex flex-col items-center" key={contributor}>
          <Image
            src={`/contributors/${contributor}.png`}
            width={100}
            height={100}
            alt={contributor}
            loading="eager"
            className="h-24 w-24 rounded-full"
          />

          <Link href={`https://github.com/${contributor}`}>{contributor}</Link>
        </div>
      ))}
    </div>
  );
}
