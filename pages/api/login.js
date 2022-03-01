import { setCookies } from 'cookies-next';

const login = (req,res) => {
    setCookies('TestCookie', 'Janitha Is The Best', {req,res});
    res.status(200).json({ text: 'Logged in successfully' })
}

export default login;