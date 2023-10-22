import { useState, useEffect } from "react";
import { projectFirestore } from '../Firebase/Config'

const useFireStore = (collection) => {
    const [docs, setDocs] = useState([]);

    useEffect(() => {
        const unSub = projectFirestore.collection(collection).orderBy(`createdAT`, `desc`)
            .onSnapshot
            ((snap) => {
                let documents = [];
                snap.forEach(doc => {
                    documents.push({ ...doc.data(), id: doc.id })
                });
                setDocs(documents);
            })
        return () => unSub();
    }, [collection])
    return { docs }
}
export default useFireStore
