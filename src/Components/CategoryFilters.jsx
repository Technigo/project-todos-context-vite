import moment from 'moment'
import '../Styles/CategoryFilters.css'

export const CategoryFilters = ({ setFilter }) => {
  return (
    <main>
      <div className="wrapper">
        <h2 className="nowDate">{moment().format('MMM YYYY')}</h2>
        <div className="filtersContainer">
          <button onClick={() => setFilter('work')}>
            <i className="fa-solid fa-briefcase icon "></i>
          </button>
          <button onClick={() => setFilter('personal')}>
            <i className="fa-solid fa-house icon"></i>
          </button>
          <button onClick={() => setFilter('health')}>
            <i className="fa-solid fa-heart-pulse icon"></i>
          </button>
          <button onClick={() => setFilter('economy')}>
            <i className="fa-solid fa-coins icon"></i>
          </button>
          <button onClick={() => setFilter('events')}>
            <i className="fa-solid fa-calendar-days icon"></i>
          </button>
        </div>
      </div>
    </main>
  )
}
