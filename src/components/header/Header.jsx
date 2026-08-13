import { Link } from 'react-router'
import styles from './header.module.css'

export default function Header() {
	return (
		<header className={styles.header}>
			<div className={styles.homeBtn}>
				<Link to="/">
					<h1>Ichi</h1>
				</Link>
			</div>
			<div className={styles.navBtn}>

			</div>
		</header>
	)
}
