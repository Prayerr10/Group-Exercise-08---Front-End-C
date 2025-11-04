import React from 'react';

const Logo = ({ alt }) => {
    return (
        <div className="flex lg:flex-1">
                <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500" alt={alt} class="h-8 w-auto" />
                </a>
        </div>
    )
}

export default Logo;