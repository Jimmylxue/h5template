import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { LuckDraw } from './pages/luckDraw'
import { GoodDetail } from './pages/goodDetail'
import { ImagePreloader } from './components/ImagePreloader'

import box from '@/assets/img/box.gif'
import flower from '@/assets/img/flower.gif'
import jinbi from '@/assets/video/jinbi.mp3'
import { useLanguage } from './lang/useLanguage'

function App() {
	useLanguage()

	return (
		<>
			<ImagePreloader src={box} />
			<ImagePreloader src={flower} />
			<ImagePreloader src={jinbi} type="audio" />
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
