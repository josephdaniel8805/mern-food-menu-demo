import { useContext, useState } from 'react'
import { ThemeContext } from '../context/ThemeContext'
import FoodCard from '../components/FoodCard'

const Menu = () => {
  const { colors } = useContext(ThemeContext)

  const [foods, setFoods] = useState([
    { id: 1, name: 'Burger', price: 120 },
    { id: 2, name: 'Pizza', price: 250 }
  ])

  const [name, setName] = useState('')
  const [price, setPrice] = useState('')

  const handleAddFood = (e) => {
    e.preventDefault()

    if (!name || !price) return

    setFoods(prev => [
      ...prev,
      {
        id: Date.now(),
        name,
        price: Number(price)
      }
    ])

    setName('')
    setPrice('')
  }

  return (
    <div
      style={{
        minHeight: '100vh',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: colors.primary,
        padding: '2rem'
      }}
    >
      {/* Title */}
      <h1 style={{ color: colors.light, marginBottom: '1rem' }}>
        Food Menu
      </h1>

      {/* Add Food Form */}
      <form
        onSubmit={handleAddFood}
        style={{
          display: 'flex',
          gap: '1rem',
          marginBottom: '2rem'
        }}
      >
        <input
          type="text"
          placeholder="Food name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{
            padding: '0.5rem',
            borderRadius: '0.4rem',
            border: 'none',
            flex: 1
          }}
        />

        <input
          type="number"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          style={{
            padding: '0.5rem',
            borderRadius: '0.4rem',
            border: 'none',
            width: '8rem'
          }}
        />

        <button
          type="submit"
          style={{
            padding: '0.5rem 1rem',
            backgroundColor: colors.accent,
            border: 'none',
            borderRadius: '0.4rem',
            cursor: 'pointer'
          }}
        >
          Add
        </button>
      </form>

      {/* Cards Container */}
      <div
        style={{
          display: 'flex',
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
