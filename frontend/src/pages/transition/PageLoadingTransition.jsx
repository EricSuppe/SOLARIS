import React from 'react'
import "./pageLoadingTransition.css"
import Spinner from './Spinner'
import propTypes from 'prop-types'

export default function PageLoadingTransition(props) {
  return (
    <main className='PageTransition' aria-label='loading-screen'>
        <div className="PageTransition__container">
            <Spinner type={props.type}/>
        </div>
        <span className='PageTransition__label'>{props.display}</span>
    </main>
  )
}

PageLoadingTransition.propTypes = {
  type: propTypes.string,
  display: propTypes.string,
}