const Wrapper = ({ children }) => {
    return <div className="wrapper">{children}</div>;
    //   here children representing content inside Waprapper Content ( ie. <h1> & <p>)
};

const ChildrenProps = () => (
    <Wrapper>
        <h1>Hello, World!</h1>
        <p>This is inside the wrapper component.</p>
    </Wrapper>
)

export default ChildrenProps;

/*
Here’s how it happens, step by step:
-----------------------------------

1. Parent Component: When you use the Wrapper component, you pass content inside it (e.g., <h1> or <p>).
                    <Wrapper>
                        <h1>Hello</h1>
                    </Wrapper>

2. Wrapper Component: The Wrapper component receives this content as the 'children' prop. It’s like a box that holds whatever is inside the component when it is used.
                     In the Wrapper component:
                     const Wrapper = ({ children }) => <div>{children}</div>;


3. Rendering: Finally, React will render whatever is inside children. So in this case, it will render:
                    <div>
                        <h1>Hello</h1>
                    </div>



*/