import { initializeApp } from "firebase/app";
import { collection, doc, getDocs, getFirestore, setDoc } from 'firebase/firestore'
import { v4 } from 'uuid'

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_APIKEY,
  authDomain: process.env.NEXT_PUBLIC_AUTHDOMAIN,
  databaseURL: process.env.NEXT_PUBLIC_DATABASEURL,
  projectId: process.env.NEXT_PUBLIC_PROJECTID,
  storageBucket: process.env.NEXT_PUBLIC_STORAGEBUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_MESSAGINGSENDERID,
  appId: process.env.NEXT_PUBLIC_APPID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

export const getData = async () => {
  const wallets = collection(db, "wallets");

  const querySnapshot = await getDocs(wallets);
  querySnapshot.forEach((doc) => {
    console.log(doc.data());
  });
}
export const addWallet = async (wallet: string) => {
  const walletRef = doc(db, 'wallets', v4())
  await setDoc(walletRef, { wallet })
}