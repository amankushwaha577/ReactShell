/*
1. useState() :
----------------------
a. Asynchronous : setCount(count + 1); doesn't reflect immediately.
b. Pure Function : Can't have sideEffects + always returns new state.


2. useEffect() :
----------------------
a. Asynchronous : Doesn't block rendering.
b. ImPure Function :  Can perform side effects.


3. UseMemo() :
----------------------
a. Synchronous: ✅ Runs synchronously.
b. Pure: ✅ must not have any side effects.


9. useLayoutEffect() :
----------------------
a. Synchronous : It will block UI.
b. Impure : directly interacts/ manipulate the DOM, which is side effects. + can have other sideEffects like API calling.


*/