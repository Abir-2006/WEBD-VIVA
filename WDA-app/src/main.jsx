
import React from 'react'
import { createRoot } from 'react-dom/client'
import RecipeCard from './components/RecipeCard'
import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.min.css'

// Data for exactly 6 cards (edit descriptions/images as you like)
const recipes = [
  {
    id: 'rajma',
    name: 'Rajma Chawal',
    time: 45,
    servings: 4,
    image: 'https://masalaandchai.com/wp-content/uploads/2025/09/Rajma-Masala.jpg',
    description: 'Spiced kidney bean curry served with steamed basmati rice.'
  },
  {
    id: 'palak',
    name: 'Palak Paneer',
    time: 30,
    servings: 4,
    image: 'https://healthynibblesandbits.com/wp-content/uploads/2020/01/Saag-Paneer-FF.jpg',
    description: 'Creamy spinach gravy cooked with soft paneer cubes.'
  },
  {
    id: 'biryani',
    name: 'Chicken Biryani',
    time: 90,
    servings: 4,
    image: 'https://www.licious.in/blog/wp-content/uploads/2022/06/chicken-hyderabadi-biryani-01.jpg',
    description: 'Fragrant basmati rice layered with spiced marinated chicken, cooked slowly with saffron.'
  },
  {
    id: 'pavbhaji',
    name: 'Pav Bhaji',
    time: 30,
    servings: 4,
    image: 'https://assets.bonappetit.com/photos/63cb14735125107865c0fe8f/1:1/w_2384,h_2384,c_limit/012023-pav-bhaji-lede.jpg',
    description: 'Spiced vegetable mash served with buttered pav.'
  },
  {
    id: 'sandesh',
    name: 'Sandesh',
    time: 30,
    servings: 3,
    image: 'https://s3-ap-south-1.amazonaws.com/betterbutterbucket-silver/chitrangada-kundu147313705757ce49a1c0056.jpeg',
    description: 'Delicate Bengali sweet made from fresh paneer.'
  },
  {
    id: 'chhole',
    name: 'Chhole Bhature',
    time: 40,
    servings: 2,
    image: 'https://thewhiskaddict.com/wp-content/uploads/2024/08/IMG_0727-4-scaled.jpg',
    description: 'Spicy chickpea curry served with fried bhature.'
  },
];

// Render function: maps recipes -> RecipeCard props
function RecipeList() {
  return (
    <div className="row">
      {recipes.map(r => (
        <RecipeCard
          key={r.id}
          name={r.name}
          time={r.time}
          servings={r.servings}
          image={r.image}
          description={r.description}
        />
      ))}
    </div>
  );
}

// Mount to placeholder div in recipes.html
const rootEl = document.getElementById('react-recipes-root');
if (rootEl) {
  const root = createRoot(rootEl);
  root.render(<RecipeList />);
}
