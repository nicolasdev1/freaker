import Sequelize from 'sequelize'
import dbConfig from '../config/config'

import User from '../models/User'
import Product from '../models/Product'

const connection = new Sequelize(dbConfig)

User.init(connection)
Product.init(connection)

export default connection
