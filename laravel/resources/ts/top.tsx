import React from 'react'
import { Link } from 'react-router-dom'
 
const Top: React.FC = () => {
    const title: string = 'ページ一覧'
    return (
        <div>
            <h1>{title}</h1>
            <ul>
                <li><Link to='/home'>Home</Link></li>
                <li><Link to='/search'>Search</Link></li>
            </ul>
        </div>
    )
}
 
export default Top;
