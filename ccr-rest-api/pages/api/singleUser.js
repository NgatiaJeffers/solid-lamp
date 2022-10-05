// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from "axios";

export default async function handler(req, res) {
  const apiUrl = process.env.API_ENDPOINT || "https://jsonplaceholder.typicode.com"

  const username = req.query.username;
  const API_ENDPOINT = apiUrl;

  const userReq = await axios.get(`${API_ENDPOINT}/users/${username}`)
  res.status(200).json(userReq.data)
}
