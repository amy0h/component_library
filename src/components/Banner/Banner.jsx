import React from 'react'
import './Banner.css'

export default function Banner({ type = "neutral", children }) {
    return (
        <div className={`banner ${type}`}>
            {children}
        </div>
    )
}