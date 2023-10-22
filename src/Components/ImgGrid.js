import React from 'react'
import useFireStore from '../Hooks/useFireStore'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { motion } from "framer-motion";



const ImgGrid = ({ setSelectedImg }) => {
    const { docs } = useFireStore('images')
    console.log(docs)
    return (
        <Container>
            <Row>
                <div className="col-md-12 col-sm-12">
                    <div className="img-grid">
                        {docs && docs.map((docs) => (
                            <motion.div
                                layout transition={{ duration: 1 }} style={{ borderRadius: "15px "}}
                                key={docs.id} className="img-wrap" onClick={() => {
                                    setSelectedImg(docs.Url)
                                }}
                                whileHover={{ opacity: .7 }}
                            >
                                <motion.img src={docs.Url} alt="Uploaded Pic"
                                    transition={{
                                        opacity: { ease: "linear" },
                                        layout: { duration: 0.3 }
                                    }}
                                    animate={{ opacity: 1 }}
                                />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </Row>
        </Container >
    )
}

export default ImgGrid
