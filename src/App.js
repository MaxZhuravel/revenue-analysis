import './App.css';
import { getData } from './REST/getData'
import { useState } from 'react';
import { useEffect } from 'react';
import UserItem from './components/UserItem';
import Header from './components/Header';
import List from './components/List';
import Search from './components/Search';
import ListPage from './pages/ListPage';
function App() {
  
  const [list, setList] = useState([])
  const [searchQuery, setSearchQuery] = useState('')

  useEffect(() => { loadData()},[])

  function loadData(){
    try{
      getData().then((data)=>{console.log(data);setList(data)})
    }catch(error){
      console.log(error)
    }
  }
  
  const listMap = list.filter((user)=>user.name.toLocaleLowerCase().includes(searchQuery.toLocaleLowerCase())
  ).map((user) => {
      return <UserItem
        key = {user.id}
        id = {user.id}
        name = {user.name}
        date = {user.date}
        isActive = {user.isActive}
      >
      </UserItem>
   })
  
  return (
    <div className="App">
      <ListPage>
        <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery}/>
        <List>
          <Header/>
          {listMap}
        </List>
      </ListPage>  
    </div>
    
  );
}

export default App;
