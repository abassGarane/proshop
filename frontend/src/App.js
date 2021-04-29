import Header from './components/Header'
import Footer from './components/Footer'
import HomeScreen from './components/screens/HomeScreen'
import { Container } from 'react-bootstrap'
const App = () => {
	return (
		<>
			<Header />
			<main className='py-3'>
				<Container>
					<HomeScreen />
				</Container>
			</main>
			<Footer />
		</>
	)
}

export default App
