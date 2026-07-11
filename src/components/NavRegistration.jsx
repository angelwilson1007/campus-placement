import React from 'react'

const NavRegistration = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">Navbar</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div class="navbar-nav">
                            <a class="nav-link active" aria-current="page" href="/">Add registration</a>
                            <a class="nav-link" href="/Search">search registration</a>
                            <a class="nav-link" href="/Delete">delete registration</a>
                            <a class="nav-link" href="/View">view registration</a>
                            
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default NavRegistration