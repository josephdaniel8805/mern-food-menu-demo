import { useContext, useState } from 'react'
import { ThemeContext } from '../context/ThemeContext'
import FoodCard from '../components/FoodCard'

const Menu = () => {
  const { colors } = useContext(ThemeContext)

  const [foods, setFoods] = useState([
    { id: 1, name: 'Burger', price: 120 },
    { id: 2, name: 'Pizza', price: 250 },
    { id: 3, name: 'Pasta', price: 180 }
  ])

  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: colors.primary,
        padding: '2rem'
      }}
    >
      {/* Title */}
      <h1
        style={{
          color: colors.light,
          marginBottom: '1.5rem'
        }}
      >
        Food Menu
      </h1>

      {/* Cards Container */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          gap: '1.5rem'
        }}
      >
        {foods.map(food => (
          <FoodCard
            key={food.id}
            food={food}
            setFoods={setFoods}
          />
        ))}
      </div>
    </div>
  )
}

export default Menu
