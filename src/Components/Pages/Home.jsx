import React from 'react'
import Main from '../Main'
import Row from '../Row'
import requests from '../Request'

function Home() {
  return (
    <div>
        <Main /> 
        <Row rowId='1' title='Upcoming' FetchURL={requests.requestUpcoming} />   
        <Row rowId='2' title='Popular'  FetchURL={requests.requestPopular}/>   
        <Row rowId='3' title='TopRated'  FetchURL={requests.requestTopRated} />   
        <Row rowId='4' title='Trending' FetchURL={requests.requestTrending} />   
        <Row rowId='5' title='Horror' FetchURL={requests.requestHorror} />   
    </div>
  )
}

export default Home