import './App.css';
import Body from './components/Body';
import Header from './components/Header';
import closeContext from './utils/CloseContext';
import searchContext from './utils/SearchContext';
import { useState, useEffect } from 'react';


function App() {

  const [ close, setClosebtn ] = useState();

  const [ search, setSearchText] = useState();

    useEffect(()=>{
        const data = {
            close : null,
        }
        setClosebtn(data.close);
    },[]);

    useEffect(()=>{
      const data = {
          search : "  ",
      }
      setSearchText(data.search);
  },[]);


  return (
    <closeContext.Provider value={{closebtn : close, setClosebtn}}>
    <searchContext.Provider value={{searchText : search, setSearchText}}>
    <div className='App'> 
      <Header></Header>
      <Body></Body>
    </div>
    </searchContext.Provider>
    </closeContext.Provider>
  );
}

export default App; 
