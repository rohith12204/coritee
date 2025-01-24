import { parseAsString, useQueryState } from "nuqs";

export function useSearchParam() {
    // Use the `useQueryState` hook within the custom hook
    return useQueryState(
        "search",
        parseAsString.withDefault("").withOptions({ clearOnDefault: true })
    );
}
