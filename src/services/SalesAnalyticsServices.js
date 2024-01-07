const SalesModel = require('../models/SalesModel');

const GetTotalRevenueService = async () => {

	try {
		const groupStage = {
			$group: {
				_id: null,
				totalRevenue: {
					$sum: '$price'
				}
			}
		}
		const projectionStage = {
			$project: {
				_id: 0
			}
		}
		const res = await SalesModel.aggregate([
			groupStage,
			projectionStage
		])

		return res;
	} catch (error) {
		return { error: error.message }
	}
}

const GetSoldQuantitiesService = async () => {
	try {

		const groupStage = {
			$group: {
				_id: '$product',
				totalQuantity: {
					$sum: '$quantity'
				}
			}
		}
		const res = await SalesModel.aggregate([
			groupStage
		])

		return res;
	} catch (error) {
		return { error: error.message }
	}
}

const GetTopProductsService = async () => {
	try {
		const groupStage = {
			$group: {
				_id: '$product',
				totalRevenue: {
					$sum: {
						$multiply: ['$price', '$quantity']
					}
				},
				totalQuantity: {
					$sum: '$quantity'
				}
			}
		}

		const sortStage = {
			$sort: {
				totalRevenue: -1
			}
		}

		const limitStage = {
			$limit: 5
		}

		const res = await SalesModel.aggregate([
			groupStage,
			sortStage,
			limitStage
		])

		return res;
	} catch (error) {
		return { error: error.message }
	}
}

const GetAveragePriceService = async () => {
	try {
		const groupStage = {
			$group: {
				_id: null,
				averagePrice: {
					$avg: '$price'
				}
			}
		}

		const projectionStage = {
			$project: {
				_id: 0
			}
		}

		const res = await SalesModel.aggregate([
			groupStage,
			projectionStage
		])

		return res;
	} catch (error) {
		return { error: error.message }
	}
}

const GetRevenueByMonthService = async () => {
	try {
		const groupStage = {
			$group: {
				_id: {
					year: {
						$year: '$date'
					},
					month: {
						$month: '$date'
					}
				},
				totalRevenue: {
					$sum: '$price'
				}
			}
		}
		const sortStage = {
			$sort: {
				_id: 1
			}
		}

		const res = await SalesModel.aggregate([
			groupStage,
			sortStage
		])

		return res;
	} catch (error) {
		return { error: error.message }
	}
}

const GetHighestQuantitySoldService = async (date) => {
	try {
		const matchStage = {
			$match: {
				date: {
					$eq: new Date(date)
				}
			}
		}
		const groupStage = {
			$group: {
				_id: { product: '$product' },
				product: {
					$first: '$product'
				},
				totalQuantity: { $sum: '$quantity' },
			}
		}
		const projectionStage = {
			$project: {
				_id: 0
			}
		}

		const sortStage = {
			$sort: {
				totalQuantity: -1
			}
		}

		const limitStage = {
			$limit: 1
		}

		const res = await SalesModel.aggregate([
			matchStage,
			groupStage,
			projectionStage,
			sortStage,
			limitStage
		])

		return res;
	} catch (error) {
		return { error: error.message }
	}
}

const GetSalaryExpenseByDepartmentService = async () => {
	try {
		const groupStage = {
			$group: {
				_id: '$department',
				totalSalary: {
					$sum: '$salary'
				}
			}
		}

		const sortStage = {
			$sort: {
				totalSalary: -1
			}
		}


		const res = await SalesModel.aggregate([
			groupStage,
			sortStage
		])

		return res;
	} catch (error) {
		return { error: error.message }
	}
}

module.exports = {
	GetTotalRevenueService,
	GetSoldQuantitiesService,
	GetTopProductsService,
	GetAveragePriceService,
	GetRevenueByMonthService,
	GetHighestQuantitySoldService,
	GetSalaryExpenseByDepartmentService
}