async function inviteGuestToSlack({ email, channels, _customMessage }) {
    // This is an undocumented API method found in https://github.com/ErikKalkoken/slackApiDoc/pull/70
    // Unlike the documention in that PR, we're driving it not with a legacy token but a browser storage+cookie pair
  
    // The SLACK_COOKIE is a xoxd-* token found in browser cookies under the key 'd'
    // The SLACK_BROWSER_TOKEN is a xoxc-* token found in browser local storage using this script: https://gist.github.com/maxwofford/5779ea072a5485ae3b324f03bc5738e1
  
    // I haven't yet found out how to add custom messages, so those are ignored for now
    const cookieValue = `d=${process.env.SLACK_COOKIE}`
  
    // Create a new Headers object
    const headers = new Headers()
  
    // Add the cookie to the headers
    headers.append('Cookie', cookieValue)
    headers.append('Content-Type', 'application/json')
    headers.append('Authorization', `Bearer ${process.env.SLACK_BROWSER_TOKEN}`)
  
    const data = JSON.stringify({
      token: process.env.SLACK_BROWSER_TOKEN,
      invites: [
        {
          email,
          type: 'restricted',
          mode: 'manual',
        },
      ],
      restricted: true,
      channels: "G01DBHPLK25",
    })
  
    return fetch(`https://slack.com/api/users.admin.inviteBulk`, {
      headers,
      method: 'POST',
      body: data,
    }).then((r) => {
      console.log(r)
      r.json()
    })
  }

inviteGuestToSlack("arav+idk@hackclub.com ", "#blahaj-and-chai")