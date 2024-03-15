import { Expense, ExpenseWithId } from "./types";
import { db } from "./firebase";
import { collection, onSnapshot } from "firebase/firestore";
import { update } from "./update";


const col = collection(db, 'expenses')

enum ChangeType {
  ADDED = 'added',
  MODIFIED = 'modified',
  REMOVED = 'removed'
}


let data: ExpenseWithId[] = []

// implement onSnapshot
onSnapshot(col, (res) => {
  res.docChanges().forEach(change => {
    const doc = { ...change.doc.data() as Expense, id: change.doc.id };

    switch (change.type) {
      case ChangeType.ADDED:
        data.push(doc);
        break;
      case ChangeType.MODIFIED:
        const index = data.findIndex((item: any) => item.id === doc.id);
        data[index] = doc;
        break;
      case ChangeType.REMOVED:
        data = data.filter((item: any) => item.id !== doc.id);
        break;
      default:
        break;
    }
  })

  update(data)
})

