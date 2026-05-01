'use client';

import Link from 'next/link';
import { authClient } from '@/lib/auth-client';

const UserProfile = () => {
  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;

  if (isPending) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <span className="loading loading-spinner loading-lg text-primary"></span>
      </div>
    );
  }

  return (
    <div>
      {/*  HEADER  */}
      <div
        className="py-10 text-white text-center"
        style={{
          background:
            'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
        }}
      >
        {/* Avatar */}
        <div className="w-20 h-20 rounded-full bg-primary flex items-center justify-center text-2xl font-bold text-white mx-auto mb-3 ring-4 ring-white/20">
          {user?.image ? (
            <img
              src={user.image}
              alt={user.name}
              className="w-full h-full rounded-full object-cover"
            />
          ) : (
            user?.name?.slice(0, 2).toUpperCase()
          )}
        </div>

        {/* Name & Email */}
        <h1 className="text-xl font-bold">{user?.name}</h1>
        <p className="text-white/60 text-sm mt-1">{user?.email}</p>
      </div>

      {/*  BODY  */}
      <div className="max-w-2xl mx-auto px-4 py-6 flex flex-col gap-4">
        {/*  Stats  */}
        <div className="grid grid-cols-2 gap-4">
          <div className="border border-base-300 rounded-xl p-5 text-center">
            <p className="text-3xl font-bold text-primary">5</p>
            <p className="text-base-content/60 text-sm mt-1">
              Enrolled Courses
            </p>
          </div>
          <div className="border border-base-300 rounded-xl p-5 text-center">
            <p className="text-3xl font-bold text-primary">3</p>
            <p className="text-base-content/60 text-sm mt-1">Completed</p>
          </div>
        </div>

        {/*  Account Info  */}
        <div className="border border-base-300 rounded-xl p-5">
          <h2 className="text-base font-bold mb-4">Account Information</h2>

          <div className="flex flex-col divide-y divide-base-300">
            <div className="flex justify-between py-3 text-sm">
              <span className="text-base-content/50">Full Name</span>
              <span className="font-semibold">{user?.name}</span>
            </div>
            <div className="flex justify-between py-3 text-sm">
              <span className="text-base-content/50">Email</span>
              <span className="font-semibold">{user?.email}</span>
            </div>
            <div className="flex justify-between py-3 text-sm">
              <span className="text-base-content/50">Member Since</span>
              <span className="font-semibold">
                {user?.createdAt
                  ? new Date(user.createdAt).toLocaleDateString('en-US', {
                      month: 'short',
                      year: 'numeric',
                    })
                  : 'N/A'}
              </span>
            </div>
            <div className="flex justify-between py-3 text-sm">
              <span className="text-base-content/50">Provider</span>
              <span className="font-semibold">Email / Google</span>
            </div>
          </div>
        </div>

        {/*  Update Button  */}
        <div className="text-center">
          <Link
            href="/profile/update"
            className="btn btn-ghost btn-sm text-primary"
          >
            ✏️ Update Profile Information
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
