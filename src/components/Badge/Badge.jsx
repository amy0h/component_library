import React from 'react'
import './Badge.css'

export default function Badge({ children, color = "gray", rounded = false }) {
    const className = `badge ${color}${rounded ? ' badge-rounded' : ''}`;

    return (
        <div className={className}>
            <span className='badge-text'>{children}</span>
        </div>
    )
}