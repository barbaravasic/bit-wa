import React, { Component } from 'react';
import { AboutSingleAuthor } from '../components/singleAuthor/AboutSingleAuthor';
import { authorsServices } from '../../services/authorsServices';
import { authorsEndpoint } from '../../shared/constants';

class SingleAuthor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            author: {},
        }
    }

    componentDidMount(){
        let authorId = this.props.match.params.authorId;
        this.setState({
            authorId:authorId
        })
        const singleAuthorEndpoint= `${authorsEndpoint}/${authorId}`
        authorsServices.fetchSingleAuthor(singleAuthorEndpoint)
        .then(author => {
            this.setState({
                author:author
            })
        })
        
    }

    render() {
        return (
            <AboutSingleAuthor author={this.state.author} />
        )
    }
}

export {SingleAuthor}