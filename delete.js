import { doc, deleteDoc } from "firebase/firestore";
import { db } from "../firebase";

export const deleteItem = async (id) => {
  const docRef = doc(db, "products", id);
  await deleteDoc(docRef);
  console.log("Product deleted!");
};