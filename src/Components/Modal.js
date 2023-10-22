import React from 'react'
import Container from 'react-bootstrap/Container';
import '../../src/App.css'
import { motion } from "framer-motion";
const Modal = ({ selectedImg, setSelectedImg }) => {
    const handleClick = (e) => {
        if (e.target.classList.contains('backdrop')) {

            setSelectedImg(null);
        }
    }
    return (
        <Container>
            <motion.div className="backdrop" onClick={handleClick}


                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}

            >
                <motion.img src={selectedImg} alt="Enlarged Pic"
                    initial={{ y: "-100vh" }}
                    animate={{ y: 0 }}
                    transition={{ delay: .2 }} />

            </motion.div>
        </Container>
    )
}

export default Modal
