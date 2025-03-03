'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '@/lib/firebase/config';

export default function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const router = useRouter();

  const handleSignUp = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      router.push('/'); // Redirect to homepage after signup
    } catch (err) {
      setError((err as Error).message);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl font-bold mb-4">Sign Up</h1>
      {error && <p className="text-red-500">{error}</p>}
      <form className="flex flex-col space-y-4" onSubmit={handleSignUp}>
        <input
          className="border p-2"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setEmail(e.target.value)
          }
          required
        />
        <input
          className="border p-2"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setPassword(e.target.value)
          }
          required
        />
        <button className="bg-blue-500 text-white py-2 px-4" type="submit">
          Sign Up
        </button>
      </form>
    </div>
  );
}
