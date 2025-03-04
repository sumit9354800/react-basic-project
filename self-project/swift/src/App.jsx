import { useState } from 'react'
import './App.css'

function App() {

  let text = [
    "The forest was alive with the sounds of rustling leaves and chirping birds. Sunlight filtered through the canopy, casting dappled shadows on the moss-covered ground. A gentle breeze carried the scent of pine and earth, creating a serene atmosphere. In the distance, a stream babbled softly, its clear waters winding through the trees like a silver ribbon.",
  "As artificial intelligence continues to evolve, its impact on society grows more profound. From self-driving cars to personalized healthcare, AI is reshaping industries and improving lives. However, ethical concerns about privacy, job displacement, and decision-making remain at the forefront of discussions. The challenge lies in balancing innovation with responsibility to ensure a future that benefits everyone.",
   "The kitchen was a whirlwind of activity, with pots bubbling on the stove and the aroma of spices filling the air. The chef expertly chopped vegetables, their knife moving in a rhythmic dance. A sizzling pan released the tantalizing smell of garlic and herbs, promising a meal that would delight the senses. Cooking, after all, is not just about nourishment—it's an art form that brings people together.",
   "The night sky stretched endlessly, dotted with countless stars and galaxies. Each twinkling light told a story billions of years in the making, a reminder of the vastness of the cosmos. Scientists continue to explore the mysteries of black holes, dark matter, and the origins of the universe. Yet, despite our advancements, the universe remains an enigma, inviting us to keep searching for answers."
];



let [current,set] = useState(text[0])

 let value = (val)=>{
    set(text[val]);
  }
 value
  return (
    <>
    <div className="container">
    <div className="row">
     <div className="col-5  bg-light p-5">
     <button onClick={()=> value(0)}>Nature</button>
      <button onClick={()=> value(1)}>Technology</button>
      <button onClick={()=> value(2)}>Adventure</button>
      <button onClick={()=> value(3)}>Universe</button>
      <p>
      <p className='text'>{current}</p>
      </p>
     </div>
     </div>
    </div>
    </>
  )
}

export default App
