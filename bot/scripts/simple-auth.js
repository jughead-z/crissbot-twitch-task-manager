// bot/scripts/simple-auth.js
const path = require("path");
require("dotenv").config({ path: path.join(__dirname, "..", ".env") });

const express = require("express");
const axios = require("axios");
const fs = require("fs");

// Load environment variables
const CLIENT_ID = process.env.TWITCH_CLIENT_ID;
const CLIENT_SECRET = process.env.TWITCH_CLIENT_SECRET;
const REDIRECT_URI = "http://localhost:3100/callback";

console.log(`
🔑 CrissBot Simple OAuth Generator
==================================

Environment Check:
- CLIENT_ID: ${CLIENT_ID || "❌ Not found"}
- CLIENT_SECRET: ${CLIENT_SECRET ? "✅ Found" : "❌ Not found"}
- .env path: ${path.join(__dirname, "..", ".env")}
`);

if (!CLIENT_ID || !CLIENT_SECRET) {
  console.log(`
❌ Environment variables not loaded properly!

Please check:
1. bot/.env file exists
2. Contains TWITCH_CLIENT_ID and TWITCH_CLIENT_SECRET
3. No typos in variable names

Current bot/.env should have:
TWITCH_CLIENT_ID=j5egl5aolx0wcif9xq8497ece6b9ia
TWITCH_CLIENT_SECRET=0m7szuihhj0t08txeq4nnyf5yw5dvb
`);
  process.exit(1);
}

const app = express();

// Home page
app.get("/", (req, res) => {
  res.send(`
    <html>
      <head>
        <title>CrissBot OAuth</title>
        <style>
          body { font-family: Arial; max-width: 600px; margin: 50px auto; padding: 20px; background: #f5f5f5; }
          .container { background: white; padding: 30px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1); }
          .button { background: #9146ff; color: white; padding: 15px 30px; text-decoration: none; border-radius: 5px; display: inline-block; margin: 20px 0; font-weight: bold; }
          .button:hover { background: #7b2cbf; }
          .status { background: #d4edda; padding: 15px; border-radius: 5px; margin: 20px 0; }
        </style>
      </head>
      <body>
        <div class="container">
          <h1>🤖 CrissBot OAuth Generator</h1>
          
          <div class="status">
            <h3>✅ Configuration Verified</h3>
            <p><strong>Client ID:</strong> ${CLIENT_ID}</p>
            <p><strong>Redirect URI:</strong> ${REDIRECT_URI}</p>
          </div>

          <h3>🔑 Generate OAuth Token</h3>
          <p>Click the button below to start the OAuth flow. You'll be redirected to Twitch to authorize your bot account.</p>
          
          <a href="/auth" class="button">🚀 Start OAuth Flow</a>
          
          <h3>📋 Instructions:</h3>
          <ol>
            <li>Click the button above</li>
            <li><strong>Login with your bot account</strong> (criss_bot or the account you want to use as bot)</li>
            <li>Authorize the application</li>
            <li>Your .env file will be updated automatically</li>
            <li>Restart your bot with <code>npm run dev</code></li>
          </ol>
        </div>
      </body>
    </html>
  `);
});

// Start OAuth flow
app.get("/auth", (req, res) => {
  const scopes = "chat:read chat:edit";
  const state = Math.random().toString(36).substring(7);

  const authUrl =
    `https://id.twitch.tv/oauth2/authorize?` +
    `client_id=${CLIENT_ID}&` +
    `redirect_uri=${encodeURIComponent(REDIRECT_URI)}&` +
    `response_type=code&` +
    `scope=${encodeURIComponent(scopes)}&` +
    `state=${state}`;

  console.log("🔄 Redirecting to Twitch for authorization...");
  res.redirect(authUrl);
});

// Handle OAuth callback
app.get("/callback", async (req, res) => {
  const { code } = req.query;

  if (!code) {
    return res.status(400).send(`
      <h2>❌ Authorization Failed</h2>
      <p>No authorization code received from Twitch.</p>
      <a href="/">← Try Again</a>
    `);
  }

  try {
    console.log("🔄 Exchanging code for access token...");

    // Exchange code for token
    const tokenResponse = await axios.post(
      "https://id.twitch.tv/oauth2/token",
      {
        client_id: CLIENT_ID,
        client_secret: CLIENT_SECRET,
        code: code,
        grant_type: "authorization_code",
        redirect_uri: REDIRECT_URI,
      }
    );

    const accessToken = tokenResponse.data.access_token;
    const refreshToken = tokenResponse.data.refresh_token;
    const expiresIn = tokenResponse.data.expires_in;

    // Get user info
    const userResponse = await axios.get("https://api.twitch.tv/helix/users", {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Client-Id": CLIENT_ID,
      },
    });

    const username = userResponse.data.data[0].login;
    const displayName = userResponse.data.data[0].display_name;

    console.log(`✅ Token generated for: ${username}`);

    // Update .env file
    const envPath = path.join(__dirname, "..", ".env");
    let envContent = fs.readFileSync(envPath, "utf8");

    // Update BOT_USERNAME and BOT_OAUTH_TOKEN
    envContent = envContent.replace(
      /^BOT_USERNAME=.*$/m,
      `BOT_USERNAME=${username}`
    );
    envContent = envContent.replace(
      /^BOT_OAUTH_TOKEN=.*$/m,
      `BOT_OAUTH_TOKEN=oauth:${accessToken}`
    );

    fs.writeFileSync(envPath, envContent);
    console.log("✅ .env file updated!");

    // Save backup
    const tokenData = {
      username,
      accessToken,
      refreshToken,
      expiresIn,
      generatedAt: new Date().toISOString(),
    };

    const tokensPath = path.join(__dirname, "..", "tokens.json");
    fs.writeFileSync(tokensPath, JSON.stringify(tokenData, null, 2));

    res.send(`
      <html>
        <head>
          <title>✅ Success</title>
          <style>
            body { font-family: Arial; max-width: 600px; margin: 50px auto; padding: 20px; }
            .success { background: #d4edda; padding: 20px; border-radius: 5px; margin: 20px 0; }
            .code { background: #f8f9fa; padding: 15px; border-radius: 5px; font-family: monospace; margin: 10px 0; }
            .button { background: #28a745; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px; display: inline-block; margin: 10px 0; }
          </style>
        </head>
        <body>
          <h1>🎉 OAuth Token Generated Successfully!</h1>
          
          <div class="success">
            <h3>✅ Authentication Complete</h3>
            <p><strong>Bot Account:</strong> ${displayName} (@${username})</p>
            <p><strong>Token Expires:</strong> ${Math.floor(
              expiresIn / 3600
            )} hours</p>
          </div>

          <h3>📋 Updated Configuration:</h3>
          <div class="code">BOT_USERNAME=${username}
BOT_OAUTH_TOKEN=oauth:${accessToken}
CHANNEL_NAME=criss_xc</div>

          <h3>🚀 Next Steps:</h3>
          <ol>
            <li>✅ Your .env file has been updated automatically</li>
            <li>Close this window</li>
            <li>Stop the OAuth server (Ctrl+C in terminal)</li>
            <li>Start your bot: <code>npm run dev</code></li>
            <li>Test with <code>!ping</code> in Twitch chat</li>
          </ol>

          <div style="margin-top: 30px;">
            <button onclick="window.close()" class="button">✅ Close Window</button>
          </div>
        </body>
      </html>
    `);
  } catch (error) {
    console.error(
      "❌ Token exchange failed:",
      error.response?.data || error.message
    );
    res.status(500).send(`
      <h2>❌ Token Generation Failed</h2>
      <p><strong>Error:</strong> ${error.message}</p>
      <p><strong>Details:</strong> ${JSON.stringify(
        error.response?.data || {},
        null,
        2
      )}</p>
      <a href="/">← Try Again</a>
    `);
  }
});

// Start server
const PORT = 3100;
app.listen(PORT, () => {
  console.log(`
🚀 Simple OAuth Generator running on http://localhost:${PORT}

Next steps:
1. Open http://localhost:${PORT} in your browser
2. Complete the OAuth flow
3. Your .env will be updated automatically
4. Press Ctrl+C to stop this server when done
`);

  // Try to open browser automatically
  const { exec } = require("child_process");
  exec(`start http://localhost:${PORT}`, (err) => {
    if (err) {
      console.log("💡 Manually open: http://localhost:3100");
    }
  });
});
