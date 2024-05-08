import { Box } from '@mui/material'
import styles from '../styles/hover.module.css'

const SiblingsWithHoverEffect = () => {
    return (
        <Box className={styles.container}>
            <Box className={styles.box} />
            <Box className={styles.box} />
            <Box className={styles.box} />
            <Box className={styles.box} />
        </Box>
    )
}

export default SiblingsWithHoverEffect
