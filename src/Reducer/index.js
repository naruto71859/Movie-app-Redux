import {
  add_Movie,
  add_link,
  add_rate,
  add_year,
  add_title,
  delete_Movie,
  edit_Movie,
  search_value,
  RateFilter,
  set_details,

} from "../const/TypeOfAction";


const initState = {
  
  Movies: [
    {
      title: "How It Ends",
      year: " 2018",
      id: 1,
      rate: 1,
      details:false
    },
    {
      title: "Taken 2",
      year: " 2012",
      link: "https://tinyurl.com/wa7m6ct",
      id: 2,
      rate: 4,
      details:false
    },
    {
      title: "Jumanji : Bienvenue dans la jungle",
      year: " 2017",
      link: "https://tinyurl.com/t8gbzdn",
      id: 3,
      rate: 3,
      details:false
    },
    {
      title: "X-Men: Days of Future Past",
      year: " 2014",
      link: "https://tinyurl.com/wzo9kb4",
      id: 4,
      rate: 3,
      details:false
    },
    {
      title: "Joker",
      year: " 2019",
      link: "https://tinyurl.com/u4pr43p",
      id: 5,
      rate: 5,
      details:false
    },
    {
      title: "showshank-Redumption",
      year: " 1994",
      id: 6,
      rate: 5,
      details:false
    }
  ],

  searchValue:'',
  rateValue:0,

  
  title: "",
  year: "",
  link: "",
  rate: 0,

  emptyinputs:false
};
// const counter=0
//  const todoList=[]

const GofList = (state = initState, action) => {
  switch (action.type) {
    
    case add_Movie:

      return (state.title !== '' && state.year !== '' && state.rate !== '')?
      
      {...state, Movies: state.Movies.concat(action.payload) , emptyinputs:false,title:'',year:'' } : {...state, emptyinputs:state.emptyinputs=true};

    case add_title:
      return {...state, title: action.payload };

    case add_year:
      return Object.assign({}, state, { year: action.payload });

    case add_link:
      return Object.assign({}, state, { link: action.payload });

    case add_rate:
      return Object.assign({}, state, { rate: action.payload });

    case delete_Movie:
      return {...state, Movies: state.Movies.filter(el => el.id !== action.payload)};

    case edit_Movie: 
      return{...state,Movies: state.Movies.map(el => (el.id===action.payload.id)? action.payload :el) , title: "",year: ""} 

    case search_value : 
      return Object.assign({}, state, {searchValue: action.payload});

    case RateFilter: 
      return Object.assign({}, state, {rateValue: action.payload});

      case set_details :
        return {...state, Movies: state.Movies.map( el => (el.id === action.payload)?  {...el,details: !el.details} : el)}

    default:
      return state;
  }
};
export default GofList;
