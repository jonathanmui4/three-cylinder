import { createGlobalState } from "react-hooks-global-state";

const { setGlobalState, useGlobalState } = createGlobalState({
    color: "pink"
});

export { useGlobalState, setGlobalState };