import Carousel from './components/Carousel'
import Content from './components/Content'
import FeaturedProducts from './components/FeaturedProducts'
import Features from './components/Features'
import Footer from './components/Footer'
import Header from './components/Header'
import HotDeals from './components/HotDeals'
import ImageViewer from './components/ImageViewer'
import Login from './components/login'
import NewArrival from './components/NewArrival'
import ProductSuggestion1 from './components/ProductSuggestion1'
import SearchBar from './components/SearchBar'
import SearchResult from './components/SearchResult'
import SideNavFilter from './components/SideNavFilter'
import TopNav from './components/TopNav'
import TopProducts from './components/TopProducts'

export const COMPONENTS_CONFIG = [
  {
    name: 'Carousel',
    description: '',
    component: Carousel,
    propsType:[
        {
            type: "data",
            api: "",
            limit: "",
            propKey: "apiConfig"
        },
        {
            type: 'config',
            field: 'boolean',
            defaultValue: false,
            propKey: "reversed"
        },
        {
            type: 'config',
            field: 'number',
            defaultValue: 5000,
            propKey: "interval"
        },
    ]
  }
]
