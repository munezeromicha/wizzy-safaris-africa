import React from 'react';
import alinevid from '../../assets/Images/aline.mp4';

const VideoSection: React.FC = () => {
 return (
        <div className="video-section flex flex-col items-center">
            {/* Video Display */}
            <h2 className="text-3xl font-bold mb-4 underline">OUR STORY</h2>
            <div className="video-container pl-[10px] mb-4">
                <video className="w-full max-w-[600px]" controls>
                    <source src={alinevid} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <track kind="subtitles" src="subtitlesAline.vtt" srcLang="en" label="English" />
            </div>
            
        </div>
    );
};

export default VideoSection;