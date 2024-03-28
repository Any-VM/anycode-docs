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
        <div className="flex-col flex justify-center items-center">
          <AnyVM className="h-96 w-96" />
          <h1 className="font-sans text-5xl font-bold text-transparent bg-gradient-to-tr from-muted-foreground to-foreground  bg-clip-text">
            AnyCode
          </h1>
          <p className="sm:text-lg my-4 text-md">
            AnyCode is a platform designed for serverless workers. Simple to use
            and fast to set up. Quick, easy, and effective configuration—get
            everything up and running in less than three minutes! Just sign up
            with an email and get started!
          </p>
          <section className="flex-row space-x-2 mt-2 flex">
            <Button asChild size="lg">
              <Link href="/docs">
                Get Started
                <ChevronRight className="inline size-4 ml-2" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="https://github.com/any-vm/anycode">
                <GitHub className="inline size-4 mr-2" /> GitHub
              </Link>
            </Button>
          </section>
        </div>
        <section className="mb-20">
          <h2 className="my-8"></h2>
          <div className="w-full flex flex-col lg:flex-row">
            {tagLines.map((tagLine) => (
              <Card
                key={tagLine.header}
                className="flex flex-col items-center w-auto h-auto justify-center p-4 m-2"
              >
                <CardHeader className="font-bold text-2xl flex flex-row text-nowrap">
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