import { useEffect } from 'react'
import { useCookies } from 'react-cookie'

const Title = ({title, subtitle, logout}) => {
    const [cookie, setCookie , removeCookie] = useCookies(['userId'])

    const handleLogout = () => {
        removeCookie('userId')
        window.location.reload()
    }

    return (
        <div className="title p-t-25 p-b-25">
            {logout ? <h4 id="logout" onClick={handleLogout}>Log-out</h4> : <div></div>}
            <h1>{title}</h1>
            <h3>{subtitle}</h3>
        </div>
    )
}

export default Title
