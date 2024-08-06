// for more details watch the file `./domains.d.ts`

addSubDomain({
  description: 'Landing page for my App', // describe your project in this field
  domain: 'is-an.app', // aka "root-domain". select between '1bt.uk' and 'is-an.app'
  subdomain: 'instasolve', // desired subdomain name
  owner: {
    repo: 'https://github.com/Insta-Solve',
    email: 'harshnj@proton.me',
  },
  record: {
    CNAME: 'harshnarayanjha.github.io/instasolve',
  }
})
