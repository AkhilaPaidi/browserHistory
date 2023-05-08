import './index.css'

const UserHistoryLists = props => {
  const {historyDetails, onDeleteHistoryItems} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = historyDetails

  const onDeleteHistory = () => {
    onDeleteHistoryItems(id)
  }

  return (
    <div className="container">
      <li className="domain-container">
        <div className="history-item-container">
          <p className="time">{timeAccessed}</p>
          <img src={logoUrl} alt="domain logo" className="image" />
          <div className="content-card">
            <p className="domain-name">{title}</p>
            <p className="domain">{domainUrl}</p>
          </div>
          <button className="button" type="button" onClick={onDeleteHistory}>
            <img
              src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
              alt="delete"
              className="delete"
            />
          </button>
        </div>
      </li>
    </div>
  )
}

export default UserHistoryLists
