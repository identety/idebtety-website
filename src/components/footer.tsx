import Link from "next/link";
import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";

export function Footer() {
  return (
    <footer className="w-full border-t">
      <div className="container px-4 md:px-6">
        <div className="py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="font-serif italic text-xl">Logo</div>
            <nav className="flex gap-8">
              <Link className="text-sm hover:underline" href="/">
                Home Page
              </Link>
              <Link className="text-sm hover:underline" href="/about">
                About Us
              </Link>
              <Link className="text-sm hover:underline" href="/contact">
                Contact Us
              </Link>
              <Link className="text-sm hover:underline" href="/support">
                Support
              </Link>
              <Link className="text-sm hover:underline" href="/blog">
                Blog
              </Link>
            </nav>
            <div className="flex gap-4">
              <Link href="https://facebook.com" className="hover:opacity-75">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="https://instagram.com" className="hover:opacity-75">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="https://twitter.com" className="hover:opacity-75">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="https://linkedin.com" className="hover:opacity-75">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link href="https://youtube.com" className="hover:opacity-75">
                <Youtube className="h-5 w-5" />
                <span className="sr-only">YouTube</span>
              </Link>
            </div>
          </div>
          <div className="border-t mt-8 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-sm">
              <p>© 2024 Identety. All rights reserved.</p>
              <div className="flex gap-6">
                <Link className="hover:underline" href="/privacy">
                  Privacy Policy
                </Link>
                <Link className="hover:underline" href="/terms">
                  Terms of Service
                </Link>
                <button className="hover:underline">Cookie Settings</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
