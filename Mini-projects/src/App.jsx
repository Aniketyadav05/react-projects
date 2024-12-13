import React from 'react'
import Generator from './Components/Generator'
import Footer from './Components/Footer'
import Slider from "./Components/Slider";
import StopWatch from './Components/StopWatch'
import LoadMore from './Components/LoadMore';
import ThemeSwitch from './Components/ThemeSwitch';
import SearchAutoComplete from './Components/SearchAutoComplete/SearchAutoComplete';
import TIcTacToe from './Components/TIcTacToe';
const App = () => {
  return (
    <>
      <h1 >Random Color Generator</h1>
      <Generator/>
      <h1>Stop Watch</h1>
      <StopWatch/>
      <h1>Image Slider</h1>
      <Slider url={"https://picsum.photos/v2/list"} limit={"10"} page={"1"}/>
      <h1>Load More</h1>
      <LoadMore/>
      <h1>Theme Switch</h1>
      <ThemeSwitch/>
      <h1>Search Auto-Complete</h1>
      <SearchAutoComplete/>
      <h1>TIC TAC TOE</h1>
      <TIcTacToe/>
      <Footer/>
    </>
  )
}

export default App