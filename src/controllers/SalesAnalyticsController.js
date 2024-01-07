const {
	GetTotalRevenueService,
	GetSoldQuantitiesService,
	GetTopProductsService,
	GetAveragePriceService,
	GetRevenueByMonthService,
	GetHighestQuantitySoldService,
	GetSalaryExpenseByDepartmentService
} = require('../services/SalesAnalyticsServices');

const getTotalRevenue = async (req, res) => {
	try {
		const result = await GetTotalRevenueService();
		res.status(200).json({ result });
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
}

const getSoldQuantitiesByProduct = async (req, res) => {
	try {
		const result = await GetSoldQuantitiesService();
		res.status(200).json({ result });
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
}

const getTopProducts = async (req, res) => {
	try {
		const result = await GetTopProductsService();
		res.status(200).json({ result });
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
}

const getAveragePrice = async (req, res) => {
	try {
		const result = await GetAveragePriceService();
		res.status(200).json({ result });
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
}

const getRevenueByMonth = async (req, res) => {
	try {
		const result = await GetRevenueByMonthService();
		res.status(200).json({ result });
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
}

const getHighestQuantitySold = async (req, res) => {
	try {
		const result = await GetHighestQuantitySoldService(req.params.date);
		res.status(200).json({ result });
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
}

const getSalaryExpenseByDepartment = async (req, res) => {
	try {
		const result = await GetSalaryExpenseByDepartmentService();
		res.status(200).json({ result });
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
}

module.exports = {
	getTotalRevenue,
	getSoldQuantitiesByProduct,
	getTopProducts,
	getAveragePrice,
	getRevenueByMonth,
	getHighestQuantitySold,
	getSalaryExpenseByDepartment
}