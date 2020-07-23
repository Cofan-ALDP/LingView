import React from 'react';
// // import id from 'shortid';
import { Route } from 'react-router-dom';
import { LandingPage } from './LandingPage.jsx';
import { AboutPage } from './AboutPage.jsx';
import { GlossaryPage } from './GlossaryPage.jsx';
import { StoryIndex } from './StoryIndex.jsx';
import { Search } from './Search.jsx';
import { Stories } from './Stories/Stories.jsx';

export function App({ data }) {
    return (
        <div>
            <Route exact path="/" render={props => <LandingPage/>} />
            <Route exact path="/index" render={props => <StoryIndex />} />
            <Route path="/story" render={props => <Stories />} />
            <Route path="/search" render={props => <Search />} />
            <Route exact path="/about" render={props => <AboutPage/>} />
            <Route exact path="/glossary" render={props => <GlossaryPage/>} />
        </div>
    );
}
