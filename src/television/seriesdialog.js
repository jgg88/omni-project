import React, {Component} from 'react';
import moment from 'moment';

export default class SeriesDialog extends Component {

    captureEpisodeData = () => {
        console.log(this.props.episode);
    }

    render() {
        return (
            <div className='episodeContainer'>
                <div className='episodeCheckboxContainer'>
                    <input type='checkbox' onChange={this.captureEpisodeData}/>
                    <p>{this.props.episode.Title}</p>
                </div>
                <p className='episodeReleaseDate'>{moment(this.props.episode.Released).format('MM/DD/YYYY')}</p>
            </div>
        )
    }
}