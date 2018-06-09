import React from 'react'

export const Footer = () => {
    const dateObj = new Date();
    const lastUpdate = () => {
        const lastVisit = new Date(JSON.parse(localStorage.getItem("lastVisit")));
        const lastUpdate = Date.now() - lastVisit;
        if (lastUpdate <= 1000) {
            return `${parseInt(lastUpdate)} miliseconds ago`
        } else if (lastUpdate <= 60000) {
            return `${parseInt(lastUpdate / 1000)} seconds ago`
        } else if (lastUpdate <= 3600000){
            return `${parseInt(lastUpdate / 60000)} minutes ago`
        } else if (lastUpdate <= 86400000 ) {
            return `${parseInt(lastUpdate / 3600000)} hours ago`
        } else {
            return `${parseInt(lastUpdate / 86400000)} days ago`
        }
       
    }
    return (
        <footer className="page-footer">
            <div className="footer-copyright">
                <div className="container">
                    <p>
                        © {dateObj.getFullYear()} Copyright
                    </p>
                    <p>Last Updated: {lastUpdate()}</p>
                </div>
            </div>
        </footer>
    )
}