import './App.css';
import Header from './components/Header/Header';
import HomePosts from './components/HomePosts';

function App() {
  return (
    <div className='wrapper'>
      <Header/>
      <HomePosts/>
    </div>
  );
}

export default App;
