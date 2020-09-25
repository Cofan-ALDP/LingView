import React from 'react';
// // import id from 'shortid';
import { Route } from 'react-router-dom';
import { LandingPage } from './LandingPage.jsx';
import { StoryIndex } from './StoryIndex.jsx';
import { Search } from './Search.jsx';
import { Stories } from './Stories/Stories.jsx';
import { MaterialIndex } from './MaterialIndex.jsx';

export function App() {
    return (
        <div>
            <Route exact path="/" render={props => <LandingPage/>} />
            <Route exact path="/index" render={props => <StoryIndex />} />
            <Route path="/story" render={props => <Stories />} />
            <Route path="/search" render={props => <Search />} />
            <Route path="/publications" render={props => <MaterialIndex />} />
        </div>
    );
}
