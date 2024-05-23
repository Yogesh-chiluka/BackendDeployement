require('dotenv').config()

const express = require('express')
const app = express()

const port = 3000

const githubData = {
  "login": "Yogesh-chiluka",
  "id": 72222615,
  "node_id": "MDQ6VXNlcjcyMjIyNjE1",
  "avatar_url": "https://avatars.githubusercontent.com/u/72222615?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/Yogesh-chiluka",
  "html_url": "https://github.com/Yogesh-chiluka",
  "followers_url": "https://api.github.com/users/Yogesh-chiluka/followers",
  "following_url": "https://api.github.com/users/Yogesh-chiluka/following{/other_user}",
  "gists_url": "https://api.github.com/users/Yogesh-chiluka/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/Yogesh-chiluka/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/Yogesh-chiluka/subscriptions",
  "organizations_url": "https://api.github.com/users/Yogesh-chiluka/orgs",
  "repos_url": "https://api.github.com/users/Yogesh-chiluka/repos",
  "events_url": "https://api.github.com/users/Yogesh-chiluka/events{/privacy}",
  "received_events_url": "https://api.github.com/users/Yogesh-chiluka/received_events",
  "type": "User",
  "site_admin": false,
  "name": "Yogesh Chiluka",
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": null,
  "twitter_username": null,
  "public_repos": 14,
  "public_gists": 0,
  "followers": 1,
  "following": 9,
  "created_at": "2020-10-01T17:48:56Z",
  "updated_at": "2024-04-18T10:08:39Z"
}

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter',(req,res)=>{
    res.send('Yogesh Chiluka')
})

app.get('/login',(req,res)=>{
  res.send('<h1>Please login at loginpage</h1>')
})

app.get('/youtube',(req,res)=>{
  res.send('<h2>Yogesh Chiluka Youtube Videos</h2>')
})

app.get('/github',(req,res)=>{
  res.json(githubData)
})

app.listen(process.env.port, () => {
  console.log(`Example app listening on port ${port}`)
})