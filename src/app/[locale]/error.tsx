'use client';

import { useEffect } from 'react';

export default function Error({ error }: { error: Error }) {
  useEffect(() => {
    console.error('App error:', error);
  }, [error]);

  return (
    <div className="flex justify-center items-center h-screen ">
      <h1 className="text-3xl">Oops, something went wrong!</h1>
    </div>
  );
}
