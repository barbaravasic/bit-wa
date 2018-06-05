export class User {
    constructor(name, email, dob, pictureTh, pictureLarge) {
        this.name = name;
        this.email = email;
        this.dob = dob;
        this.pictureTh = pictureTh;
        this.pictureLarge = pictureLarge;
    }

    hideEmail() {
        const email = this.email;
        const splitEmail = email.split("@");
        const lastThree = splitEmail[0].slice(splitEmail[0].length - 3);
        const shortEmail = `${splitEmail[0].slice(0, 3)}...${lastThree}@${splitEmail[1]}`
        return shortEmail
    }

    formatDate() {
        const dateObj = new Date(this.dob)
        return `${dateObj.getDate()}.${dateObj.getMonth()}.${dateObj.getFullYear()}`
    }
}