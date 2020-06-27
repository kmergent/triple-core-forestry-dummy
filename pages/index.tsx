import Head from 'next/head'
import Button from '../components/Button';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      
      <main>
        <Button text="foo"/>
      </main>

      <footer>
        
      </footer>

    </div>
  )
}
