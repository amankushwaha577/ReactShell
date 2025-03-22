/*
Q1. What happens if you update state inside useEffect?
An. If the updated state is in the dependency array, it causes an infinite loop.
        useEffect(() => {
                 setCount(count + 1);

        }, [count]); // Runs forever


Q2. Why does useEffect run twice in React Strict Mode?
An. React Strict Mode mounts and unmounts components twice to detect side effect issues.
    Fix: This behavior happens only in development mode, not production.


Q3. Common pitfalls of using useEffect with API calls?
An. a. Race conditions if a component unmounts before data is fetched.
    b. Unnecessary re-fetching due to incorrect dependencies.


Q4. Why Avoid Async Functions Inside useEffect?
An. Directly using async inside useEffect causes issues with cleanup functions.
    Solution: Define an inner async function

            useEffect(() => {
                    async function fetchData() {
                        const data = await getData();
                        setData(data);
                    }
                    fetchData();
            }, []);


Q5: What’s the difference between these?
                    useEffect(() => {
                             console.log("Effect 1");
                    }, []);

                    useLayoutEffect(() => {
                            console.log("Effect 2");
                    }, []);
                    
An. "Effect 2" runs before the paint, "Effect 1" runs after the paint.
*/