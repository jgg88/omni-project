import React, {Component} from 'react';
import {searchOmdb} from '../common/utils';
import SeriesDialog from './seriesdialog';
import './series.css';

class Television extends Component {

    constructor(props) {
        super(props);
        this.state = {
            title: '',
            hasResults: false,
            showInfo: {},
            episodes: [],
            seasons: []
        }
        this.updateTitle = this.updateTitle.bind(this);
        this.submitForm = this.submitForm.bind(this);
        this.searchOmdb = searchOmdb.bind(this);
    }

    updateTitle(event) {
        this.setState({title: event.target.value});
    }

    submitForm(event) {
        event.preventDefault();
        let that = this;
        this.searchOmdb(this.state.title, '$type=series')
            .then(results => {
                let seasonArray = Array.from({length: results.totalSeasons}, (v, i) => i+1);
                that.setState({showInfo: results, seasons: seasonArray});
                this.updateEpisodeList(1);
            })
    }

    updateEpisodeList(number) {
        let that = this;
        this.searchOmdb(this.state.showInfo.Title, `Season=${number}`)
        .then(episodeResults => {
            that.setState({episodes: episodeResults, title: '', hasResults: true})
            console.log(this.state)
        })
    }

    render() {
        return (
            <div>
                <form id='seriesForm' onSubmit={this.submitForm}>
                    <input type='text' id='seriesInput' value={this.state.title} onChange={this.updateTitle}/>
                    <input type='submit' id='seriesSubmit' value='Search'/>
                </form>

                {this.state.hasResults && <h1 className='seriesTitle'>{this.state.showInfo.Title}</h1>}

                <div className='seasonNumberContainer'>
                    {this.state.hasResults && this.state.seasons.map((number, i) => {
                        return <div className={this.state.episodes.Season === `${number}` ? 'currentSeasonNumber' : 'seasonNumber'} onClick={() => this.updateEpisodeList(number)} key={i}>{number}</div>
                    })}
                </div>
                {this.state.hasResults && this.state.episodes.Episodes.map(episode => {
                    return <SeriesDialog episode={episode} episodeID={episode.imdbID} key={episode.imdbID} season={this.state.episodes.Season}/>
                }) }
            </div>
        )
    }
}

export default Television;