
import { db } from '../engine/Firebase';
import { collection, getDocs, addDoc } from "firebase/firestore";

function Main() {

    const createRoom = async (e) => {
        e.preventDefault();

        try {
            const docRef = await addDoc(collection(db, "rooms"), {
                players: [],
            });
            console.log("Document written with ID: ", docRef.id);
        } catch (e) {
            console.error("Error adding document: ", e);
        }


        // // Generate a unique room ID
        // const roomId = firebase.database().ref('rooms').push().key;

        // // Create room entry in the database
        // firebase.database().ref('rooms/' + roomId).set({
        //     created_at: firebase.database.ServerValue.TIMESTAMP
        // });

        // // Output the room ID to console or display it to the user
        // console.log('Room created with ID:', roomId);
    };

    const joinRoom = () => {

    }

    return (
        <div class="text-white flex justify-center h-screen">
            <div class="flex flex-col justify-center">
                <button
                    class="my-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
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
