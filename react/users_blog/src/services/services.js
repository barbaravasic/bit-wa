import { User } from '../entities/User'

export const getUsers = () => {
    
    return fetch("https://randomuser.me/api/?results=15")
        .then((res) => res.json())
        .then((response) => {
            const responseArray = response.results;
            const users = responseArray.map((user, index) => {
                const first =` ${user.name.first[0].toUpperCase()}${user.name.first.slice(1)}`
                const last =` ${user.name.last[0].toUpperCase()}${user.name.last.slice(1)}`
                const name = `${first} ${last}`;
                const email = user.email;
                const dob = user.dob;
                const pictureTh = user.picture.thumbnail;
                const pictureLarge = user.picture.large;
                const gender = user.gender;
                return new User(name, email, dob, pictureTh, pictureLarge, gender)
            })

          
            return users;
        })
}