import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { getDatabase, ref } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyDbn4zSHmZEAAubfu4n27vtAFnenbeiKek",
    authDomain: "sergeyweblab-react-gb.firebaseapp.com",
    projectId: "sergeyweblab-react-gb",
    storageBucket: "sergeyweblab-react-gb.appspot.com",
    messagingSenderId: "526196460882",
    appId: "1:526196460882:web:5047b623f327c428e17e8b"
};

const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app)

export const signUp = async (email, password) => await createUserWithEmailAndPassword(firebaseAuth, email, password)
export const signIn = async (email, password) => await signInWithEmailAndPassword(firebaseAuth, email, password)
export const logOut = async () => await signOut(firebaseAuth)

const db = getDatabase(app)

export const userRef = ref(db, 'user')
export const messagesRef = ref(db, 'messages')

export const getChatById = (chatId) => ref(db, `messages/${chatId}`)