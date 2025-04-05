import { Outlet, useNavigate, useLocation } from 'react-router-dom'

export const Layout = () => {
	const navigate = useNavigate()
	const location = useLocation()

	const navItems = [
		{ path: '/home', label: '首页' },
		{ path: '/medicine', label: '药箱管理' },
	]

	return (
		<div style={{ display: 'flex', flexDirection: 'column' }}>
			<div
				style={{
					height: '56px',
					borderBottom: '1px solid #eee',
					display: 'flex',
					justifyContent: 'space-between',
					alignItems: 'center',
					background: '#fff',
					padding: '0 16px',
					boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
				}}
			>
				<div style={{ display: 'flex', gap: '24px' }}>
					{navItems.map(item => (
						<div
							key={item.path}
							onClick={() => navigate(item.path)}
							style={{
								cursor: 'pointer',
								padding: '6px 12px',
								borderRadius: '4px',
								color: location.pathname === item.path ? '#1677ff' : '#333',
								background:
									location.pathname === item.path
										? 'rgba(22,119,255,0.1)'
										: 'transparent',
								transition: 'all 0.3s ease',
								fontWeight: location.pathname === item.path ? 500 : 400,
							}}
						>
							{item.label}
						</div>
					))}
				</div>
				<div
					style={{
						display: 'flex',
						alignItems: 'center',
						gap: '12px',
						cursor: 'pointer',
						padding: '6px 12px',
						borderRadius: '4px',
						transition: 'all 0.3s ease',
						':hover': {
							background: 'rgba(0,0,0,0.02)',
						},
					}}
					onClick={() => navigate('/mine')}
				>
					<img
						src="https://randomuser.me/api/portraits/women/43.jpg"
						className=" size-[32px] rounded-full"
						alt=""
					/>
					<span style={{ color: '#333' }}>用户名</span>
				</div>
			</div>
			<div style={{ flex: 1, overflow: 'auto' }}>
				<Outlet />
			</div>
		</div>
	)
}
