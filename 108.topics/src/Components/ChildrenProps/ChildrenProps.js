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