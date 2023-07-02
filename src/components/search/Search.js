import StyleSearch from "./Search.module.css";

const Search = ({showSearch}) => {
    return (
        <div className={`${StyleSearch.container} ${showSearch ? `${StyleSearch.show}` : `${StyleSearch.hide}`}`}>
            <h2>Search User</h2>
        </div>
    )
}

export {Search}