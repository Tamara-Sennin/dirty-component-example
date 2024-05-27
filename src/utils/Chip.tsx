import React from 'react'

const Chip = ({ label }: { label: string }) => {
    return (
        <div
        style={{
            display: 'inline-block',
            padding: '5px 10px',
            margin: '5px',
            borderRadius: '5px',
            backgroundColor: 'lightgray',
        }}
        >
        {label}
        </div>
    )
}

export default Chip
