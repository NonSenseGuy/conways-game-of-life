import React from 'react';
import Head from 'next/head';
import GameOfLife from './components/GameOfLife';
const Home: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Conway&apos;s Game of Life</title>
        <meta name="description" content="Conway's Game of Life in TypeScript and Next.js" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Conway&apos;s Game of Life</h1>
        <GameOfLife />
      </main>

      <footer>
        {/* Footer content goes here */}
      </footer>
    </div>
  );
};

export default Home;

