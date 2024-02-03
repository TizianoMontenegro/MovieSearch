
const defaultConfig = {
    size: 35,
    color: '#fff',
}
/*
export const Icon = (size = iconSizes, color = defaultColor) => {
     return(

     )
}
*/
export const BackIcon = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-arrow-back" width={defaultConfig.size} height={defaultConfig.size} viewBox="0 0 24 24" strokeWidth="1.5" stroke={defaultConfig.color} fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
        <path d="M9 11l-4 4l4 4m-4 -4h11a4 4 0 0 0 0 -8h-1" />
    </svg>
    )
}
