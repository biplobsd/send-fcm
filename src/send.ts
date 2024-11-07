import { GoogleAuth } from 'google-auth-library';

// Set your Firebase project ID and device token
const projectId = "anvibration-cb915";
const deviceToken = ""; // Set your firebase messaging device token

// Function to get OAuth2 access token
async function getAccessToken() {
  const auth = new GoogleAuth({
    keyFile: 'service-account.json', // Replace with your service account JSON file path
    scopes: ['https://www.googleapis.com/auth/firebase.messaging'] // Required scope for FCM
  });
  const accessToken = await auth.getAccessToken();
  return accessToken;
}

// Function to send FCM notification with custom payload
async function sendNotification() {
  try {
    const accessToken = await getAccessToken();

    // Define the notification message structure
    const message = {
      message: {
        token: deviceToken,
        notification: {
          title: "Test Notification",
          body: "This is a test message"
        },
        data: {
          vibrationLevel: "0",
        }
      }
    };

    // Send the notification via FCM API
    const response = await fetch(`https://fcm.googleapis.com/v1/projects/${projectId}/messages:send`, {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${accessToken}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(message)
    });

    // Check the response
    const data = await response.json();
    console.log("Notification Response:", data);
  } catch (error) {
    console.error("Error sending notification:", error);
  }
}

// Call the function to send the notification
sendNotification();
