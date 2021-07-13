import { useSelector } from "react-redux";
import ListProduct from "../../components/product/listProduct/listProduct";

import './search.scss';

const Search = () => {
  const searchResult = useSelector((state) => state.search.searchDetails);

  return (
    <>
      <div className="search-page">
        <div className="container">
          <h1>Search result</h1>
          <div>
            <p>{searchResult.length} results found</p>
          </div>
          {searchResult.length > 0 ? (
            <div className="search-page__wrap">
              <div className="row">
                <ListProduct
                  dataProduct={searchResult}
                  offset={0}
                  limit={searchResult.length}
                />
              </div>
            </div>
          ) : (
            <h4>No products were found matching your selection.</h4>
          )}
        </div>
      </div>
    </>
  );
};

export default Search;
