import { doc, updateDoc } from "firebase/firestore";
import { db } from "../firebase";

export const updateItem = async (id) => {
  const docRef = doc(db, "products", id);
  await updateDoc(docRef, { price: 749 });
  console.log("Product updated!");
};