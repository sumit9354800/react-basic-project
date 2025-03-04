import 'bootstrap/dist/css/bootstrap.min.css'
import Error from './component/error';
import Food from './component/Food';
import Container from './component/Container';
import Input from './component/intput';
import './App.css'
import { useState } from 'react';

function App() {

// let textUseSet = useState("Enter this product");
// let textUse = textUseSet[0];
// let textMethod = textUseSet[1];

let [food,TextUseSet] = useState([]);

const onKeyDown = (event) =>{
if(event.key === 'Enter'){
  let newFood = event.target.value;
  event.target.value = '';
  let newItem = [...food , newFood];
  newFood = '';
  TextUseSet(newItem);
  console.log(newFood);
}
}
return (<><Container>
  <h1>Healthy Food</h1>
  <Input hendalKeydown={onKeyDown}></Input>
  <Error item={food} ></Error>
    <Food item={food} ></Food>
  </Container>
  <Container>
        <p>
        fruit. lean meats and poultry, fish, eggs, tofu, nuts and seeds, legumes or beans. grain cereal foods, mostly wholegrain or high cereal fibre varieties. milk, yoghurt, cheese or alternatives, mostly reduced fat.
        </p>     
  </Container>
  </>
)
}

export default App
