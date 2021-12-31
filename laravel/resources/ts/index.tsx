import React from 'react'
import ReactDOM from 'react-dom'
 
const Index = () => {
    const title: string = 'TypeScript'
    return (
        <div>
            <h1>{title}</h1>
            <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header">Example Component</div>
                        <div className="card-body">I'm an example component!</div>
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}
 
ReactDOM.render(
    <Index />,
    document.getElementById('main_contents')
)
