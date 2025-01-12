/*
🎯 Key Lifecycle Flow:
=================================================================================================================
A. Mounting: constructor() → getDerivedStateFromProps() → render() → componentDidMount()
B. Updating: getDerivedStateFromProps() → shouldComponentUpdate() → render() → getSnapshotBeforeUpdate() → componentDidUpdate()
C. Unmounting: componentWillUnmount()


🌱 Mounting (Initial Render)
-----------------------------------------------------
1. constructor() 🛠️ – Initializes state & binds methods.                           --------
2. static getDerivedStateFromProps() 📦 – Sync state with props before render.             | ->    Synchronous
3. render() 🎨 – Renders UI (required method).                                     --------
4. componentDidMount() ✅ – Runs after the component is rendered (ideal for API calls).    | ->    Synchronous but can perform Asynchronous Code

constructor() & componentDidMount() is Impure.


🔄 Updating (State/Props Change)
------------------------------------------------------
1. static getDerivedStateFromProps() 📦 – Sync state with new props.
2. shouldComponentUpdate() ❓ – Controls re-rendering (returns true or false).
3. render() 🎨 – Re-renders UI if allowed.
4. getSnapshotBeforeUpdate() 📸 – Captures information before update (e.g., scroll position).
5. componentDidUpdate() ✅ – Runs after the update is committed.


💥 Unmounting (Component Removal)
------------------------------------------------------
1. componentWillUnmount() 🗑️ – Cleanup (ideal for clearing timers & unsubscribing events).


❌ Error Handling
------------------------------------------------------
1. static getDerivedStateFromError() 🚨 – Catch errors and update UI state.
2. componentDidCatch() 🛡️ – Handle error gracefully.
*/