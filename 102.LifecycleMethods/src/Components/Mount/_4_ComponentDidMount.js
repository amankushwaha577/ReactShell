import React, { Component } from 'react';

class _4_ComponentDidMount extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null,
            loading: true
        };
    }

    componentDidMount() {
        console.log('componentDidMount is called'); // Synchronous
        // Simulate an async operation
        setTimeout(() => {
            this.setState({ data: 'Fetched Data', loading: false });
        }, 1000);
    }

    render() {
        console.log('Render is called'); // Synchronous
        return (
            <div>
                {this.state.loading ? 'Loading...' : this.state.data}
            </div>
        );
    }
}

export default _4_ComponentDidMount;

/*
componentDidMount💻 in Class Component 💼: 
-------------------------------------------
componentDidMount() runs once only after the initial render and is perfect for side effects! 🔄
        a. Fetching data from API📡
        b. Setting up subscriptions 📚
        c. Setting up Timers ⏰
        d. DOM manipulations 💅


Functional Component 🚀 :
---------------------------
Use useEffect with [] to mimic componentDidMount() and run your logic only once after 1st render! 💪       





1. componentDidMount(), useEffect() are Not pure 💥: 
 -------------------------------------------------
A. They can have side effects (e.g., data fetching, DOM manipulation, subscriptions). 
B. They can update state & trigger re-renders So it’s not pure. 💥


2. By Default :
componentDidMount() - Synchronous  By Default
useEffect()         - Asynchronous By Default 💥: 
 -------------------------------------------------
But both can have async logic inside.
Both dont block rendering process.




Question : We can't do API calling before before 1st render in react. But we can do it in Next.js
Answer : Next.Js have 2 built in methods to fetch data before 1st render.

         A. getServerSideProps() || SSR (Server Side Rendering) :
            When you want to fetch data that is dynamic and that changes for every user. Server sends fully rendered HTML page to client. Ex: Facebook 
            When?           Runs at request time (before every render).
            Performance?	Slower (Fetch on Request) 🐢

         B. getStaticProps() || SSG (Static Site Generation) :
            When you want to fetch data that is static and that doesn’t change often (e.g., blog posts, product pages).
            When?           During build time (before the page is served || npm run build ).
            Performance?	Fast (Pre-built) ⚡







*/