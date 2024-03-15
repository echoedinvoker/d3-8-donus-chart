import { addDoc, collection } from "firebase/firestore";
import { db } from "./firebase";
import './graph';

const form = document.querySelector('form')!;
const itemname = document.getElementById('itemname')! as HTMLInputElement;
const amount = document.getElementById('amount')! as HTMLInputElement;
const error = document.getElementById('error')!;

form.addEventListener('submit', (e) => {
  e.preventDefault();

  if (itemname.value.trim() && amount.value.trim()) {
    error.textContent = '';
    const item = {
      itemname: itemname.value,
      amount: parseInt(amount.value)
    }
    addDoc(collection(db, 'expenses'), item).then((doc) => {
      console.log('doc added with id: ', doc.id);
    }).catch((error) => {
      console.log('error adding doc: ', error);
    })

  } else {
    error.textContent = 'Please enter values before submitting';
  }
})
