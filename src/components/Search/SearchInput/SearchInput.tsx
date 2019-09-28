import React, { ChangeEvent, useState, useCallback } from "react";
import { ReactComponent as SearchIcon } from "../../../icons/magnifying-glass.svg";
import { ReactComponent as ClearIcon } from "../../../icons/clear.svg";
import { ReactComponent as LoadingIcon } from "../../../icons/loading-indicator.svg";
import "./styles.css"

interface Props {
    loading: boolean;
    onChange(value: string): void
}

const SearchInput = ({
    loading,
    onChange
}: Props) => {
    const [value, setValue] = useState('');

    const handleChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
        const {value} = event.target;

        onChange(value);
        setValue(value);
    }, [onChange, setValue]);

    const handleClear = useCallback(() => {
        onChange('');
        setValue('');
    }, [onChange, setValue]);

    return (
        <div className="searchInputContainer">
            <input
                type="text"
                placeholder="Search by artist, gallery, style, theme, tag, etc."
                className="searchInput"
                value={value}
                onChange={handleChange}
            />
            <SearchIcon className="searchIcon" />
            {loading && <LoadingIcon className="loadingIcon" />}
            {!loading && !!value && <ClearIcon onClick={handleClear} className="clearIcon" />}
        </div>
    );
};

export default SearchInput;
