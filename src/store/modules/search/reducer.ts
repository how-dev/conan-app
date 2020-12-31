export const Searching = (state: string = "", action: {type: string, value: string}) => {
    switch (action.type) {
        case "@SEARCH/searching":
            state = action.value;
            return state;
        default:
            return state;
    }
};
