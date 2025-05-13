import React from 'react'
import '../styles/cards.css'

function cards() {
return (
    <div>
            <div className="cards">

                    <h1 className='main-header'>Services</h1>
                    <h1 className='child-header'>Services</h1>
                    <div className="card-container">
                            <div className="card" style={{ backgroundImage: "url(src/assets/images/bg.jpg)", backgroundSize: 'cover', backgroundPosition: 'center' }}>
                                    <h2>Card 1</h2>
                                    <p>This is the first card.</p>
                            </div>
                            <div className="card" style={{ backgroundImage: "url(src/assets/images/bg.jpg)", backgroundSize: 'cover', backgroundPosition: 'center' }}>
                                    <h2>Card 2</h2>
                                    <p>This is the second card.</p>
                            </div>
                            <div className="card" style={{ backgroundImage: "url(src/assets/images/bg.jpg)", backgroundSize: 'cover', backgroundPosition: 'center' }}>
                                    <h2>Card 3</h2>
                                    <p>This is the third card.</p>
                            </div>
                    </div>
            </div>
    </div>
)
}

export default cards