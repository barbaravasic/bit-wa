import Author from "../models/Author";

class AuthorsServices {
    fetchAuthors(authorsEndpoint) {
        return fetch(authorsEndpoint)
            .then(response => response.json())
            .then(myResponse => this.adaptAuthorsData(myResponse))
    }

    fetchSingleAuthor(singleAuthorEndpoint) {
        return fetch(singleAuthorEndpoint)
            .then(response => response.json())
            .then(myResponse => this.createAuthorInstance(myResponse))
    }

    adaptAuthorsData(authorsData) {
        const myAuthorsData = authorsData.map(author => {
            return this.createAuthorInstance(author);
        })
        return myAuthorsData;
    }

    createAuthorInstance(author) {
        const { id, name, username, email, address, phone, company } = author;
        const street = address.street;
        const city = address.city;
        const zipcode = address.zipcode;
        const companyName = company.name;
        const slogan = company.catchPhrase
        const authorId = id;
        return new Author(authorId, name, username, email, street,city, zipcode, phone, companyName, slogan);
    }
}

export const authorsServices = new AuthorsServices();