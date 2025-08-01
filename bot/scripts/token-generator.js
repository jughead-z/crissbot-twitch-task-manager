// bot/scripts/token-generator.js
const express = require("express");
const axios = require("axios");
const fs = require("fs");
const path = require("path");

// Configuration - Update these with your app credentials
const CLIENT_ID = process.env.TWITCH_CLIENT_ID;
const CLIENT_SECRET = process.env.TWITCH_CLIENT_SECRET;
const REDIRECT_URI = "http://localhost:3100/callback"; // Different port to avoid conflicts

const app = express();

console.log(`
🔑 CrissBot OAuth Token Generator
================================

Before starting, make sure you have:
1. Created a Twitch app at: https://dev.twitch.tv/console/apps
2. Set your Client ID and Secret (see instructions below)

Current config:
- Client ID: ${
  CLIENT_ID === "your_client_id_here" ? "❌ Not set" : "✅ " + CLIENT_ID
}
- Redirect URI: ${REDIRECT_URI}
`);

if (CLIENT_ID === "your_client_id_here") {
  console.log(`
⚠️  SETUP REQUIRED:

1. Go to: https://dev.twitch.tv/console/apps
2. Click "Register Your Application"
3. Fill in:
   - Name: CrissBot-OAuth
   - OAuth Redirect URLs: ${REDIRECT_URI}
   - Category: Chat Bot
4. Get your Client ID and Secret
5. Either:
   a) Update this file directly (lines 6-7), OR
   b) Set environment variables:
      export TWITCH_CLIENT_ID=your_client_id
      export TWITCH_CLIENT_SECRET=your_client_secret

Then restart this script.
`);
  process.exit(1);
}

// Home page with instructions
app.get("/", (req, res) => {
  res.send(`
    <html>
      <head>
        <title>CrissBot OAuth Generator</title>
        <style>
          body { font-family: Arial; max-width: 600px; margin: 50px auto; padding: 20px; }
          .button { background: #9146ff; color: white; padding: 15px 30px; text-decoration: none; border-radius: 5px; display: inline-block; margin: 10px 0; }
          .button:hover { background: #7b2cbf; }
          code { background: #f0f0f0; padding: 2px 5px; border-radius: 3px; }
        </style>
      </head>
      <body>
        <h1>🤖 CrissBot OAuth Token Generator</h1>
        <p>Generate OAuth tokens for your Twitch bot authentication.</p>
        
        <h3>Instructions:</h3>
        <ol>
          <li>Make sure your Twitch app is configured at <a href="https://dev.twitch.tv/console/apps" target="_blank">dev.twitch.tv</a></li>
          <li>Click the button below to start OAuth flow</li>
          <li>Login with the account you want to use as your bot</li>
          <li>Copy the generated token to your <code>.env</code> file</li>
        </ol>

        <a href="/auth" class="button">🔑 Generate OAuth Token</a>
        
        <h3>Current Configuration:</h3>
        <p><strong>Client ID:</strong> ${CLIENT_ID}</p>
        <p><strong>Redirect URI:</strong> ${REDIRECT_URI}</p>
      </body>
    </html>
  `);
});

// Step 1: Redirect to Twitch for authorization
app.get("/auth", (req, res) => {
  const scopes = "chat:read chat:edit"; // Required scopes for chat bot
  const state = Math.random().toString(36).substring(7); // CSRF protection

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

// Step 2: Handle callback and exchange code for token
app.get("/callback", async (req, res) => {
  const { code, state } = req.query;

  if (!code) {
    return res.status(400).send("❌ Authorization code not found");
  }

  try {
    console.log("🔄 Exchanging authorization code for access token...");

    // Exchange authorization code for access token
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

    // Get user info to show which account was authorized
    const userResponse = await axios.get("https://api.twitch.tv/helix/users", {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Client-Id": CLIENT_ID,
      },
    });

    const username = userResponse.data.data[0].login;
    const displayName = userResponse.data.data[0].display_name;

    console.log(`✅ Token generated successfully for: ${username}`);

    // Save tokens to file for backup
    const tokenData = {
      username: username,
      accessToken: accessToken,
      refreshToken: refreshToken,
      expiresIn: expiresIn,
      generatedAt: new Date().toISOString(),
      clientId: CLIENT_ID,
    };

    const tokensPath = path.join(__dirname, "..", "tokens.json");
    fs.writeFileSync(tokensPath, JSON.stringify(tokenData, null, 2));

    // Auto-update .env file
    const envPath = path.join(__dirname, "..", ".env");
    if (fs.existsSync(envPath)) {
      let envContent = fs.readFileSync(envPath, "utf8");

      // Update or add bot credentials
      const updates = [
        { key: "BOT_USERNAME", value: username },
        { key: "BOT_OAUTH_TOKEN", value: `oauth:${accessToken}` },
      ];

      updates.forEach(({ key, value }) => {
        const regex = new RegExp(`^${key}=.*$`, "m");
        if (regex.test(envContent)) {
          envContent = envContent.replace(regex, `${key}=${value}`);
        } else {
          envContent += `\n${key}=${value}`;
        }
      });

      fs.writeFileSync(envPath, envContent);
      console.log("✅ .env file updated automatically!");
    }

    res.send(`
      <html>
        <head>
          <title>CrissBot - Token Generated</title>
          <style>
            body { font-family: Arial; max-width: 800px; margin: 50px auto; padding: 20px; }
            .success { background: #d4edda; border: 1px solid #c3e6cb; color: #155724; padding: 15px; border-radius: 5px; margin: 20px 0; }
            .code-block { background: #f8f9fa; border: 1px solid #dee2e6; padding: 15px; border-radius: 5px; font-family: monospace; white-space: pre-wrap; margin: 10px 0; }
            .button { background: #28a745; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px; display: inline-block; margin: 10px 5px 10px 0; }
          </style>
        </head>
        <body>
          <h1>🎉 OAuth Token Generated Successfully!</h1>
          
          <div class="success">
            <strong>✅ Authentication Complete!</strong><br>
            Account: <strong>${displayName} (@${username})</strong><br>
            Token expires in: <strong>${Math.floor(
              expiresIn / 3600
            )} hours</strong>
          </div>

          <h3>📋 Your Bot Configuration:</h3>
          <div class="code-block">BOT_USERNAME=${username}
BOT_OAUTH_TOKEN=oauth:${accessToken}
CHANNEL_NAME=your_channel_name_here</div>

          <h3>✅ Next Steps:</h3>
          <ol>
            <li><strong>Your .env file has been updated automatically!</strong></li>
            <li>Make sure <code>CHANNEL_NAME</code> is set to your streaming channel</li>
            <li>Restart your bot: <code>npm run dev</code></li>
            <li>Test with <code>!ping</code> in your Twitch chat</li>
          </ol>

          <h3>📄 Backup Information:</h3>
          <p>Token data saved to: <code>bot/tokens.json</code></p>
          <p>Refresh token (save this): <code>${refreshToken}</code></p>

          <div style="margin-top: 30px;">
            <a href="/" class="button">🔄 Generate Another Token</a>
            <a href="#" onclick="window.close()" class="button" style="background: #6c757d;">✅ Close Window</a>
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
      <html>
        <body style="font-family: Arial; padding: 20px;">
          <h2>❌ Token Generation Failed</h2>
          <p>Error: ${error.message}</p>
          <a href="/">← Try Again</a>
        </body>
      </html>
    `);
  }
});

// Start server
const PORT = 3100; // Different port to avoid conflicts with Next.js
app.listen(PORT, () => {
  console.log(`
🚀 CrissBot OAuth Generator is running!

📋 Next steps:
1. Open your browser to: http://localhost:${PORT}
2. Follow the instructions to generate your OAuth token
3. Your .env file will be updated automatically

Press Ctrl+C to stop when you're done.
`);
});
