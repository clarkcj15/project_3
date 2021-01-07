// import { useRef, useState } from "react";
// export default (props) => {
//     const updateNameInput = useRef(null);
//     const updateIngredientsInput = useRef(null);
//     const updateDirectionsInput = useRef(null);
//     const [token, setToken] = useState('')
//     const updateCocktail = async (event) => {
//     event.preventDefault()
//     const name = updateNameInput.current.value;
//     const ingredients  = updateIngredientsInput.current.value;
//     const directions = updateDirectionsInput.current.value;
//     const body = JSON.stringify({
//         name, ingredients, directions
//     });
//         event.currentTarget.reset(); 
//         try {
//             const response = await fetch(
//             `http://localhost:3000/cocktails/${props.cocktail._id}`,
//             {
//                 method: "PUT",
//                 headers: {
//                     'Content-type': 'application/json',
//                     'authorization': token,
//                 },
//                 body: body,
//             }
//             );
//             const data = await response.json();
//             const filteredCocktails = props.cocktails.filter(
//                 (cocktail) => cocktail._id !== data._id
//             )
//             props.updateCocktails([...filteredCocktails, data])
//         } catch (err) {
//             console.error(err);
//         }
//     };
//         return (
//         <form onSubmit={updateCocktail}>
//             <label>Name:<input type="text" ref={updateNameInput} /></label>
//             <label>Ingredients:<input type="text" ref={updateIngredientsInput} /></label>
//             <label>Directions:<input type="text" ref={updateDirectionsInput} /></label>
//             <input type="submit" value="Update Cocktail" />
//         </form>
//         );
// };