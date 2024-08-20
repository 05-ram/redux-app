import AddPostForm from './components/AddPostForm';
import PostList from './components/PostList';
import './global.css';

function App() {
  return (
    <div className="App">
      {/* <h2>Born To Achieve Great Things!</h2> */}
      <AddPostForm />
      <PostList />
    </div>
  );

}

export default App;
