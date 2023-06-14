import headerStyles from "./Header.module.css";

const Header = () => {
    return (
        <header className={headerStyles.header}>
            <h2 style={{
                textAlign: "center",
                color: "blueviolet"
            }}>Surreal</h2>
        </header>
    )
}

export {Header} 