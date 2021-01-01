export const FavReducer = (state: string[] = JSON.parse(localStorage.getItem("@CONAN/FavoriteList") || "[]"), action: {type: string, value: string[]}) => {
    switch (action.type) {
        case "@CONAN/addFav":
            return JSON.parse(localStorage.getItem("@CONAN/FavoriteList") || "[]");
        default:
            return state;
    }
};
