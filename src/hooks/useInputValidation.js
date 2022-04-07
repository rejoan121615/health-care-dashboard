const useInputValidation = () => {
    const blurHandle = (event) => {
        console.log("blur", event);
    };
    const focusHandle = (event) => {
        console.log("focusHandle", event);
    };

    const errorMessage = (event) => {
        console.log("error message", errorMsg);
    };

    const value = (event) => {
        console.log("value", event.target.value);
    };
    return [blurHandle, focusHandle, errorMessage, value];
};

export default useInputValidation;
