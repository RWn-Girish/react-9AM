export const getStorageData = () => {
    return JSON.parse(localStorage.getItem("books")) || [];
}


export const setStorageData = (data) => {
    localStorage.setItem("books", JSON.stringify(data));
}