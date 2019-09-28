import React, { useCallback } from "react";
import { searchEntities } from "../consts"
import "./styles.css"

interface Props {
    activeEntity: string;
    setEntity(entity: string): void
}

const SearchEntities = ({
    activeEntity,
    setEntity
}: Props) => {
    const handleClick = useCallback(entity => {
        return () => setEntity(entity);
    }, [setEntity]);

    return (
        <div className="searchEntitiesContainer">
            <ul className="searchEntities">
                {
                    searchEntities.map(entity => {
                        return (
                            <li
                                key={entity}
                                onClick={handleClick(entity)}
                                className={activeEntity === entity ? "searchEntitiesItem active" : "searchEntitiesItem"}
                            >
                                {entity}
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    );
};

export default SearchEntities;
