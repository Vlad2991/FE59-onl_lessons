import { Outlet } from "react-router-dom"
import { NavBar } from "../../components/NavBar"
import { BurgerMenu } from "../../components/BurgerMenu"
import Modal from "../../components/Modal"
import { useSelector } from "react-redux"
import { getThemeSelector } from "../../store/selectors/selectors"
import { deflate } from "zlib"

const Layout = () => {
    const theme = useSelector(getThemeSelector)

    return (
        <div className='App'>
            <header className="App-header">
                <NavBar />
            </header>
            <main className='Main' style={theme}>
                <BurgerMenu />
                <div className='wrapper'>
                    <Outlet />
                    <Modal />
                </div>
            </main>
            <footer className='Footer' style={theme}>
                <div className='footer-wrapper'>
                    <p >©2024 BlogoPosts</p>
                    <p >Uladzislau Kuliashou</p>
                </div>
            </footer>
        </div>
    )
}



export default Layout;


