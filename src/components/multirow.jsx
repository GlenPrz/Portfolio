import React from 'react'
import '../styles/multirow.css'



function multirow() {
  return (
    <div>
        <div className="multirow">
            <div className="multirow-content">
                <div className='row row1'>
                    <div className='row-cont left'>
                        <h1 className='row1-title'>Row1</h1>
                        <p className='row1-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.</p>
                    </div>
                    <div className='row-cont right'>
                        <h1 className='row1-title'>Row1</h1>
                        <p className='row1-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.</p>
                    </div>
                </div>
                <div className='row row2'>
                    <h1 className='row2-title'>Row2</h1>
                </div>
                <div className='row row3'>
                    <h1 className='row3-title'>Row3</h1>
                </div>
                <div className='row row4'>
                    <h1 className='row4-title'>Row4</h1>
                </div>
            </div>
        </div>
    </div>
  )
}

export default multirow