'use client';

import Link from 'next/link';
import { useState } from 'react';
import { authClient } from '@/lib/auth-client';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';

const UpdateProfile = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const { data: session } = authClient.useSession();
  const user = session?.user;

  const [imagePreview, setImagePreview] = useState(user?.image || '');

  const handleUpdate = async e => {
    e.preventDefault();
    setLoading(true);

    const name = e.target.name.value;
    const image = e.target.image.value;

    const { error } = await authClient.updateUser({
      name,
      image,
    });

    setLoading(false);

    if (error) {
      toast.error(error.message || 'Update failed. Try again.');
    } else {
      toast.success('Profile updated successfully!');
      router.push('/profile');
    }
  };

  return (
    <div className="min-h-screen bg-base-200 flex items-center justify-center px-4 py-12">
      <div className="bg-base-100 rounded-2xl shadow-md w-full max-w-md px-8 py-10">
        {/*  Logo  */}
        <div className="text-center mb-1">
          <h2 className="text-xl font-bold">
            Skill<span className="text-primary">Sphere</span>
          </h2>
          <p className="text-base-content/50 text-sm mt-1">
            Update your profile information below.
          </p>
        </div>

        {/*  Title  */}
        <h1 className="text-xl font-bold text-center mt-4 mb-6">
          Update Information
        </h1>

        {/*  Form  */}
        <form onSubmit={handleUpdate} className="flex flex-col gap-4">
          {/* Display Name */}
          <div>
            <label className="text-sm font-semibold mb-1 block">
              Display Name
            </label>
            <input
              type="text"
              name="name"
              defaultValue={user?.name || ''}
              placeholder="John Doe"
              required
              className="input input-bordered w-full"
            />
          </div>

          {/* Photo URL */}
          <div>
            <label className="text-sm font-semibold mb-1 block">
              Photo URL
            </label>
            <input
              type="url"
              name="image"
              defaultValue={user?.image || ''}
              placeholder="https://example.com/photo.jpg"
              className="input input-bordered w-full"
              onChange={e => setImagePreview(e.target.value)}
            />
          </div>

          {/*  Avatar Preview  */}
          <div className="flex flex-col items-center gap-2 my-1">
            <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center text-white font-bold text-xl overflow-hidden ring-4 ring-base-300">
              {imagePreview ? (
                <img
                  src={imagePreview}
                  alt="preview"
                  className="w-full h-full object-cover"
                  onError={() => setImagePreview('')}
                />
              ) : (
                user?.name?.slice(0, 2).toUpperCase()
              )}
            </div>
            <p className="text-base-content/50 text-xs">
              Current avatar preview
            </p>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="btn btn-primary w-full"
            disabled={loading}
          >
            {loading ? (
              <span className="loading loading-spinner loading-sm"></span>
            ) : (
              'Update Information'
            )}
          </button>
        </form>

        {/*  Back Link  */}
        <div className="text-center mt-5">
          <Link href="/profile" className="text-primary text-sm font-semibold">
            ← Back to Profile
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UpdateProfile;
