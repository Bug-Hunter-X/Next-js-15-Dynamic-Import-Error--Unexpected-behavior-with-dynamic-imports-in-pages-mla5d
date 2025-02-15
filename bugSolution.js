```javascript
//pages/about.js
import dynamic from 'next/dynamic';

export default function About() {
  const MyComponent = dynamic(() => import('./my-component'), {
    ssr: false, // Prevent SSR for this component
  });

  return (
    <div>
      <h1>About Page</h1>
      {/* Render the component only after it is loaded successfully. */}
      {MyComponent ? <MyComponent/> : <p>Loading...</p>}
    </div>
  );
}
```
```javascript
//pages/my-component.js
export default function MyComponent(){
    return <p>This is my component</p>
}
```