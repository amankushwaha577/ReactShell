class ExampleComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        messages: []
      };
      this.listRef = React.createRef();
    }
  
    getSnapshotBeforeUpdate(prevProps, prevState) {
      // Capture the current scroll position
      if (prevState.messages.length < this.state.messages.length) {
        const list = this.listRef.current;
        return list.scrollHeight - list.scrollTop;
      }
      return null; // Return null if no snapshot is needed
    }
  
    componentDidUpdate(prevProps, prevState, snapshot) {
      // Restore the scroll position
      if (snapshot !== null) {
        const list = this.listRef.current;
        list.scrollTop = list.scrollHeight - snapshot;
      }
    }
  
    render() {
      return (
        <div ref={this.listRef}>
          {this.state.messages.map((msg, index) => (
            <div key={index}>{msg}</div>
          ))}
        </div>
      );
    }
  }
  
/*
📚 What is getSnapshotBeforeUpdate()?
-------------------------------------
If you need to capture information from the DOM (like scroll position, form inputs, etc.) before React applies its updates, you can use getSnapshotBeforeUpdate().

⚙️ When Does It Run?
------------------------
1. After render() + Before DOM is updated: The method runs before React applies the changes to the DOM, making it possible to read the current state of the DOM.
2. After capturing the snapshot, you can use the data in componentDidUpdate() to perform any actions based on that information.

   getSnapshotBeforeUpdate(prevProps, prevState) {
        // Capture the current scroll position before it changes
        const scrollY = window.scrollY;
        return scrollY;
   }

  componentDidUpdate(prevProps, prevState, snapshot) {
       // After the update, do something with the snapshot (scroll position)
       console.log('Previous scrollY:', snapshot);
  }

🎯 Pure, Sync, or Async?
-------------------------
1. Sync: It runs synchronously.
2. Pure: It’s a pure method (i.e., no side effects allowed within getSnapshotBeforeUpdate()).

*/



/*
📚 What is useLayoutEffect()?
-------------------------------------
It runs synchronously after the render + after DOM is updated but before the browser paints the DOM.
so it's perfect for doing things like DOM measurements or layout adjustments that could cause a visual flicker if done after the paint.

useLayoutEffect(() => {
                       Side effect logic here
            return () => {
                       Cleanup logic here
            };
          }, [dependencies]);

*/