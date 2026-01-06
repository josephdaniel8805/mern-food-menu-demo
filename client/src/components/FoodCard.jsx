import axios from 'axios'
import { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'

const API_URL = 'http://localhost:5000/api/foods'

const FoodCard = ({ food, onDelete }) => {
  const { colors } = useContext(ThemeContext)

  const handleDelete = async () => {
    await axios.delete(`${API_URL}/${food._id}`)
    onDelete()
  }

  return (
    <div
      style={{
        backgroundColor: colors.secondary,
        padding: '1.2rem',
        borderRadius: '0.75rem',
        color: colors.light,
        width: '16rem'
      }}
    >
      <h3>{food.name}</h3>
      <p>₹ {food.price}</p>

      <button
        onClick={handleDelete}
        style={{
          marginTop: '0.8rem',
          padding: '0.4rem 0.8rem',
          backgroundColor: colors.accent,
          border: 'none',
          borderRadius: '0.4rem',
          cursor: 'pointer'
        }}
      >
        Delete
      </button>
    </div>
  )
}

export default FoodCard
