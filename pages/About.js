import Link from 'next/link';

const About = () => {
  return (
    <div>
      <h1>About</h1>
      <a href='/'>Server side render the Index page</a>
      <br/>
      <Link href='/'>
        <a>Client side render the Index page</a>
      </Link>
    </div>
  );
}

export default About;
