import { getCookie } from "cookies-next";

const handler = (req, res) => {
    const cookie = getCookie('TestCookie', {req, res})
    res.status(200).json({ cookie })
}

export default handler;