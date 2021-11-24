import React from 'react'

const Footer = () => {
    return (
        <footer  className="footer bg-dark" >
            <div className=" text-center" >
                <span style={{color:"#afa6a6",}}>
                    {new Date().getFullYear()}
                </span>
            </div>
        </footer>
    )
}

export default Footer
