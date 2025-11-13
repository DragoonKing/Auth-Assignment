import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8 text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Welcome to Auth App
        </h1>
        <p className="text-gray-600 mb-8">
          A secure authentication system built with Next.js and Express
        </p>
        <div className="space-y-4">
          <Link
            href="/signup"
            className="block w-full bg-indigo-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-indigo-700 transition duration-200"
          >
            Sign Up
          </Link>
          <Link
            href="/login"
            className="block w-full bg-white text-indigo-600 py-3 px-6 rounded-lg font-semibold border-2 border-indigo-600 hover:bg-indigo-50 transition duration-200"
          >
            Log In
          </Link>
        </div>
      </div>
    </div>
  );
}
