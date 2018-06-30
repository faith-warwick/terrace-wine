import React, {Component} from 'react';
import '../css/header.css';

class header extends Component {
    render () {
        return (

                <div className='terraceBanner'>
                    <div>

                        <h2>
                            THE TERRACE
                        </h2>

                    </div>
                    <div className='titleTag'>
                    Wine Bar & Bistro
                    </div>
                </div>

        )
    }
}

export default header;