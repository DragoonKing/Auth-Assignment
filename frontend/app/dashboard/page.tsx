'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/lib/auth';

export default function DashboardPage() {
  const { user, loading, logout } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.push('/login');
    }
  }, [user, loading, router]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
          <p className="mt-4 text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <div className="max-w-4xl mx-auto pt-10">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="flex justify-between items-start mb-8">
            <div>
              <h1 className="text-4xl font-bold text-gray-800 mb-2">
                Welcome, {user.name}
              </h1>
              <p className="text-xl text-gray-600">
                ({user.role})
              </p>
            </div>
            <button
              onClick={logout}
              className="bg-red-600 text-white py-2 px-6 rounded-lg font-semibold hover:bg-red-700 transition duration-200"
            >
              Logout
            </button>
          </div>

          <div className="border-t pt-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Account Information
            </h2>
            <div className="space-y-3">
              <div className="flex items-center">
                <span className="font-medium text-gray-700 w-24">Name:</span>
                <span className="text-gray-600">{user.name}</span>
              </div>
              <div className="flex items-center">
                <span className="font-medium text-gray-700 w-24">Email:</span>
                <span className="text-gray-600">{user.email}</span>
              </div>
              <div className="flex items-center">
                <span className="font-medium text-gray-700 w-24">Role:</span>
                <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                  user.role === 'Admin' 
                    ? 'bg-purple-100 text-purple-800' 
                    : 'bg-blue-100 text-blue-800'
                }`}>
                  {user.role}
                </span>
              </div>
              <div className="flex items-center">
                <span className="font-medium text-gray-700 w-24">User ID:</span>
                <span className="text-gray-600 text-sm">{user.id}</span>
              </div>
            </div>
          </div>

          {user.role === 'Admin' && (
            <div className="mt-8 p-4 bg-purple-50 border border-purple-200 rounded-lg">
              <h3 className="text-lg font-semibold text-purple-900 mb-2">
                Admin Access
              </h3>
              <p className="text-purple-700">
                You have administrator privileges. Admin-specific features can be added here.
              </p>
            </div>
          )}

          <div className="mt-8 p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <h3 className="text-lg font-semibold text-blue-900 mb-2">
              Authentication Status
            </h3>
            <p className="text-blue-700">
              You are successfully authenticated with JWT token. Your session is secure.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
