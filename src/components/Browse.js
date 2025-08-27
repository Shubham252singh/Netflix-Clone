import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import { useSelector } from 'react-redux';
import GptSearchPage from './GptSearchPage';

function Browse() {
  useNowPlayingMovies();
  const gptSrchClick = useSelector((store) =>store.appConfig.gptSrchClick);
  return (
    <div>
      <Header/>
      {
        gptSrchClick?<GptSearchPage/>:<><MainContainer/>
        <SecondaryContainer/></>
      }
    </div> 
  )
}

export default Browse