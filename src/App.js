import styles from './App.module.css';
import SearchBar from './searchbar/SearchBar';

function App() {
  return (
    <div className={styles.App}>
    <>
    <p className={styles.heading}>Cappsule web development test</p>      
    </>
    <div>
      <SearchBar />
    </div>
    </div>
  );
}

export default App;
