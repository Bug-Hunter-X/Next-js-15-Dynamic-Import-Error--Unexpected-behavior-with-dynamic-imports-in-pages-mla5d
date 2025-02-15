```javascript
//pages/index.js
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Welcome to my Next.js app!</h1>
      <Link href='/about'>
        <a>Go to About Page</a>
      </Link>
    </div>
  );
}
```
```javascript
//pages/about.js

export default function About() {
  // This will cause an error in Next.js 15
  // because the dynamic import is not handled properly.
  const component = dynamic(() => import('./my-component'), {
    ssr: false, // Important for this workaround
  });

  return (
    <div>
      <h1>About Page</h1>
      {/* The error happens here if my-component is not handled properly. */}
      {component}
    </div>
  );
}
```