import DashboardController from './DashboardController'
import ProductController from './ProductController'
import ArticleController from './ArticleController'
import ServiceController from './ServiceController'
import Settings from './Settings'
const Controllers = {
    DashboardController: Object.assign(DashboardController, DashboardController),
ProductController: Object.assign(ProductController, ProductController),
ArticleController: Object.assign(ArticleController, ArticleController),
ServiceController: Object.assign(ServiceController, ServiceController),
Settings: Object.assign(Settings, Settings),
}

export default Controllers