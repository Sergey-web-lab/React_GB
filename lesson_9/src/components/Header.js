import { Outlet, Link } from "react-router-dom"

export const navigate = [
    {
        id: 1,
        name: 'Main',
        to: '/'
    },
    {
        id: 2,
        name: 'Profile',
        to: '/profile'
    },
    {
        id: 3,
        name: 'Chat',
        to: '/chats'
    },
    {
        id: 4,
        name: 'Articles',
        to: '/articles'
    },
    {
        id: 5,
        name: 'Sign in',
        to: '/signin'
    },
    {
        id: 6,
        name: 'Sign up',
        to: '/signup'
    }
]

export function Header() {
    return (
        <>
            <header>
                <nav>
                    <ul>
                        {navigate.map((link) => (
                            <li key={link.id}>
                                <Link to={link.to}>
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </header>
            <main>
                <Outlet></Outlet>
            </main>
        </>
    )
}