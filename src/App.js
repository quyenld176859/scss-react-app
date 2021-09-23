import './App.scss';
import SideBar from './components/sibar/SideBar';
import { menu } from './constants/menu';

function App() {
    return (
        <div className="App">
            <SideBar data={menu} className='sidebar'></SideBar>
        </div>
    );
}

export default App;
