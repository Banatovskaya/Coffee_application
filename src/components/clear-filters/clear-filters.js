import "./clear-filters.css"

const ClearFilters = (props) => {
    return (
        <button className='clear_filters'
        style={{display: props.visibleClearFilters? "" : 'none' }}
        onClick={()=>props.clearFilters()}
        >clear filters X </button>
    )
}
export default ClearFilters;