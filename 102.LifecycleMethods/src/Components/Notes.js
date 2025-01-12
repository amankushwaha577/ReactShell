/*
🎯 Key Lifecycle Flow:
=================================================================================================================
A. Mounting: constructor() → getDerivedStateFromProps() → render() → componentDidMount()
B. Updating: getDerivedStateFromProps() → shouldComponentUpdate() → render() → getSnapshotBeforeUpdate() → componentDidUpdate()
C. Unmounting: componentWillUnmount()


🌱 Mounting (Initial Render)
-----------------------------------------------------
1. constructor() 🛠️ – Initializes state & binds methods.                                   -----------------|
2. static getDerivedStateFromProps(nextProps, prevState) 📦 – Sync state with props before render-----------|-> Synchronous
3. render() 🎨 – Renders UI (required method).                                             -----------------|
4. componentDidMount() ✅ – Runs after the component is rendered (ideal for API calls).    -------------------> Synchronous but can perform Asynchronous Code

constructor() & componentDidMount() is Impure. || constructor directly changes this.state && componentDidMount can have sideeEffects.


🔄 Updating (State/Props Change)
------------------------------------------------------
1. static getDerivedStateFromProps(nextProps, prevState) 📦 – Sync state with new props.    ----------------|
2. shouldComponentUpdate(nextProps, nextState) ❓ – Controls re-rendering (returns true or false).----------|-> Synchronous 
3. render() 🎨 – Re-renders UI if allowed.                                                  ----------------|
4. getSnapshotBeforeUpdate(prevProps, prevState)📸– Captures information DOM update (ex. scroll position).--|
5. componentDidUpdate(prevProps, prevState, snapshot) ✅ – Runs after the update is committed.   -------------> Synchronous but can perform Asynchronous Code 

only componentDidUpdate() is Impure because it can have sideeEffects all are pure.


💥 Unmounting (Component Removal)
------------------------------------------------------
1. componentWillUnmount() 🗑️ – Cleanup (ideal for clearing timers & unsubscribing events).


❌ Error Handling
------------------------------------------------------
1. static getDerivedStateFromError() 🚨 – Catch errors and update UI state.
2. componentDidCatch() 🛡️ – Handle error gracefully.
*/