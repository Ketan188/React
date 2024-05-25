import RestaurantCard from './RestaurantCard'
import { restaurantsList } from './config'

const Body = () => {
    return (
        <>
            <div className="body-container">
                {
                    restaurantsList.map(restaurant => {
                        //using spred props
                        return <RestaurantCard {...restaurant.info} key={restaurant.info.id}/>

                        // return <RestaurantCard restaurnatDetails={restaurant} />
                    })
                }
            </div>  
        </>
    )
}

export default Body;