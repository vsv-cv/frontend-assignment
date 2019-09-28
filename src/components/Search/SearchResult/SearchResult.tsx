import React from "react";
import { ReactComponent as PhotoIcon } from "../../../icons/photo.svg";
import "./styles.css"

interface SearchResultItem {
    imageUrl: string,
    href: string,
    displayLabel: string
}

interface Props {
    searchResult: SearchResultItem[],
    activeEntity: string
}

const SearchResult = ({
    searchResult,
    activeEntity
}: Props) => {
    return (
        <div className="searchResult">
            {
                searchResult.map((item, key) => {
                    const {
                        imageUrl,
                        href,
                        displayLabel
                    } = item;

                    return (
                        <div key={key} className="resultItem">
                            <div className="resultItemContent">
                                <a
                                    href={"https://www.artsy.net" + href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="resultItemTitle"
                                >
                                    {displayLabel}
                                </a>
                                <div className="resultEntityType">
                                    {activeEntity}
                                </div>
                            </div>
                            {
                                imageUrl
                                ? <img src={imageUrl} alt={displayLabel} className="resultItemImg" />
                                : (
                                    <div className="noImage">
                                        <PhotoIcon className="photoIcon" />
                                    </div>
                                )
                            }
                        </div>
                    );
                })
            }
        </div>
    );
};

export default SearchResult;
