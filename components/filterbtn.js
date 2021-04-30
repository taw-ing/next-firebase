import classnames from 'classnames'

const FilterButton = ({children, active, topic, filterFunction}) => {
  return(
     <button type="button" 
          className={classnames('btn','btn-sm', 'm-1',{'btn-dark':active,'btn-light':!active})}
          onClick={()=>filterFunction(topic)}
          href="#">
          {children}
    </button>

  )
}
export default FilterButton
