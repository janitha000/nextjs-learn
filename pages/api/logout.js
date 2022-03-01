import { removeCookies } from 'cookies-next';

const logout = (req,res) => {
    removeCookies('TestCookie', {req,res});
    res.status(200).json({ text: 'Logged out' })
}

export default logout;