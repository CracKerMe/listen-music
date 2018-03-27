import React, { Component } from 'react'
import './Album.scss'
import fetch from '../../fetch/index'

export default class Album extends Component {
  constructor(props) {
    super(props)
    this.state = {
      albumList: []
    }
  }

  componentDidMount() {
    fetch.getLatestAlbum()
      .then(res => {
        this.setState({
          albumList: res.albumlib.data.list.slice(0, 6)
        })
      })
  }

  handleSinger(singers) {
    return singers[0].singer_name
  }

  render() {
    return (
      <div className="album-component">
        <h2 className="album-title">最新专辑</h2>
        <ul className="album-list">
          {this.state.albumList.map(val => (
            <li className="album-item" key={val.album_id} >
              <a className="carousel-link"
                href="" 
              >
                <img className="carousel-img"
                  src={`https://y.gtimg.cn/music/photo_new/T002R300x300M000${val.album_mid}.jpg?max_age=2592000`}
                  alt=""
                />
                <p className="album-name">{val.album_name}</p>
                <p className="album-singer">{this.handleSinger(val.singers)}</p>
              </a>
            </li>
          ))}
        </ul>
      </div>  
    )
  }
}