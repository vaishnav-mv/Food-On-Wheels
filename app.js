import React from "react";
import ReactDOM from "react-dom/client"

const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src="https://img.freepik.com/free-vector/food-shopping-logo-template-design_460848-10299.jpg"></img>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

//when you are giving inline css, you should give it as an object
const stylecard = {
    backgroundColor: "yellow"
}

const resList = [{
    "card": {
      "card": {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        "info": {
          "id": "139558",
          "name": "Dindigul Thalappakatti",
          "cloudinaryImageId": "exhzkyd9pjoqlobruy4v",
          "locality": "HSR Layout",
          "areaName": "HSR Layout",
          "costForTwo": "₹650 for two",
          "cuisines": [
            "Biryani",
            "Barbecue",
            "South Indian",
            "Chinese",
            "North Indian"
          ],
          "avgRating": 4.3,
          "parentId": "332",
          "avgRatingString": "4.3",
          "totalRatingsString": "8.4K+",
          "promoted": true,
          "adTrackingId": "cid=25904836~p=1~adgrpid=25904836#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=139558~eid=b66607d8-d6fe-4d8a-9a19-7cb9ba4df6a5~srvts=1741340206676~collid=83639",
          "sla": {
            "deliveryTime": 18,
            "lastMileTravel": 0.7,
            "serviceability": "SERVICEABLE",
            "slaString": "15-20 mins",
            "lastMileTravelString": "0.7 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2025-03-08 01:00:00",
            "opened": true
          },
          "badges": {
            "imageBadges": [
              {
                "imageId": "bolt/Bolt%20Listing%20badge@3x.png",
                "description": "bolt!"
              }
            ]
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "imageBased": {
                "badgeObject": [
                  {
                    "attributes": {
                      "imageId": "bolt/Bolt%20Listing%20badge@3x.png",
                      "description": "bolt!"
                    }
                  }
                ]
              },
              "textExtendedBadges": {
                
              },
              "textBased": {
                
              }
            }
          },
          "aggregatedDiscountInfoV3": {
            "header": "ITEMS",
            "subHeader": "AT ₹179",
            "logoCtx": {
              "text": "BENEFITS"
            }
          },
          "orderabilityCommunication": {
            "title": {
              
            },
            "subTitle": {
              
            },
            "message": {
              
            },
            "customIcon": {
              
            },
            "commsStyling": {
              
            }
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
              "lottie": {
                
              },
              "video": {
                
              }
            }
          },
          "reviewsSummary": {
            
          },
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {
            
          },
          "externalRatings": {
            "aggregatedRating": {
              "rating": "4.2",
              "ratingCount": "6.7K+"
            },
            "source": "GOOGLE",
            "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
          },
          "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          "campaignId": "25904836"
        },
        "analytics": {
          
        },
        "cta": {
          "link": "swiggy://menu?restaurant_id=139558&source=collection&query=Biryani",
          "text": "RESTAURANT_MENU",
          "type": "DEEPLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
      },
      "relevance": {
        "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
        "sectionId": "MENU_RETURN_FOOD"
      }
    }
  },
  {
    "card": {
      "card": {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        "info": {
          "id": "142291",
          "name": "Aroma's Hyderabad House",
          "cloudinaryImageId": "jdfi5bh0hmdet7g7qk5z",
          "locality": "Sector 4",
          "areaName": "HSR",
          "costForTwo": "₹500 for two",
          "cuisines": [
            "Biryani",
            "Hyderabadi",
            "Mughlai",
            "Chinese"
          ],
          "avgRating": 4.1,
          "parentId": "71",
          "avgRatingString": "4.1",
          "totalRatingsString": "14K+",
          "sla": {
            "deliveryTime": 12,
            "lastMileTravel": 0.1,
            "serviceability": "SERVICEABLE",
            "slaString": "10-15 mins",
            "lastMileTravelString": "0.1 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2025-03-07 16:30:00",
            "opened": true
          },
          "badges": {
            "imageBadges": [
              {
                "imageId": "bolt/Bolt%20Listing%20badge@3x.png",
                "description": "bolt!"
              }
            ]
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "textBased": {
                
              },
              "imageBased": {
                "badgeObject": [
                  {
                    "attributes": {
                      "imageId": "bolt/Bolt%20Listing%20badge@3x.png",
                      "description": "bolt!"
                    }
                  }
                ]
              },
              "textExtendedBadges": {
                
              }
            }
          },
          "aggregatedDiscountInfoV3": {
            "header": "₹125 OFF",
            "subHeader": "ABOVE ₹249",
            "discountTag": "FLAT DEAL",
            "logoCtx": {
              "text": "BENEFITS"
            }
          },
          "orderabilityCommunication": {
            "title": {
              
            },
            "subTitle": {
              
            },
            "message": {
              
            },
            "customIcon": {
              
            },
            "commsStyling": {
              
            }
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
              "lottie": {
                
              },
              "video": {
                
              }
            }
          },
          "reviewsSummary": {
            
          },
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {
            
          },
          "externalRatings": {
            "aggregatedRating": {
              "rating": "--"
            }
          },
          "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
          
        },
        "cta": {
          "link": "swiggy://menu?restaurant_id=142291&source=collection&query=Biryani",
          "text": "RESTAURANT_MENU",
          "type": "DEEPLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
      },
      "relevance": {
        "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
        "sectionId": "MENU_RETURN_FOOD"
      }
    }
  },
  {
    "card": {
      "card": {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        "info": {
          "id": "994419",
          "name": "FreshMenu",
          "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/3/5/dc23bbe1-04ba-4414-8c26-7cf9b4118129_994419.jpg",
          "locality": "Bommanahalli",
          "areaName": "Bommanahalli",
          "costForTwo": "₹250 for two",
          "cuisines": [
            "Continental",
            "Chinese",
            "Oriental",
            "Asian",
            "Healthy Food",
            "sandwich",
            "Indian",
            "Desserts"
          ],
          "avgRating": 3.9,
          "parentId": "398",
          "avgRatingString": "3.9",
          "totalRatingsString": "256",
          "promoted": true,
          "adTrackingId": "cid=26112582~p=3~adgrpid=26112582#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=994419~eid=37fb7c91-d00c-4020-9905-889e56985526~srvts=1741340206676~collid=83639",
          "sla": {
            "deliveryTime": 46,
            "lastMileTravel": 4.4,
            "serviceability": "SERVICEABLE",
            "slaString": "45-50 mins",
            "lastMileTravelString": "4.4 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2025-03-07 23:59:00",
            "opened": true
          },
          "badges": {
            
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "textBased": {
                
              },
              "imageBased": {
                
              },
              "textExtendedBadges": {
                
              }
            }
          },
          "aggregatedDiscountInfoV3": {
            "header": "ITEMS",
            "subHeader": "AT ₹59",
            "logoCtx": {
              "text": "BENEFITS"
            }
          },
          "orderabilityCommunication": {
            "title": {
              
            },
            "subTitle": {
              
            },
            "message": {
              
            },
            "customIcon": {
              
            },
            "commsStyling": {
              
            }
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
              "lottie": {
                
              },
              "video": {
                
              }
            }
          },
          "reviewsSummary": {
            
          },
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "isNewlyOnboarded": true,
          "restaurantOfferPresentationInfo": {
            
          },
          "externalRatings": {
            "aggregatedRating": {
              "rating": "--"
            }
          },
          "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          "campaignId": "26112582"
        },
        "analytics": {
          
        },
        "cta": {
          "link": "swiggy://menu?restaurant_id=994419&source=collection&query=Biryani",
          "text": "RESTAURANT_MENU",
          "type": "DEEPLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
      },
      "relevance": {
        "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
        "sectionId": "MENU_RETURN_FOOD"
      }
    }
  },
  {
    "card": {
      "card": {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        "info": {
          "id": "36136",
          "name": "Raichur Biryani House",
          "cloudinaryImageId": "baba2324130490fbf8db0b51d9448433",
          "locality": "HSR Layout",
          "areaName": "HSR Layout",
          "costForTwo": "₹300 for two",
          "cuisines": [
            "Biryani",
            "Chinese",
            "South Indian"
          ],
          "avgRating": 4,
          "parentId": "164769",
          "avgRatingString": "4.0",
          "totalRatingsString": "1.8K+",
          "sla": {
            "deliveryTime": 14,
            "lastMileTravel": 0.3,
            "serviceability": "SERVICEABLE",
            "slaString": "10-15 mins",
            "lastMileTravelString": "0.3 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2025-03-07 16:30:00",
            "opened": true
          },
          "badges": {
            "imageBadges": [
              {
                "imageId": "bolt/Bolt%20Listing%20badge@3x.png",
                "description": "bolt!"
              }
            ]
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "imageBased": {
                "badgeObject": [
                  {
                    "attributes": {
                      "description": "bolt!",
                      "imageId": "bolt/Bolt%20Listing%20badge@3x.png"
                    }
                  }
                ]
              },
              "textExtendedBadges": {
                
              },
              "textBased": {
                
              }
            }
          },
          "aggregatedDiscountInfoV3": {
            "header": "50% OFF",
            "subHeader": "UPTO ₹100",
            "logoCtx": {
              "text": "BENEFITS"
            }
          },
          "orderabilityCommunication": {
            "title": {
              
            },
            "subTitle": {
              
            },
            "message": {
              
            },
            "customIcon": {
              
            },
            "commsStyling": {
              
            }
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
              "lottie": {
                
              },
              "video": {
                
              }
            }
          },
          "reviewsSummary": {
            
          },
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {
            
          },
          "externalRatings": {
            "aggregatedRating": {
              "rating": "4.1",
              "ratingCount": "600"
            },
            "source": "GOOGLE",
            "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
          },
          "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
          
        },
        "cta": {
          "link": "swiggy://menu?restaurant_id=36136&source=collection&query=Biryani",
          "text": "RESTAURANT_MENU",
          "type": "DEEPLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
      },
      "relevance": {
        "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
        "sectionId": "MENU_RETURN_FOOD"
      }
    }
  },
  {
    "card": {
      "card": {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        "info": {
          "id": "654809",
          "name": "Meghana Foods",
          "cloudinaryImageId": "iivuhjc2mswi9lublktf",
          "locality": "Sarjapur Road",
          "areaName": "Sarjapur Road",
          "costForTwo": "₹500 for two",
          "cuisines": [
            "Biryani",
            "Andhra",
            "South Indian",
            "Chinese",
            "Seafood"
          ],
          "avgRating": 4.6,
          "parentId": "635",
          "avgRatingString": "4.6",
          "totalRatingsString": "32K+",
          "promoted": true,
          "adTrackingId": "cid=25901824~p=4~adgrpid=25901824#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=654809~eid=81a8a0d2-21f4-4b99-ab47-3dd948594d77~srvts=1741340206676~collid=83639",
          "sla": {
            "deliveryTime": 32,
            "lastMileTravel": 4.8,
            "serviceability": "SERVICEABLE",
            "slaString": "30-35 mins",
            "lastMileTravelString": "4.8 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2025-03-08 01:30:00",
            "opened": true
          },
          "badges": {
            "imageBadges": [
              {
                "imageId": "Rxawards/_CATEGORY-Biryani.png",
                "description": "Delivery!"
              }
            ]
          },
          "isOpen": true,
          "aggregatedDiscountInfoV2": {
            
          },
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "textBased": {
                
              },
              "imageBased": {
                "badgeObject": [
                  {
                    "attributes": {
                      "imageId": "Rxawards/_CATEGORY-Biryani.png",
                      "description": "Delivery!"
                    }
                  }
                ]
              },
              "textExtendedBadges": {
                
              }
            }
          },
          "orderabilityCommunication": {
            "title": {
              
            },
            "subTitle": {
              
            },
            "message": {
              
            },
            "customIcon": {
              
            },
            "commsStyling": {
              
            }
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
              "lottie": {
                
              },
              "video": {
                
              }
            }
          },
          "reviewsSummary": {
            
          },
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {
            
          },
          "externalRatings": {
            "aggregatedRating": {
              "rating": "4.5",
              "ratingCount": "3.3K+"
            },
            "source": "GOOGLE",
            "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
          },
          "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          "campaignId": "25901824"
        },
        "analytics": {
          
        },
        "cta": {
          "link": "swiggy://menu?restaurant_id=654809&source=collection&query=Biryani",
          "text": "RESTAURANT_MENU",
          "type": "DEEPLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
      },
      "relevance": {
        "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
        "sectionId": "MENU_RETURN_FOOD"
      }
    }
  }
]

const RestaurantCard = (props) => { //reusable card
    const {resData}=props
    const {name,cuisines,avgRating,cloudinaryImageId}=resData?.card?.card?.info
    return (
        <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
            {/* // <div className="res-card" style={stylecard}>     */}
            <img className="res-logo"
                alt="res-logo"
                src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+cloudinaryImageId}></img>
            <h3>{name}</h3>
            <h3>{cuisines.join(",")}</h3>
            <h3>{avgRating}</h3>
            
        </div>
    )
}

const Body = () => {
    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
                {
                    resList.map(restaurant=><RestaurantCard key={restaurant.card.card.info.id} resData={restaurant}></RestaurantCard>)

                }
            </div>
        </div>
    )
}

const AppLayout = () => {
    return <div className="app">
        <Header></Header>
        <Body></Body>
    </div>
}
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<AppLayout></AppLayout>)