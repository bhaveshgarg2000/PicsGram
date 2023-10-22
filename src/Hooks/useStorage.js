import { useState, useEffect } from "react";
import { projectStorage, projectFirestore, timeStamp } from '../Firebase/Config'


const useStorage = (file) => {
    const [progress, setProgress] = useState(0);
    const [err, setError] = useState(null);
    const [Url, setUrl] = useState(null);

    useEffect(() => {
        const storageRef = projectStorage.ref(file.name);
        const collectionRef = projectFirestore.collection("images");

        storageRef.put(file).on('state_changed', (snap) => {
            let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
            setProgress(percentage)
        }, (err) => {
            setError(err)
        }, async () => {
            const Url = await storageRef.getDownloadURL();
            const createdAT = timeStamp()
            collectionRef.add({ Url, createdAT })
            setUrl(Url)
        })
    }, [file]);

    return { progress, Url, err }


}
export default useStorage;