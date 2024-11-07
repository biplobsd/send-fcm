# Send-fcm
Send a push notification using this script. This script used the latest FCM API http v1 to send the push notification.

## Configuration
Install all dependency 
-`npm i`

Now get your firebase projectid and device token and set to those veriable. You can find on the send.ts script above.

```typescript
// Set your Firebase project ID and device token
const projectId = "anvibration-cb915";
const deviceToken = ""; // Set your firebase messaging device token
```

Set your payload to the message variable
```typescript
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
```

## Run
Simply run this command `npm run pushMessage`
If the push notification sent succeful then you will get a Notification Response url.


