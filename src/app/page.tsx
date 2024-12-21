import Hero from "@/components/hero";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, XCircle } from "lucide-react";

export default function Home() {
  return (
    <div className="h-screen w-screen">
      <Hero />

      {/* Feature comparison */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
            Break Free from Paid Identity Solutions
          </h2>
          <div className="grid gap-8 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-red-600">
                  <XCircle className="w-6 h-6 mr-2" />
                  Paid Solutions
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <XCircle className="w-4 h-4 text-red-500 mr-2 flex-shrink-0" />
                    <span>Limited users (MAU caps)</span>
                  </li>
                  <li className="flex items-center">
                    <XCircle className="w-4 h-4 text-red-500 mr-2 flex-shrink-0" />
                    <span>Expensive scaling</span>
                  </li>
                  <li className="flex items-center">
                    <XCircle className="w-4 h-4 text-red-500 mr-2 flex-shrink-0" />
                    <span>Vendor lock-in</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-green-600">
                  <CheckCircle className="w-6 h-6 mr-2" />
                  Identety.dev
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                    <span>Unlimited users</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                    <span>Self-hosted & cost-effective</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                    <span>Full control & customization</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
          <p className="text-lg text-gray-600 text-center mt-8">
            Go unlimited with self-hosted Identety and take control of your
            identity infrastructure.
          </p>
        </div>
      </section>

      {/*  */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Start Your Own Identety in Seconds
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Get up and running quickly with our Docker image. Just run the
            following command:
          </p>
          <code className="mb-10 block">
            docker run -p 3000:3000 identety/identety:latest
          </code>

          <Button size="lg" asChild>
            <a
              href="https://docs.identety.dev/general-docs/installation"
              target="_blank"
            >
              View Full Documentation
            </a>
          </Button>
        </div>
      </section>
    </div>
  );
}
