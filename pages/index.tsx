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
        <span className="icon-alert-triangle"></span>
      </main>

      <footer>
        
      </footer>

    </div>
  )
}
