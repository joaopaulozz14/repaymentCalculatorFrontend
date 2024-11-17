import './styles.css';
import Calculator from '../components/calculator';
import Results from '../components/results';
const Home = () => {
    return <div className="home">
        <div className="container">
            <Calculator />
            <Results />
        </div>
    </div>
}

export default Home;
