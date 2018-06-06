import React from 'react'

export const Footer = () => {
    const dateObj = new Date();
    return (
        <footer className="page-footer">
            <div className="footer-copyright">
                <div className="container">
                    © {dateObj.getFullYear()} Copyright BIT
                </div>
            </div>
        </footer>
    )
}