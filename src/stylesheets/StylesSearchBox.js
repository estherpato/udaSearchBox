const SearchBox = {
    display: 'flex',
    flexDirection: 'row',
    minWidth: '350px',
    maxWidth: '800px',
}

const algoliaStyles = {
    style: 'false',
}

const imputIconsBox = {
    flexGrow: '1',
    position: 'relative',
}

const buttonSearch = {
    flexGrow: '0',
     width: '70px',
     height: '35px',
     padding: '5px',
     border: '0px',
     background: '#CA1C24',
     color: 'white',
     textTransform: 'uppercase',
     left: '-66px',
     fontFamily:'Gotham-Bold, Sans Serif'
}

const IconsBox = {
    position: 'absolute',
    right: '0%',
    top: '7px',
    cursor: 'pointer',
    backgroundColor: '#EFF2F7',
    margin:'1px',
}

const placeIconBox = {
    display: 'inline-block',
    verticalAlign: 'middle',
    paddingRight: '15px',
    height: '18px',
    width: '18px',
}

const mapIconBox = {
    display: 'inline-block',
    verticalAlign: 'middle',
    marginRight: '20px',
    height: '18px',
    width: '18px',
    
}

const inputBox = {
    height: '35px',
    padding: '8px',
    backgroundColor: '#EFF2F7',
    border: '0px solid #EFF2F7',
    fontFamily:'Gotham-Light, Sans Serif',
    fontSize:'14px',
    paddingLeft:'10px',
}

const formCadastre = {
    display: 'flex',
}

const inputCadastre = {
    width:'100%',
    height: '35px',
    padding: '0px',
    backgroundColor: '#EFF2F7',
    border: '0px solid #EFF2F7',
    fontFamily:'Gotham-Light, Sans Serif',
    fontSize:'14px',
    paddingLeft:'10px',
}











export {SearchBox,algoliaStyles, imputIconsBox, buttonSearch, placeIconBox, mapIconBox, IconsBox, inputBox,formCadastre,inputCadastre };
