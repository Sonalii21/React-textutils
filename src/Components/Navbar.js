import React from 'react'
import { Link } from 'react-router-dom';


export default function Navbar(props) {
    
    return (
        <div>
            <nav className="navbar navbar-expand-lg" style={{ backgroundColor: props.mode === 'dark' ? 'black' : props.mode === 'red' ? '#320404ff':"#d7d7d7", color: props.mode === 'light' ? 'black': 'white' }}>
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/" style={{color: props.mode === 'light' ? 'black': 'white'}}>{props.title}</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/" style={{color: props.mode === 'light' ? 'black': 'white'}}>Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about" style={{color: props.mode === 'light' ? 'black': 'white'}}>About</Link>
                            </li>

                        </ul>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-primary" type="submit">Search</button>
                        </form>
                        <div className="form-check form-switch mx-2">
                            <input className="form-check-input" onClick={props.togglemode} type="checkbox" role="switch" id="switchCheckDefault" />
                            <label className={`form-check-label text-${props.mode === 'light' ? 'dark' : 'light'}`} htmlFor="switchCheckDefault">Dark mode</label>
                        </div>
                        <div className="form-check form-switch mx-2">
                            <input className="form-check-input" onClick={props.redtoggle} type="checkbox" role="switch" id="switchCheckDefault" />
                            <label className={`form-check-label text-${props.mode === 'light' ? 'dark' : 'light'}`} htmlFor="switchCheckDefault">Red Dark mode</label>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}
