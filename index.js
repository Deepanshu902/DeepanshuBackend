require('dotenv').config()
const express = require('express')
const app = express() // most powerfull
const port = 3000

const github = {
    "login": "Deepanshu902",
    "id": 143209098,
    "node_id": "U_kgDOCIkyig",
    "avatar_url": "https://avatars.githubusercontent.com/u/143209098?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/Deepanshu902",
    "html_url": "https://github.com/Deepanshu902",
    "followers_url": "https://api.github.com/users/Deepanshu902/followers",
    "following_url": "https://api.github.com/users/Deepanshu902/following{/other_user}",
    "gists_url": "https://api.github.com/users/Deepanshu902/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/Deepanshu902/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/Deepanshu902/subscriptions",
    "organizations_url": "https://api.github.com/users/Deepanshu902/orgs",
    "repos_url": "https://api.github.com/users/Deepanshu902/repos",
    "events_url": "https://api.github.com/users/Deepanshu902/events{/privacy}",
    "received_events_url": "https://api.github.com/users/Deepanshu902/received_events",
    "type": "User",
    "site_admin": false,
    "name": null,
    "company": null,
    "blog": "",
    "location": null,
    "email": null,
    "hireable": null,
    "bio": null,
    "twitter_username": null,
    "public_repos": 7,
    "public_gists": 0,
    "followers": 0,
    "following": 0,
    "created_at": "2023-08-25T16:27:06Z",
    "updated_at": "2024-10-07T13:53:59Z"
}

app.get('/',(req,res)=>{
    res.send('Hello World')
})

app.get('/youtube',(req,res)=>{
    res.send("Youtube")
})

app.get('/login',(req,res)=>{
    res.send('<h1>Please login at deepanshu website</h1>')
})

app.get('/github',(req,res)=>{
    res.json(github);
})

app.listen(process.env.port,()=>{
    console.log(`example app listing to port ${port}`);
    
})
