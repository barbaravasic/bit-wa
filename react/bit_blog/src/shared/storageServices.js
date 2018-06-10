class storageServices {
    saveData = (data, key) => {
        localStorage.setItem(key, data);
    }

    getData = (key) => {
        return localStorage.getItem(key);
    }
}

export const storageServices = new StorageServices;