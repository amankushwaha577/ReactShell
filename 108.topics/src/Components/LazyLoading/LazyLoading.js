import React, { Suspense } from 'react';

const LazyHeavyComponent = React.lazy(() => import('./HeavyComponent'));

function App() {
  return (
    <div>
      <h1>Lazy Loading Example</h1>
      <Suspense fallback={<div>Loading Heavy Component...</div>}>
        <LazyHeavyComponent />
      </Suspense>
    </div>
  );
}

export default App;
