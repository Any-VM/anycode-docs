import { AnyVM } from "@/components/icons";
import { GitHub } from "@/components/icons";
import { Button } from "@/components/Button";
import { BookOpenText, ChevronRight, Code, Settings, Star } from "lucide-react";
import Link from "next/link";
import { CardContent, CardHeader, Card } from "@/components/Card";
export default function Home() {
  const tagLines = [
    {
      header: "Quick",
      body: "Just log in, configure, and run",
      icon: <Star className="size-8 inline mr-2" />,
    },
    {
      header: "Documented",
      body: "Easy to follow documentation",
      icon: <BookOpenText className="size-8 inline mr-2" />,
    },
    {
      header: "Write Scripts",
      body: "Write scripts in any language",
      icon: <Code className="size-8 inline mr-2" />,
    },
    {
      header: "Simple UI",
      body: "Simple to use and easy to navigate",
      icon: <Settings className="size-8 inline mr-2" />,
    },
  ];

  return (
    <main className="bg-gradient-to-b from-background to-muted min-h-screen">
      <div className="flex mx-20 flex-col min-h-screen items-center">
        <div className="flex-row flex h-screen justify-center items-center">
          <section className="mr-1/2 justify-start">
            <h1 className="font-sans text-5xl text-left font-bold">AnyCode</h1>
            <p className="text-lg text-left">
              AnyCode is a platform designed for serverless workers. Simple to
              use and fast to set up. Quick, easy, and effective
              configuration—get everything up and running in less than three
              minutes! Just sign up with an email and get started!
            </p>
            <section className="flex-row space-x-2 mt-2">
              <Button asChild>
                <Link href="/docs">
                  Get Started
                  <ChevronRight className="inline size-4 ml-2" />
                </Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="https://github.com/any-vm/anycode">
                  <GitHub className="inline size-4 mr-2" /> GitHub
                </Link>
              </Button>
            </section>
          </section>
          <section className="w-1/2 justify-end right-0">
            <AnyVM className="h-96 w-96" />
          </section>
        </div>
        <section className="-mt-24 mb-4">
          <h2 className="text-3xl font-bold my-8">Features</h2>
          <div className="grid grid-cols-2 gap-4">
            {tagLines.map((tagLine) => (
              <Card
                key={tagLine.header}
                className="flex flex-col items-center w-96 h-48 justify-center"
              >
                <CardHeader className="font-bold text-2xl flex flex-row">
                  {tagLine.icon}
                  {tagLine.header}
                </CardHeader>
                <CardContent className="text-left">{tagLine.body}</CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
