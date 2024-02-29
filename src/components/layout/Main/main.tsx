import "./main.css"
//import "./Home"

const productData = [
  {
    id: 1,
    name: "Snake Plant",
    price: 30,
    stock: 10,
    image: "src/assets/img/Plant1.png",
    description: "A popular and easy-to-care-for plant with long, sword-shaped leaves.",
    category: "Indoor Plants",
    rating: 4.5,
    reviews: [
      {
         id: 1,
          userId: 1,
          rating: 5,
          comment: "Great product! I love it.",
          date: "2023-08-01"
          },
          {
            "id": 2,
          "userId": 2,
          "rating": 4,
          "comment": "I love this for my house.",
          "date": "2023-07-11"
          }
        ],
        "filter": [
          "house plant",
          "direct sun"
        ]
      },
  {
    "id": "2",
    "name": "Monstera Deliciosa",
    "price": "45",
    "stock": "5",
    "image": "/src/assets/img/Plant2.png",
    "description": "A tropical plant with large, fenestrated leaves.",
    "category": "Indoor Plants",
    "rating": "4.8",
    "reviews": [
      {
         "id": 3,
          "userId": 1,
          "rating": 5,
          "comment": "Great product! I love it.",
          "date": "2023-08-01"
          },
          {
            "id": 4,
          "userId": 2,
          "rating": 4,
          "comment": "I love this for my house.",
          "date": "2023-07-11"
          }
        ],
        "filter": [
          "house plant",
          "mid shadow"
        ]
  },
  {
    "id": "3",
    "name": "Fiddle Leaf Fig",
    "price": "65",
    "stock": "3",
    "image": "/src/assets/img/Plant3.png",
    "description": "A tall plant with large, violin-shaped leaves.",
    "category": "Indoor Plants",
    "rating": "4.3",
    "reviews": [
      {
         "id": 5,
          "userId": 1,
          "rating": 5,
          "comment": "Great product! I love it.",
          "date": "2023-08-01"
          },
          {
            "id": 6,
          "userId": 2,
          "rating": 4,
          "comment": "I love this for my house.",
          "date": "2023-07-11"
          }
        ],
        "filter": [
          "garden plant",
          "mid shadow"
        ]
  },
  {
    "id": "4",
    "name": "Pothos",
    "price": "20",
    "stock": "15",
    "image": "/src/assets/img/Plant4.png",
    "description": "A trailing vine with heart-shaped, variegated leaves.",
    "category": "Indoor Plants",
    "rating": "4.6",
    "reviews": [
      {
         "id": 7,
          "userId": 1,
          "rating": 5,
          "comment": "Great product! I love it.",
          "date": "2023-08-01"
          },
          {
            "id": 8,
          "userId": 2,
          "rating": 4,
          "comment": "I love this for my house.",
          "date": "2023-07-11"
          }
        ],
        "filter": [
          "house plant",
          "direct sun"
        ]
  },
  {
    "id": "5",
    "name": "Succulent Collection",
    "price": "25",
    "stock": "8",
    "image": "/src/assets/img/Plant5.png",
    "description": "A set of various small succulent plants.",
    "category": "Indoor Plants",
    "rating": "4.2",
    "reviews":     [
      {
         "id": 9,
          "userId": 1,
          "rating": 5,
          "comment": "Great product! I love it.",
          "date": "2023-08-01"
          },
          {
            "id": 10,
          "userId": 2,
          "rating": 4,
          "comment": "I love this for my house.",
          "date": "2023-07-11"
          }
        ],
        "filter": [
          "house plant",
          "mid shadow"
        ]
  },
  {
    "id": "6",
    "name": "Peace Lily",
    "price": "35",
    "stock": "6",
    "image": "/src/assets/img/Plant6.png",
    "description": "A flowering plant with glossy, dark green leaves.",
    "category": "Indoor Plants",
    "rating": "4.7",
    "reviews": [
      {
         "id":11,
          "userId": 1,
          "rating": 5,
          "comment": "Great product! I love it.",
          "date": "2023-08-01"
          },
          {
            "id":12,
          "userId": 2,
          "rating": 4,
          "comment": "I love this for my house.",
          "date": "2023-07-11"
          }
        ],
        "filter": [
          "house plant",
          "mid shadow"
        ]
  }
]

const userData = [
  [
  {
    "id": "1",
    "name": "John Doe",
    "password": "p@ssw0rd",
    "email": "johndoe@example.com"
  },
  {
    "id": "2",
    "name": "Jane Smith",
    "password": "s3cur3P@ss",
    "email": "janesmith@example.com"
  },
  {
    "id": "3",
    "name": "Michael Johnson",
    "password": "myp@ssw0rd",
    "email": "michaeljohnson@example.com"
  },
  {
    "id": "4",
    "name": "Emily Davis",
    "password": "d@vis123",
    "email": "emilydavis@example.com"
  },
  {
    "id": "5",
    "name": "David Wilson",
    "password": "wilson!23",
    "email": "davidwilson@example.com"
  },
  {
    "id": "6",
    "name": "Sarah Brown",
    "password": "br0wn#12",
    "email": "sarahbrown@example.com"
  },
  {
    "id": "7",
    "name": "Robert Taylor",
    "password": "taylor$45",
    "email": "roberttaylor@example.com"
  },
  {
    "id": "8",
    "name": "Jennifer Clark",
    "password": "clark@67",
    "email": "jenniferclark@example.com"
  }
]
]



export  function Plantsgrid() {
      return (
        <ul className="plants-home">
            {productData.map((plant) => (
                <Plants key={plant.name} plant={plant} />
            ))}
        </ul>
    );
}  
    
    


export default function Plants({plant}) {
  return (
      <div className="plant-card">
        <img className="plant-image" src={plant.image} alt={plant.name} />
          <p className="plant-name">{plant.name}</p>
          <p className="plant-name">{plant.price}€</p>
      </div>
  )
}

export function Background() {
  return (
    <div className="background"></div>
  )
}