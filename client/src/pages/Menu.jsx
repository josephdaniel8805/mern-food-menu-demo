import { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { ThemeContext } from '../context/ThemeContext'
import FoodCard from '../components/FoodCard'

const API_URL = 'http://localhost:5000/api/foods'

const Menu = () => {
  const { colors } = useContext(ThemeContext)

  const [foods, setFoods] = useState([])
  const [name, setName] = useState('')
  const [price, setPrice] = useState('')

  // FETCH foods on page load
  useEffect(() => {
    fetchFoods()
  }, [])

  const fetchFoods = async () => {
    const res = await axios.get(API_URL)
    setFoods(res.data)
  }

  const handleAddFood = async (e) => {
    e.preventDefault()
    if (!name || !price) return

    await axios.post(API_URL, {
      name,
      price: Number(price)
    })

    setName('')
    setPrice('')
    fetchFoods()
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

      {/* Cards */}
      <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
        {foods.map(food => (
          <FoodCard
            key={food._id}
            food={food}
            onDelete={fetchFoods}
          />
        ))}
      </div>
    </div>
  )
}

export default Menu
