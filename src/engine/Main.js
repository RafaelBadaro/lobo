
import { db } from './Firebase';
import { collection, getDocs, addDoc, setDoc, doc } from "firebase/firestore";
import React, { useState, useEffect } from 'react';

function Main() {

    const [inputValue, setInputValue] = useState('');
    const [isJoinRoomBtnEnabled, setJoinRoomBtnEnabled] = useState(false);

    const handleInputChange = (event) => {
        const value = event.target.value;
        setInputValue(value);
        setJoinRoomBtnEnabled(value.length == 4);
    };

    const createRoom = async (e) => {
        e.preventDefault();
        try {
            const docRef = await addDoc(collection(db, "rooms"), {
                players: [],
            });
            setDoc(docRef, {
                code: docRef.id.substring(0, 4).toUpperCase() // the code of the room will be the 4 digits of the ID
            }, { merge: true });
            console.log("Document written with ID: ", docRef.id);
        } catch (e) {
            console.error("Error adding document: ", e);
        }

    };

    const joinRoom = () => {

        const roomCode = document.getElementById('roomCode').value
        if (roomCode === "" || roomCode == null) {
            console.log("room code empty")
            return
        }

        debugger
        const room = doc(db, "rooms", roomCode);
        if(room != null){
            // Redirect to room page
        } else{
            // Send message room not found
        }

    }

    return (
        <div class="text-white flex justify-center h-screen">
            <div class="flex flex-col justify-center">

                <input class="
                placeholder:italic 
                placeholder:text-slate-400 
                block  
                w-full 
                border 
                border-slate-300
                rounded-md 
                py-2 
                pl-9
                pr-3 
                shadow-sm 
                focus:outline-none 
                focus:border-sky-500 
                focus:ring-sky-500 
                focus:ring-1 
                sm:text-sm 
                text-black"
                    placeholder="CODIGO"
                    type="text"
                    id="roomCode"
                    maxLength={4}
                    value={inputValue}
                    onChange={handleInputChange} />
                <button
                    class="my-5 
                    bg-slate-500
                    enabled:bg-blue-500 
                    enabled:hover:bg-blue-700 
                    text-white 
                    font-bold 
                    py-2 
                    px-4 
                    rounded"
                    disabled={!isJoinRoomBtnEnabled}
                    type="submit"
                    onClick={joinRoom}>
                    Entrar em uma sala
                </button>


                <button
                    class="my-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    onClick={createRoom}>
                    Criar uma sala
                </button>
            </div>

        </div>
    );
}

export default Main;
