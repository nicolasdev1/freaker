import Sequelize from 'sequelize'
import config from '../config/config'

import User from '../models/User'
import Product from '../models/Product'
import Order from '../models/Order'

const connection = new Sequelize(config)

User.init(connection)
Product.init(connection)
Order.init(connection)

User.associate(connection.models)
Order.associate(connection.models)

export default connection
