import RestaurantCard from "./RestaurantCard";
import { restaurantsList } from "./config";
import { useState } from "react";

const Body = () => {
  //useState to update variable state

  const [searchText, setSearchText] = useState("");
  const [restaurants, setRestaurants] = useState(restaurantsList);

  function filterResults(testValue, restaurants) {
    const filteredList = restaurants.filter((data) =>
      data.info.name.toLowerCase().includes(testValue.toLowerCase())
    );
    setRestaurants(filteredList);
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
          <button onClick={() => filterResults(searchText, restaurantsList)}>
            Search
          </button>
        </div>
        <div className="card-wrap">
          {restaurants.map((restaurant) => {
            //using spred props
            return (
              <RestaurantCard {...restaurant.info} key={restaurant.info.id} />
            );

            // return <RestaurantCard restaurnatDetails={restaurant} />
          })}
        </div>
      </div>
    </>
  );
};

export default Body;
