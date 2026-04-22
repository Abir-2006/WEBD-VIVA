import React from 'react';

export default function RecipeCard({ name, time, servings, image, description }) {
  return (
    <div className="col-md-4 mb-4">
      <div className="recipe-card">
        <img src={image} alt={name} />
        <div className="recipe-card-body">
          <h3 className="recipe-title">{name}</h3>
          <div className="recipe-meta">
            <i className="fas fa-clock"></i> {time} mins |
            <i className="fas fa-user"></i> {servings} servings
          </div>
          <p>{description}</p>

          {/* Keep data-recipe & btn-apply so existing L3.js still finds this button */}
          <button className="btn btn-apply" data-recipe={name} style={{ backgroundColor: "#ff4f4f" , color: "white"}}>
            <i className="fas fa-heart me-2"></i>Apply Recipe
          </button>
        </div>
      </div>
      
    </div>
    
  );
}

// export default function RecipeCard(props) {
//   return (
//     <div className="col-md-4 mb-4">
//       <div className="recipe-card">
//         <img src={props.image} alt={props.name} />
//         <div className="recipe-card-body">
//           <h3 className="recipe-title">{props.name}</h3>
//           <div className="recipe-meta">
//             <i className="fas fa-clock"></i> {props.time} mins |
//             <i className="fas fa-user"></i> {props.servings} servings
//           </div>
//           <p>{description}</p>

//           {/* Keep data-recipe & btn-apply so existing L3.js still finds this button */}
//           <button className="btn btn-apply" data-recipe={props.name} style={{ backgroundColor: "#ff4f4f" , color: "white"}}>
//             <i className="fas fa-heart me-2"></i>Apply Recipe
//           </button>
//         </div>
//       </div>
      
//     </div>
    
//   );
// }
