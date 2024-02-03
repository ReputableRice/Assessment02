import styles from './logo.module.css'

export default function LogoOverlay() {
    return (
        <div className={styles.videoContainer}>
            <video src='../../videos/logo.mp4'
                type='video.mp4'
                width='150'
                height='100'
                loop
                autoPlay='true'
                muted
                className={styles.logoPosition}
                style={{
                    borderRadius: '5rem',
                    mixBlendMode: 'screen'
                }}
            />
        </div>
    )
}