import  admin from "firebase-admin";
import fs from "fs";

const serviceAccount = JSON.parse(fs.readFileSync("./db/prueba-backend-e9f0a-firebase-adminsdk-wtwmb-b503528ba2.json"));

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

const query = db.collection("colores");

const red = await query.add({nombre: "red"});
const green = await query.add({nombre: "green"});
const blue = await query.add({nombre: "blue"});

console.log("colores creados");

const allColors = await query.get();
allColors.forEach(color => {
  console.log(color.data())
});

console.log("get colores");

await query.doc(blue.id).update({nombre: "navy"});

console.log("blue cambiado por navy");

await query.doc(green.id).delete();
console.log("green eliminado");