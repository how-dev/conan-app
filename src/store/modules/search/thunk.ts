import { setSearch } from "./action";

export const SetSearchThunk = (value: string) => (dispatch: (setSearch: { value: string }) => any, setState: () => any) => {
    value = value.toLowerCase();
    dispatch(setSearch(value))
}
