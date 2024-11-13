export const ACTION1 = "ACTION1";
export const ACTION2 = "ACTION2";
export const ACTION3 = "ACTION3";

export const function1 = (data) => {
    return async (dispatch, getState) => {
        // Access the current value of `value1` in the state
        const currentValue1 = getState().data1;

        console.log("Current value of value1:", currentValue1); // Optional: log the current value

        // Simulate an async operation, like fetching data or waiting for a delay
        const updatedValue = await new Promise((resolve) => {
            setTimeout(() => {
                resolve(data + " - updated asynchronously");
            }, 1000);
        });

        // Dispatch the action after the async operation
        dispatch({
            type: ACTION1,
            payload: updatedValue,
        });
    };
};
