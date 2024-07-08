
import styles from './App.module.css';
import {Navbar} from './components/Navbar/Navbar';
import { Hero } from './components/Hero/Hero';
import { About } from './components/About/About';
import { Mobiles } from './components/Mobiles/Mobiles';
import { Beautys } from './components/Beautys/Beautys';
import { Contact } from './components/Contact/Contact';
function App() {
  return (<div className={styles.App}>

  <Navbar/>
  <Hero />
  <About />
  <Mobiles />
  <Beautys />
  <Contact />
  </div>
  );
}

export default App