import "./shop.scss";
import { Dropdown } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDollarSign,
  faLeaf,
  faStar,
  faStream,
  faChevronLeft,
  faChevronRight,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect, useCallback } from "react";

import ListProduct from "../../components/product/listProduct/listProduct";

//redux
import { useSelector, useDispatch } from "react-redux";
import { getListProducts } from "../../redux/actions/products";
import useGetAllProduct from "../../hooks/useGetAllProduct";
import axios from "axios";

const Shop = () => {
  const [filter, setFilter] = useState(false);
  const [filterPrice, setFilterPrice] = useState(false);
  const [dataProduct, setDataProduct] = useState(false);
  const [dataProductFilter, setDataProductFilter] = useState(false);
  const [dataProductDefault, setDataProductDefault] = useState(false);
  const [paginationItem, setPaginationItem] = useState(false);
  const numberLimit = 12;
  const [offset, setOffset] = useState(0);
  const [limit, setLimit] = useState(numberLimit);

  const filterItem = (e) => {
    const textContent = e.target.textContent.toLowerCase();
    const dataFilter = [...dataProductDefault].filter((value) => {
      return value.type === textContent;
    });

    setOffset(0);
    setLimit(numberLimit);

    if (!filter) {
      setFilter([`${textContent}`]);
      setDataProduct(
        [...dataProduct].filter((value) => {
          return value.type === textContent;
        })
      );
      setDataProductFilter(
        [...dataProduct].filter((value) => {
          return value.type === textContent;
        })
      );
    } else if (!filter.includes(`${textContent}`) && !filterPrice) {
      setFilter([...filter, `${textContent}`]);
      setDataProduct([...dataProduct].concat(dataFilter));
      setDataProductFilter([...dataProduct].concat(dataFilter));
    } else if (!filter.includes(`${textContent}`) && filterPrice) {
      const dataFilterPrice = [...dataFilter].filter((value) => {
        return (
          value.price > Number(filterPrice.priceMin) &&
          value.price < Number(filterPrice.priceMax)
        );
      });
      setFilter([...filter, `${textContent}`]);
      setDataProduct([...dataProduct].concat(dataFilterPrice));
      setDataProductFilter([...dataProduct].concat(dataFilter));
    }
  };

  const removeFilterPrice = async () => {
    setFilterPrice(false);
    if (filter) {
      let filterTypeCurren = [];
      let test = [];

      await filter.map((value) => {
        return filterTypeCurren.push(
          dataProductDefault.filter((data) => {
            return value === data.type;
          })
        );
      });
      await filterTypeCurren.map((value) => {
        return value.map((data) => {
          return test.push(data);
        });
      });

      setDataProduct(test);
    } else {
      setDataProduct(dataProductDefault);
    }
  };

  const removeFilter = (e) => {
    const textContent = e.target
      .closest(".product__filter-button")
      .textContent.toLowerCase();

    setFilter(
      [...filter].filter((value) => {
        return value !== textContent.slice(0, textContent.length - 1);
      })
    );
    setDataProduct(
      [...dataProduct].filter((value) => {
        return value.type !== textContent.slice(0, textContent.length - 1);
      })
    );

    if (filter.length === 1) {
      setDataProduct(dataProductDefault);
      setFilter(false);
    }
  };

  const removeAllFilter = () => {
    setDataProduct(dataProductDefault);
    setDataProductFilter(dataProductDefault);
    setFilter(false);
    setFilterPrice(false);
    document.querySelector('.product__left').classList.remove('is-show');
  };

  const handleFilterPrice = () => {
    const priceMin = document.querySelectorAll(".product__priceMin")[0].value;
    const priceMax = document.querySelectorAll(".product__priceMax")[0].value;

    setOffset(0);
    setLimit(numberLimit);
    setFilterPrice({ priceMin: priceMin, priceMax: priceMax });
    setDataProduct(
      [...dataProductFilter].filter((value) => {
        return value.price > Number(priceMin) && value.price < Number(priceMax);
      })
    );
  };

  const handleSticky = () => {
    document.querySelector('.product__left').classList.toggle('is-show');
  };

  const sortPrice = (e) => {
    e.preventDefault();
    const sortAsc = [...dataProduct].sort((a, b) => a.price - b.price);
    const sortDesc = [...dataProduct].sort((a, b) => b.price - a.price);

    setOffset(0);
    setLimit(numberLimit);
    if (e.target.dataset.sortPrice === "asc") {
      setDataProduct(sortAsc);
    } else if (e.target.dataset.sortPrice === "desc") {
      setDataProduct(sortDesc);
    } else {
      filter
        ? setDataProduct(dataProductFilter)
        : setDataProduct(dataProductDefault);
    }
  };

  const changePage = (e) => {
    setOffset(numberLimit * e.target.textContent - 12);
    setLimit(numberLimit * e.target.textContent);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const nextPage = () => {
    setOffset(offset + 12);
    setLimit(limit + 12);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const prevPage = () => {
    setOffset(offset - 12);
    setLimit(limit - 12);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/products');
        setDataProduct(res.data);
        setDataProductDefault(res.data);
        setPaginationItem(
          new Array(Math.ceil(res.data.length / numberLimit)).fill(null)
        );
      } catch (error) {
        console.error(error);
      }
    };

    if (!filter && !dataProduct) {
      setTimeout(() => {
        getProduct();
      }, 1000);
    } else {
      setPaginationItem(
        new Array(Math.ceil(dataProduct.length / numberLimit)).fill(null)
      );
    }

  }, [filter, offset, dataProduct]);

  return (
    <>
      <div className="product">
        <div onClick={handleSticky} className="product__sticky">
          Filter
        </div>
        <div className={`product__left`}>
          <div className="product__leftTop">
            <div onClick={removeAllFilter}>Clear all</div>
            <div onClick={handleSticky}>Done</div>
          </div>
          <div className="product__left-filter">
            <div className="product__status">
              <header>
                <FontAwesomeIcon icon={faStar} /> status
              </header>
              <ul className="product__statusBody">
                <li>Buy now</li>
                <li>On auction</li>
                <li>New</li>
                <li>Has offers</li>
              </ul>
            </div>
            <div className="product__collection">
              <header>
                <FontAwesomeIcon icon={faStream} /> Collection
              </header>
              <ul className="product__collectionBody">
                <li onClick={filterItem}>
                  <i>
                    <FontAwesomeIcon icon={faLeaf} />
                  </i>
                  Hong my nhan
                </li>
                <li onClick={filterItem}>
                  <i>
                    <FontAwesomeIcon icon={faLeaf} />
                  </i>
                  Phu tho
                </li>
                <li onClick={filterItem}>
                  <i>
                    <FontAwesomeIcon icon={faLeaf} />
                  </i>
                  Bao duy
                </li>
                <li onClick={filterItem}>
                  <i>
                    <FontAwesomeIcon icon={faLeaf} />
                  </i>
                  Bach tuyet
                </li>
                <li onClick={filterItem}>
                  <i>
                    <FontAwesomeIcon icon={faLeaf} />
                  </i>
                  Hong yen thuy
                </li>
                <li onClick={filterItem}>
                  <i>
                    <FontAwesomeIcon icon={faLeaf} />
                  </i>
                  Co do
                </li>
                <li onClick={filterItem}>
                  <i>
                    <FontAwesomeIcon icon={faLeaf} />
                  </i>
                  A hau
                </li>
                <li onClick={filterItem}>
                  <i>
                    <FontAwesomeIcon icon={faLeaf} />
                  </i>
                  Mat trau
                </li>
              </ul>
            </div>
            <div className="product__priceFilter">
              <header>
                <FontAwesomeIcon icon={faDollarSign} /> Price
              </header>
              <Dropdown className="product__priceCurrency">
                <Dropdown.Toggle id="dropdown-basic">
                  Ether (ETH)
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">Dollar ($)</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <div className="product__priceInput">
                <div>
                  <input
                    className="product__priceMin"
                    type="number"
                    placeholder=" Min"
                  />{" "}
                  to
                  <input
                    className="product__priceMax"
                    type="number"
                    placeholder=" Max"
                  />
                </div>
                <div onClick={handleFilterPrice}>Apply</div>
              </div>
            </div>
          </div>
        </div>
        <div className="product__right">
          <div className="product__topRight">
            <div className="product__filter-item">
              <div>
                {filter
                  ? filter.map((value, index) => {
                      return (
                        <div key={index} className="product__filter-button">
                          {value}{" "}
                          <FontAwesomeIcon
                            icon={faTimes}
                            onClick={removeFilter}
                          />
                        </div>
                      );
                    })
                  : null}
                {filterPrice ? (
                  <div className="product__filter-button">
                    USD: ${filterPrice.priceMin} - ${filterPrice.priceMax}{" "}
                    <FontAwesomeIcon
                      icon={faTimes}
                      onClick={removeFilterPrice}
                    />
                  </div>
                ) : null}
                {filter || filterPrice ? (
                  <div className="product__clear-all" onClick={removeAllFilter}>
                    Clear all
                  </div>
                ) : null}
              </div>
            </div>
            <div className="product__sortby">
              <Dropdown>
                <Dropdown.Toggle
                  className="product__rightBtn"
                  id="dropdown-basic"
                >
                  All items
                </Dropdown.Toggle>

                <Dropdown.Menu className="product__rightBtnBox">
                  <Dropdown.Item href="#/action-1">Single items</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Bundles</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <Dropdown>
                <Dropdown.Toggle
                  className="product__rightBtn"
                  id="dropdown-basic"
                >
                  Sort by
                </Dropdown.Toggle>

                <Dropdown.Menu className="product__rightBtnBox">
                  <Dropdown.Item onClick={sortPrice} data-sort-price="default">
                    Sort default
                  </Dropdown.Item>
                  <Dropdown.Item onClick={sortPrice} data-sort-price="asc">
                    Price: Low to High
                  </Dropdown.Item>
                  <Dropdown.Item onClick={sortPrice} data-sort-price="desc">
                    Price: High to Low
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </div>
          <div className="product__bottomRight">
            <div className="productData__box">
              <div className="row productData__row">
                <ListProduct
                  dataProduct={dataProduct}
                  offset={offset}
                  limit={limit}
                />
              </div>
            </div>
          </div>
          <div className="product__pagination">
            {paginationItem ? (
              <ul>
                <li
                  className={`product__pagination-prev ${
                    offset === 0 ? "disable" : ""
                  }`}
                  onClick={prevPage}
                  data-page="prev"
                >
                  <FontAwesomeIcon icon={faChevronLeft} />
                </li>
                {paginationItem.map((value, index) => {
                  return (
                    <li
                      key={index}
                      className={`product__pagination-item ${
                        (index + 1) * 12 === limit ? "current" : ""
                      }`}
                      onClick={changePage}
                    >
                      {index + 1}
                    </li>
                  );
                })}
                <li
                  className={`product__pagination-next ${
                    offset / numberLimit + 1 === paginationItem.length
                      ? "disable"
                      : ""
                  }`}
                  onClick={nextPage}
                  data-page="next"
                >
                  <FontAwesomeIcon icon={faChevronRight} />
                </li>
              </ul>
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
};

export default Shop;
