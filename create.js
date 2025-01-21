import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase";

export const createItem = async () => {
  await addDoc(collection(db, "products"), {
    name: "Phone",
    price: 699,
    stock: 50
  });
  console.log("Product added!");
};