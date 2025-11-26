export default function DashboardLayoute({children}: {children: React.ReactNode}) {
    return(
        <>
            <nav className="fixed left-0 top-14 z-10 h-screen w-60 bg-gray-800">
                    <ul className="text-white p-4">
                        <li>Dashboard</li>
                        <li>Settings</li>
                    </ul>
            </nav>
            <div className="px-8 py-10 ml-60">{children}</div>
        </> 
    )
}