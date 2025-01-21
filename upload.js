import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase.js";
import fs from "fs";

const data = JSON.parse(fs.readFileSync("data.json", "utf-8"));

const uploadData = async () => {
  for (const item of data) {
    await addDoc(collection(db, "products"), item);
    console.log(`Uploaded: ${item.name}`);
  }
  console.log("All data uploaded successfully!");
};

uploadData();