import Link from 'next/link';

const Index = () => {
  return (
    <div>
      <h1>Index page</h1>
      <a href='./About'>Server side render the About page</a>
      <br/>
      <Link href='./About'>
        <a>Client side render the About page</a>
      </Link>
    </div>
  );
}

export default Index
