import ArticleController from './ArticleController'
import ProductController from './ProductController'
import ServiceController from './ServiceController'
import Settings from './Settings'


const Controllers = {
    ArticleController: Object.assign(ArticleController, ArticleController),
    ProductController: Object.assign(ProductController, ProductController),
    ServiceController: Object.assign(ServiceController, ServiceController),
    Settings: Object.assign(Settings, Settings),
}

export default Controllers