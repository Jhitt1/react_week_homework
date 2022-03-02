import React from 'react'
import { Route, Routes, Link } from 'react-router-dom'
import {Inbox} from './view/Inbox'
import {Sent} from './view/Sent'
import {Trash} from './view/Trash'

export const App = () => {
    return (
      <React.Fragment>
        <header>
          <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            <Link className="navbar-brand" to="/">You Have Mail</Link>
            <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="collapsibleNavId">
              <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                <li className="nav-item active">
                  <Link className="nav-link" to="/">Inbox<span className="sr-only">(current)</span></Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/sent">Sent</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/trash">Trash</Link>
                </li>
              </ul>
              <form className="form-inline my-2 my-lg-0">
                <input className="form-control mr-sm-2" type="text" placeholder="Search"/>
                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
              </form>
            </div>
          </nav>
        </header>
          
          <Routes>
            <Route exact path='/' element={ <Inbox />} />
            <Route exact path='/sent' element={ <Sent />} />
            <Route exact path='/trash' element={ <Trash />} />
          </Routes>

        <footer>

        </footer>


      </React.Fragment>
    )
  }

