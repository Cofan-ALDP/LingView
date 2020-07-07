import React from 'react';
// import id from 'shortid';
// import { Link } from 'react-router-dom';
// import ReactDOMServer from 'react-dom/server';

require('datatables.net-dt');
import 'datatables.net-dt/css/jquery.dataTables.css';

export class StoryIndex extends React.Component {
    async componentDidMount() {
        const index = (await import('~./data/index.json')).default;
        let storyList = [];
        for (const story in index) {
            if (index.hasOwnProperty(story)) {
                /////////
                // Title
                /////////
                let mainTitle = index[story]['title']['con-Latn-EC'];
                if (index[story]['title']['_default'] != '') {
                    mainTitle = index[story]['title']['_default'];
                }

                /////////////////////
                // Translated Title
                /////////////////////
                let translatedTitle = '';
                if (index[story]['title'].hasOwnProperty('es') && index[story]['title']['es'] != '') {
                    translatedTitle = index[story]['title']['es'];
                }
                if (index[story]['title'].hasOwnProperty('en') && index[story]['title']['en'] != '') {
                    translatedTitle = index[story]['title']['en'];
                }

                let timed = '';
                if (index[story]['timed']) {
                    if (index[story]['media']['audio'] != '') {
                        timed += '🎧 &nbsp;&nbsp;'
                    }
                    if (index[story]['media']['video'] != '') {
                        timed += '🎞 &nbsp;&nbsp;'
                    }
                } else {
                    timed = '✘';
                }
                // React Router link:
                const link = `<a href='#/story/${index[story]['story ID']}'>${mainTitle}</a>`;

                const speakers = index[story]['speakers'].join(', ').trim();
                const dateCreated = index[story]['date_created'];
                
                storyList.push([link, translatedTitle, speakers, index[story]['author'], dateCreated, timed]);
            }
        }

        $(document).ready(function() {
            $('#indexTable').DataTable( {
                data: storyList,
                columns: [
                    { title: "Title (A'ingae)" },
                    { title: "Title (English)" },
                    { title: "Speakers" },
                    { title: "Author" },
                    { title: "Date" },
                    { title: "Media" }
                ]
            });
        });
        $('#indexTable').addClass("stripe");
    }

    render() {
        return (
            <div id="index">
                <table id="indexTable">
                </table>
            </div>
        );
    }
}