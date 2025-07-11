import {useState} from 'react'; 
import PostsList from './components/PostList';
import MainHeader from './components/MainHeader';


function App() { 
  const [modalIsVisible,setModalIsVisible] = useState(true);

  function showModalHandler(){
    setModalIsVisible(true);
  }
  function hideModalHandler(){
    setModalIsVisible(false);
  }

  return (
    <>
      <MainHeader onCreatePost={showModalHandler} />
      <main>
        <PostsList 
          isPosting={modalIsVisible} 
          onStopPosting={hideModalHandler} 
        />
      </main>
    </>
);
}

export default App;