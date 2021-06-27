import { Sidebar } from './Sidebar/Sidebar.jsx';
import { CenterPanel } from './Display/CenterPanel.jsx';
import { Video } from './Sidebar/Video.jsx';
import { setupYoutubeAndTextSync } from './lib/txt_sync';
import { Loader } from '../Loader.jsx';

export class Story extends React.Component {
    constructor(props) {
        super(props);
        this.state = { story: null };
      }
    async componentDidMount() {
        const storyJSON = await import(`~./data/json_files/${this.props.storyID}.json`);
        this.setState({ story: storyJSON.default });

        setupYoutubeAndTextSync();
        
        // If video exists:
        if ($('#video').length !== 0) {
            Video.show();
        } else {
            Video.hide();
        }
    }

    render() {
        if (!this.state.story) {
            return <Loader />;
        }

        const story = this.state.story;
        const sentences = story['sentences'];
        const timed = (story['metadata']['timed']);
        let footer = null;

        if (timed) {
            const media = story['metadata']['media'];
            if (media['audio'] != '') {
                const audioFilePath = getMediaFilePath(media['audio']);
                footer = <div id="footer"><audio data-live="true" controls controlsList="nodownload" id="audio" src={audioFilePath}/></div>;
            } else {
                const mediaName = media['video'];
                if (isVideoFilePathYoutube(mediaName)) {
                    const youtubeID = getYoutubeID(mediaName);
                    footer = <div hidden id="footer"><audio data-live="true" is-youtube="true" controls controlsList="nodownload" id="video-youtube" youtube-id={youtubeID}/></div>;
                } else {
                    const videoFilePath = getMediaFilePath(mediaName);
                    footer = <div hidden id="footer"><audio data-live="true" is-youtube="false" controls controlsList="nodownload" id="video" src={videoFilePath}/></div>;
                }
                
            }
        }

        return (
            <div>
                <div id="middle">
                    <Sidebar metadata={story['metadata']}/>
                    <CenterPanel timed={timed} sentences={sentences} metadata={story['metadata']}/>
                </div>
                {footer}
            </div>
        );
    }
}

export function getMediaFilePath(mediaFilename) {
    return /^(\w)+:\/\//i.test(mediaFilename) ? mediaFilename : `data/media_files/${mediaFilename}`;
}

// Check if a video filepath is a Youtube URL or an actual filepath pointing to
// any of .mp3, .wav, or .mp4 files
function isVideoFilePathYoutube(mediaFilename) {
    const nonYoutubeExtensions = new Set(['.mp3', '.wav', '.mp4']);
    if (nonYoutubeExtensions.has(mediaFilename.slice(mediaFilename.length - 4))) {
        return false;
    }
    return true;
}

// Source: https://stackoverflow.com/questions/3452546/how-do-i-get-the-youtube-video-id-from-a-url
function getYoutubeID(youtubeUrl) {
    var videoID = youtubeUrl.split('v=')[1];
    var ampersandPosition = videoID.indexOf('&');
    if (ampersandPosition != -1) {
        videoID = videoID.substring(0, ampersandPosition);
    }
    return videoID;
}
