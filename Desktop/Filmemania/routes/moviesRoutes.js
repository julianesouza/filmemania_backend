const config = require("../config")
const express = require("express")
const axios = require('axios')

const popularMovies = async (req, res) => {
    const popularData = await axios.get(config.popularList_url)
    return res.status(200).json(popularData.data.results)
}

const popularTVshows = async (req, res) => {
    const tvData = await axios.get(config.popularTV_url)
    return res.status(200).json(tvData.data) 
}

const topRatedTvShows = async (req, res) => {
    res.send("top rated tv shows")
}

const latestTvShows = async (req, res) => {
    res.send("latest tv shows")
}

const moviesPlayingNow = async (req, res) => {
    res.send("playing now")
}

const topRatedMovies = async (req, res) => {
    res.send("top rated movies")
}


module.exports = {
    popularMovies,
    popularTVshows
}