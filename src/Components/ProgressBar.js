// import React, { useEffect } from 'react'
// import useStorage from '../Hooks/useStorage'
// import { motion } from "framer-motion";
// const ProgressBar = ({ file, setFile }) => {
//     const { progress, Url } = useStorage(file)
//     console.log(progress, Url)
//     useEffect(() => {
//         if (Url) {
//             setFile(null);
//         }
//     }, [Url, setFile])
//     return (
//         <>
//             <motion.div className="progress-bar"
//                 initial={{ width: 0 }}
//                 animate={{ width: progress + `%` }}
//             >
//                 { }
//                 Progress
//             </motion.div>

//         </>
//     )
// }

// export default ProgressBar
import React, { useEffect } from 'react';
import useStorage from '../Hooks/useStorage';
import { motion } from 'framer-motion';

const ProgressBar = ({ file, setFile }) => {
    const { progress, Url } = useStorage(file);
    console.log(progress, Url)
    useEffect(() => {
        if (Url) {
            setFile(null);
        }
    }, [Url, setFile]);

    return (
        <div className="progress-bar-container">
            <motion.div
                className="progress-bar"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
            >
                {progress > 0 && <span>{progress}%</span>}
            </motion.div>
        </div>
    );
};

export default ProgressBar;
