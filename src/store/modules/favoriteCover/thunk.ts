import { AddFav } from "./actions";
export const AddFavThunk = (value: { id: number; company: string; coverPrice: string; totalPages: number; persons: object[]; title: string; cover: string; year: number; description: string }) => (dispatch: (AddFav: { value: { id: number; company: string; coverPrice: string; totalPages: number; persons: object[]; title: string; cover: string; year: number; description: string } }) => any, setState: () => any) => {
    const condition = JSON.parse(localStorage.getItem("@CONAN/FavoriteList") || "[]").some((elt: (number | string)[]) => JSON.stringify(elt) === JSON.stringify(value))

    if (!condition) {
        localStorage.setItem("@CONAN/FavoriteList", JSON.stringify([...JSON.parse(localStorage.getItem("@CONAN/FavoriteList") || "[]"), value]))
        dispatch(AddFav(value))
    } else {
        localStorage.setItem("@CONAN/FavoriteList", JSON.stringify(JSON.parse(localStorage.getItem("@CONAN/FavoriteList") || "[]").filter((elt: string[]) => JSON.stringify(elt) !== JSON.stringify(value))))
        dispatch(AddFav(value))
    }
}
