// pages/index.js
import { useUser } from '@auth0/nextjs-auth0/client';
import Link from 'next/link';
import Cartlogin from './Cartlogin';


export default function Index() {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  if (user) {
    return (
      <div>
        Welcome {user.name}! 
        < Cartlogin />
        <Link href="/api/auth/logout">Logout</Link>

      </div>
    );
  }

  return <Link href="/api/auth/login">Login</Link>;
}
