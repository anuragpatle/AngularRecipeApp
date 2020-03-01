
## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Database Setup
1. Create a database in firebase.
2. From database dropdown choose: "Realtime database" among "cloud firestore" and "realtime database"
3. In the "rules" sub tab, Make as below for read and write authorization
```json
{
/* Visit https://firebase.google.com/docs/database/security to learn more about security rules. */
    "rules": {
        ".read": true,
        ".write": true
    }
}
```

## For custom authentication 
1. In Firebase -> Database -> Rules, make changes like shown below
    ```json
    {
    /* Visit https://firebase.google.com/docs/database/security to learn more about security rules. */
    "rules": {
        ".read": "auth != null",
        ".write": "auth != null"
    }
    }
    ```

2. In firebase page, GoTo Authentication -> Sign-in mehtods -> Email/Password (Make it enamble and save it)

3. From Google's Firebase docs - Get the authentication api details for sign-up and login api details

* for sign-up

    https://firebase.google.com/docs/reference/rest/auth#section-create-email-password

    So, we got sign up endpoint as: 
    https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=[API_KEY]

    From settings of firebase account, you can get [API_KEY]. So, search for "Web API Key" there.

* For sign in 
    https://firebase.google.com/docs/reference/rest/auth#section-sign-in-email-password

    So, we got sign in endpoint as:
    https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=[API_KEY]