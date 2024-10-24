import { Button } from "@/shared/components/ui/button";
import { ArrowLeftIcon } from "lucide-react";
import { type Metadata } from "next";
import BackButton from "@/shared/components/back_button";

export const metadata: Metadata = {
  title: "Page not found",
};

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-4xl font-extrabold text-gray-900">
            404 - Page Not Found
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            The page you are looking for does not exist. It might have been
            moved or deleted. Kndly use the button to return to the page you
            came from.
          </p>
        </div>
        <div className="mt-5 mx-auto w-fit">
          <BackButton />
        </div>
      </div>
    </div>
  );
}
