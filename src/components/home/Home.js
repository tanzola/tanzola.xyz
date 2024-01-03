import React from 'react';
import { star } from '../../utils.js';
import './Home.css';

function Home() {
    const starPath = star(100, 100, 9, 40, 100);
    const reelVideo = (
    <div className='reel-wrapper'>
        <div className='reel-border'>
            <svg className="reel-star" viewBox="0 0 200 200">
                <path d={starPath}/>
            </svg>
        </div>
        <iframe
            className="reel"
            src={"https://player.vimeo.com/video/" + 677357149}  // #Hardcode
            width="100%"
            height="100%"
            frameBorder="0"
            allowFullScreen
            title="Reel"
        />
    </div>);

	return (
		<>
            <div className="headline-wrapper space-bewteen">
				{/* <h1 className="headline">Reel '22</h1> */}
				<h1 className="headline reel-headline">Reel&nbsp;</h1>
                <h1 className="headline reel-headline">'24</h1>                
			</div>
            {reelVideo}
        </>
	);
}

export default Home;