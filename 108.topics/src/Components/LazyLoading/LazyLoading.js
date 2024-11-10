import React, { Suspense, lazy } from 'react'
// No need to go on any file


const LightComponent = lazy(() => import('./LightComponent'));

// import HeavyComponent from './HeavyComponent'; => 40 X LightComponent   :: So this file is huge in size.
const HeavyComponent = lazy(() => import('./HeavyComponent'));

const LazyLoading = () => {
    return (
        <div>
            <h1>Lazy Loading</h1>
            {/* It will print as Normal */}

            <Suspense fallback={<div>Loading Home ...</div>}>
                {/* Make some suspense */}
                <LightComponent />
            </Suspense>

            <Suspense fallback={<div>Loading About...</div>}>
                {/* HeavyComponent Is so huge in size so it will make more suspense then LightComponent component */}
                <HeavyComponent />
            </Suspense>
        </div>
    )
}

export default LazyLoading


// Note : Network => slow 3G



// Key Points:
// 1. React.lazy() is used for importing a component dynamically.
// 2. Suspense wraps the lazy-loaded component. Suspense is used to show a fallback UI while the component is being loaded. In this 
//    Fallback UI you can give a spinner.
// 3. Lazy loading improves performance by loading only the components required at the moment.

// Additional Tips:
// For a more control over loading behavior, you can also use **code splitting** with Webpack to split the bundle into smaller chunks.