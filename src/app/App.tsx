import Playground from "../components/playground/Playground";
import Container from "../UI/Container";
import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.app__div}>
      <Container>
        <Playground />
      </Container>
    </div>
  );
}

export default App;
