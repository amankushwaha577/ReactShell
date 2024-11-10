class ExampleComponent extends React.Component {
    componentDidMount() {
      // Example: Add event listeners or initiate network requests
      window.addEventListener('resize', this.handleResize);
    }
  
    componentWillUnmount() {
      // Cleanup: Remove event listeners, clear timers, cancel network requests
      window.removeEventListener('resize', this.handleResize);
    }
  
    handleResize = () => {
      console.log('Window resized');
    };
  
    render() {
      return <div>Resize the window and see the logs!</div>;
    }
  }
  