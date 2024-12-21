import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 flex flex-col items-center">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-8 text-center">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
            Secure Authentication for Modern Applications
          </h1>
          <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
            Protect your users with enterprise-grade authentication. Simple to
            integrate, powerful to scale, and built for developers.
          </p>
          <div className="flex flex-col gap-4 min-[400px]:flex-row">
            <Button size="lg">Get Started</Button>
            <Button variant="outline" size="lg">
              View Documentation
            </Button>
          </div>
        </div>
        <div className="mt-12 flex justify-center">
          <div className="relative w-full max-w-[1200px] aspect-[16/9] overflow-hidden rounded-lg">
            <Image
              src="https://plus.unsplash.com/premium_photo-1675329253568-447ff9cc04a3?q=80&w=3132&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Digital security visualization showing a glowing shield on a circuit board"
              width={1200}
              height={350}
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
