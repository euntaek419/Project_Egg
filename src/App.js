import './App.css';

function App() {

  let post = '강남 우동 맛집';
  

  return (
    <div className="App">
      <div className="yellow-nav">
        <h4>project_egg</h4>
      </div>
      <h4 style={ {color : 'red', fontSize:'20px'} }>블로그 글 제목</h4>
    <h4>{ post }</h4>
    
    </div>
  );
}

export default App;
