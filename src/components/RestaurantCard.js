 import { IMG_CDN_URL } from './config'
 
//  const RestaurantCard = (props) => {
//     return (
//         <>
//             <div className="resto-card-wrap">
//                 <img src={IMG_CDN_URL+props.restaurnatDetails.info.cloudinaryImageId}></img>
//                 <h2>{props.restaurnatDetails.info.name}</h2>
//                 <h4>{props.restaurnatDetails.info.cuisines.join(',')}</h4>
//             </div>
//         </>
//     )
//  }

 //using using spred props

 const RestaurantCard = ({cloudinaryImageId,name, cuisines}) => {
    return (
        <>
            <div className="resto-card-wrap">
                <img src={IMG_CDN_URL+cloudinaryImageId}></img>
                <h2>{name}</h2>
                <h4>{cuisines.join(',')}</h4>
            </div>
        </>
    )
 }

 export default RestaurantCard;