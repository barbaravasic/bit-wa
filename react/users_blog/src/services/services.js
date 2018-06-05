import { User } from '../entities/User'

export const getUsers = () => {
    return fetch("https://randomuser.me/api/?results=15")
        .then((res) => res.json())
        .then((response) => {
            const responseArray = response.results;
            const users = responseArray.map((user, index) => {
                const name = `${user.name.title} ${user.name.first} ${user.name.last}`;
                const email = user.email;
                const dob = user.dob;
                const pictureTh = user.picture.thumbnail;
                const pictureLarge = user.picture.large;
                return new User(name, email, dob, pictureTh, pictureLarge)
            })

            return users;
        })
}