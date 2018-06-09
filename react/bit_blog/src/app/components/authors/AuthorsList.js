import React, {Fragment} from 'react';

import { AuthorsItem } from './AuthorsItem';

const AuthorsList = () => {
    return (
        <Fragment>
        <h2 className="center-align">Authors</h2>
        <AuthorsItem />
        </Fragment>
    );
};

export { AuthorsList };