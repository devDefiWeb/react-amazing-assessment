export const isValidEmailString = (data: string): boolean => {
    if (data.toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
        return true;
    } else {
        return false;
    }
}

export const isValidPhoneString = (data: string): boolean => {
    if (data.toLowerCase().match(/^(\()?\d{3}(\))?(-|\s)?\d{3}(-|\s)\d{4}$/)) {
        return true;
    } else {
        return false;
    }
}

