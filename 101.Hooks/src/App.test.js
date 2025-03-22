 {/* C. Caching and Pausing Child Re-render */}
 <UseMemo/> <hr/> {/* Value Memoization */}
 <UseCallback/> <hr/> {/* Function Memoization */}

 {/* D. SIdeEffects */}
 <UseEffect/> <hr/> {/* SideEffects */}
 <UseLayoutEffect/> {/* Runs After render but before paint + Synchronously*/}

 {/* E. Refs */}
 <DomAccess/>  {/*  directly referencing and manipulate DOM elements */}
 <MutableValueWithNoRerender/> <hr/> {/* Change Value without causing re-render */}

 <ForwardRef/> { /* To Access DOM element of Child,  parent sends a ref and Child take it using forwardRef(props, ref) */}
 <UseImperativeHandle/> <hr/>{/* Child uses useImperativeHandle to restrict parent to completely access DOM */}