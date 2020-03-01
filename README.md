
## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Database Setup
1. Create a database in firebase.
2. From database dropdown choose: "Realtime database" among "cloud firestore" and "realtime database"
3. Make as below for read and write authorization
    ```json
    {
    /* Visit https://firebase.google.com/docs/database/security to learn more about security rules. */
    "rules": {
        ".read": true,
        ".write": true
    }
    }
    ```