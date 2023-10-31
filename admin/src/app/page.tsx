"use client"

import Image from 'next/image'
import { useEffect } from 'react'

export default function Home() {

  useEffect(() => {
    const url = 'http://localhost:3000/users/3';

    async function fetchIt() {
      const response = await fetch(url);

      const data = await response.json();

      console.log(data);
    }

    fetchIt();

  }, []);

  return (
    <>
    admin
    </>
  )
}
