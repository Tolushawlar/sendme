import Link from 'next/link'
import { AlertCircle } from 'lucide-react'

import { Button } from "@/components/ui/button"

export default function ErrorPage() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-10 rounded-xl shadow-2xl">
        <div className="text-center">
          <AlertCircle className="mx-auto h-16 w-16 text-red-500" />
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900">Oops! Something went wrong</h2>
          <p className="mt-2 text-sm text-gray-600">
            We apologize for the inconvenience. The page you&apos;re looking for is currently unavailable.
          </p>
        </div>
        <div className="mt-8 space-y-6">
          <Button asChild className="w-full">
            <Link href="/">
              Return to Home
            </Link>
          </Button>
          <p className="mt-2 text-center text-sm text-gray-600">
            If the problem persists, please contact our support team.
          </p>
        </div>
      </div>
    </div>
  )
}

