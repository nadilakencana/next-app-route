import Link from "next/link";

export default function Navbar(){
    return(
        <div className="flex px-3 justify-between items-center bg-gray-500 py-4">
            <h2 className="text-green-600 font-semibold">
                Navbar 
            </h2>
            <ul className="flex ml-5">
                <Link href="/">
                    <li className="mr-3 text-blue-800 cursor-pointer hover:underline"> Home </li>
                </Link>
                <Link href="/dashboard">
                    <li className="mr-3 text-blue-800 cursor-pointer hover:underline"> About </li>
                </Link>
                <Link href="/dashboard/profile">
                    <li className="mr-3 text-blue-800 cursor-pointer hover:underline"> Profile </li>
                </Link>
                <Link href="/dashboard/blog">
                    <li className="mr-3 text-blue-800 cursor-pointer hover:underline"> Blog </li>
                </Link>
                
            </ul>
        </div>
    )
}