import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";

export const readItems = async () => {
  const querySnapshot = await getDocs(collection(db, "products"));
  querySnapshot.forEach((doc) => {
    console.log(doc.id, "=>", doc.data());
  });
};