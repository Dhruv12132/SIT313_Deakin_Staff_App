
import { db } from "./firebase";
import { doc, setDoc } from "firebase/firestore";
import Stafflist from "./Stafflist";

async function uploadStaff() {
  try {
    for (const staff of Stafflist) {
      await setDoc(
        doc(db, "staff data", String(staff.id)),
        {
          Id: staff.id,
          Name: staff.name,
          Image: staff.image
        }
      );
    }

    console.log("Staff uploaded successfully!");
  } catch (error) {
    console.error("Upload failed:", error.code, error.message);
  }
}

export default uploadStaff;
