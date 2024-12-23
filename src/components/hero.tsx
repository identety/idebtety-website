import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <div className="relative w-full flex flex-col items-center justify-center h-[calc(100vh-57px)]">
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_50%_200px,#C9EBFF,transparent)]"></div>
      </div>

      <section className="w-full py-12 md:py-24 lg:py-32 flex flex-col items-center">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-8 text-center">
            <h1 className="text-5xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-8xl uppercase">
              Identety
            </h1>
            <h2 className="mx-auto max-w-[700px] text-gray-500 text-xl md:text-3xl dark:text-gray-400">
              Secure Authentication for Modern Applications
            </h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
              Secure, scalable, and developer-friendly identity management
              platform—fully open source with no limits on self-hosting.
            </p>
            <div className="flex flex-col gap-4 min-[400px]:flex-row">
              <Button size="lg">Get Started</Button>
              <Button variant="outline" size="lg">
                View Documentation
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
