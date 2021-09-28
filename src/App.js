import './App.scss';
import Content from './components/contents/Content';
import Header from './components/hearder/Header';
import SideBar from './components/sibar/SideBar';
import { menu } from './constants/menu';

function App() {
    return (
        <div className="App">
            <Header />
            <SideBar data={menu} className='sidebar'></SideBar>
            <Content />
        </div>
    );
}

export default App;
