const Router = require('express')
const router = Router()

const SalesAnalyticsController = require('../controllers/SalesAnalyticsController')
router.get('/sales/total-revenue', SalesAnalyticsController.getTotalRevenue)
router.get('/sales/quantity-by-product', SalesAnalyticsController.getSoldQuantitiesByProduct)
router.get('/sales/top-products', SalesAnalyticsController.getTopProducts)
router.get('/sales/average-price', SalesAnalyticsController.getAveragePrice)
router.get('/sales/revenue-by-month', SalesAnalyticsController.getRevenueByMonth)
router.get('/sales/highest-quantity-sold/:date', SalesAnalyticsController.getHighestQuantitySold)
router.get('/sales/department-salary-expense', SalesAnalyticsController.getSalaryExpenseByDepartment)

module.exports = router;