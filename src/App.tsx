import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { Login } from './pages/login'
import { Mine } from './pages/mine'
import { Home } from './pages/home'
import { Medicine } from './pages/medicine'
import { Layout } from './components/Layout'

function App() {
	return (
		<>
			<Router>
				<Routes>
					<Route path="/login" element={<Login />} />
					<Route element={<Layout />}>
						<Route path="/mine" element={<Mine role="guardian" />} />
						<Route path="/home" element={<Home />} />
						<Route path="/medicine" element={<Medicine />} />
					</Route>
					<Route path="*" element={<Navigate to="/login" replace />} />
				</Routes>
			</Router>
		</>
	)
}

export default App
