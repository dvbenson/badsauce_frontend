import React from 'react';
import Link from 'next/link';

export default function Logo() {
  return (
    <Link href={'/'}>
      <p className="ml-4 text-3xl">BADSAUCE</p>
    </Link>
  );
}