// bot/scripts/test-credentials.js
const axios = require("axios");

// Update these with your actual credentials
const CLIENT_ID = "your_client_id_here";
const CLIENT_SECRET = "your_client_secret_here";

async function testCredentials() {
  console.log("🔍 Testing Twitch app credentials...\n");

  console.log(`Client ID: ${CLIENT_ID}`);
  console.log(`Client ID Length: ${CLIENT_ID.length} characters`);
  console.log(`Client Secret: ${CLIENT_SECRET.substring(0, 8)}... (hidden)`);
  console.log(`Client Secret Length: ${CLIENT_SECRET.length} characters\n`);

  if (
    CLIENT_ID === "your_client_id_here" ||
    CLIENT_SECRET === "your_client_secret_here"
  ) {
    console.log(
      "❌ Please update CLIENT_ID and CLIENT_SECRET in this file first!"
    );
    return;
  }

  try {
    // Test with Client Credentials flow (doesn't require user auth)
    console.log("🔄 Testing credentials with Twitch API...");

    const response = await axios.post(
      "https://id.twitch.tv/oauth2/token",
      {
        client_id: CLIENT_ID,
        client_secret: CLIENT_SECRET,
        grant_type: "client_credentials",
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (response.data.access_token) {
      console.log("✅ Credentials are VALID!");
      console.log("✅ Your Twitch app is configured correctly");
      console.log("\n🚀 You can now run: npm run auth");
    }
  } catch (error) {
    console.log("❌ Credentials test FAILED!");

    if (error.response) {
      console.log(`Status: ${error.response.status}`);
      console.log(`Error: ${JSON.stringify(error.response.data, null, 2)}`);

      if (error.response.status === 400) {
        console.log("\n💡 This usually means:");
        console.log("   - Wrong Client ID or Client Secret");
        console.log("   - Typos in the credentials");
        console.log("   - App doesn't exist or is disabled");
      }
    } else {
      console.log("Network error:", error.message);
    }

    console.log("\n🔧 To fix:");
    console.log("1. Go to: https://dev.twitch.tv/console/apps");
    console.log("2. Click on your app");
    console.log("3. Copy the Client ID and Client Secret exactly");
    console.log("4. Update this file or your .env file");
  }
}

testCredentials();
