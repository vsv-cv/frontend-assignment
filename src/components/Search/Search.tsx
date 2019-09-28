import React, { useState } from "react";
import { Query, QueryResult } from "react-apollo";
import SearchInput from "./SearchInput/SearchInput";
import SearchEntities from "./SearchEntities/SearchEntities";
import SearchResult from "./SearchResult/SearchResult";
import { searchEntities, GET_SEARCH_RESULTS } from "./consts";
import "./styles.css";

const Search = () => {
    const [query, setQuery] = useState('');
    const [activeEntity, setActiveEntity] = useState(searchEntities[0]);

    const handleInputChange = (value: string) => setQuery(value);

    const setEntity = (entity: string) => {
        if (entity !== activeEntity) {
            setActiveEntity(entity);
        }
    };

    const getQueryResult = ({loading, error, data}: QueryResult) => {
        return (
            <div className="searchContainer">
                <SearchInput onChange={handleInputChange} loading={loading} />
                {!(loading && error) && data && data.search && (
                    <>
                        <SearchEntities
                            activeEntity={activeEntity}
                            setEntity={setEntity}
                        />
                        <SearchResult
                            searchResult={
                                data.search.edges.map(edge => {
                                    const {
                                        imageUrl,
                                        href,
                                        displayLabel
                                    } = edge.node;

                                    return {
                                        imageUrl,
                                        href,
                                        displayLabel
                                    }
                                })
                            }
                            activeEntity={activeEntity}
                        />
                    </>
                )}
            </div>
        );
    };

    return (
        <Query
            skip={!query}
            children={getQueryResult}
            query={GET_SEARCH_RESULTS}
            variables={{
                query,
                entities: [activeEntity]
            }}
        />
    );
};

export default Search;
