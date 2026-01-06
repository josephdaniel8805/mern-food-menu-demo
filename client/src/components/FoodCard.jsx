import { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'

const FoodCard = ({ food, setFoods }) => {
  const { colors } = useContext(ThemeContext)

  const handleDelete = () => {
    setFoods(prev => prev.filter(item => item.id !== food.id))
  }

  return (
    <div
      style={{
        backgroundColor: colors.secondary,
        padding: '1.2rem',
        borderRadius: '0.75rem',
        color: colors.light,
        width: '16rem',          // ⬅ controls card size
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between'
      }}
    >
      <div>
        <h3>{food.name}</h3>
        <p>₹ {food.price}</p>
      </div>

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
