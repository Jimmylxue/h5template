import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { LuckDraw } from './pages/luckDraw'
import { GoodDetail } from './pages/goodDetail'

function App() {
	return (
		<>
			<Router>
				<Routes>
					<Route path="/luck" element={<LuckDraw />} />
					<Route path="/good" element={<GoodDetail />} />
					<Route path="*" element={<Navigate to="/luck" replace />} />
				</Routes>
			</Router>
		</>
	)
}

export default App
