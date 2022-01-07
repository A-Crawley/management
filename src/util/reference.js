import { useCallback, useRef, useState } from "react";

var isFunction = function (setStateAction) {
    return typeof setStateAction === "function";
};
export var useStateRef = function (initialState) {
    var _a = useState(initialState), state = _a[0], setState = _a[1];
    var ref = useRef(state);
    var dispatch = useCallback(function (setStateAction) {
        ref.current = isFunction(setStateAction) ? setStateAction(ref.current) : setStateAction;
        setState(ref.current);
    }, []);
    return [state, dispatch, ref];
};