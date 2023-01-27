import admin from "firebase-admin";
import serviceAccount from "./serviceAccount.json";
import { applicationDefault } from "firebase-admin/app";

serviceAccount

admin.initializeApp({
  credential: applicationDefault(),
  databaseURL: 'https://habits-98308-default-rtdb.firebaseio.com'
});

export default admin;