import RestaurantCard from "./RestaurantCard";
// import { restaurantsList } from "./config";
import { useEffect, useState } from "react";
import Loader from './Loader'



const Body = () => {
  //useState to update variable state
  
  const [searchText, setSearchText] = useState("");
  const [restaurants, setRestaurants] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  
  useEffect(() => {
    getRestaurantList()
  },[])
  
  function filterResults(testValue, restaurants) {
    const filteredList = restaurants.filter((data) =>
      data.info.name.toLowerCase().includes(testValue.toLowerCase())
    );
    setFilteredList(filteredList);
  }
  async function getRestaurantList() {
    const resData = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.0759837&lng=72.8776559&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');
    const jsonData = await resData.json();
    setRestaurants(jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setFilteredList(jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
  }

  return (
    <>
      <div className="body-container">
        <div className="search-bar-wrap">
          <input
            type="text"
            placeholder="Search"
            name="searchbar"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button onClick={() => filterResults(searchText, restaurants)}>
            Search
          </button>
        </div>
        <div className="card-wrap">
          {filteredList.length ? filteredList.map((restaurant) => {
            //using spred props
            return (
              <RestaurantCard {...restaurant.info} key={restaurant.info.id} />
            );

            // return <RestaurantCard restaurnatDetails={restaurant} />
          }) : <Loader/>}
        </div>
      </div>
    </>
  );
};

export default Body;
