import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Search from './search';
import Top from './top';

const Index: React.FC = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path='/search' element={ <Search /> } />
                    <Route path='/home' element={ <Top /> } />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

const element = <Index />;
const target = document.getElementById('main_contents');
ReactDOM.render(element, target)
