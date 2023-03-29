import cors from 'cors'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import express, {Request, Response} from 'express';

dotenv.config()

import login from './routers/login.js'
import add_user from './routers/add_user.js'
import get_user from './routers/get_user.js'
import add_order from './routers/add_order.js'
import get_orders from './routers/get_orders.js'
import add_product from './routers/add_product.js'
import edit_product from './routers/edit_product.js'
import add_cartItem from './routers/add_cartItem.js'
import all_products from './routers/all_products.js'
import edit_cartItem from './routers/edit_cartItem.js'
import all_cartItems from './routers/all_cartItems.js'
import delete_product from './routers/delete_product.js'
import delete_cartItem from './routers/delete_cartItem.js'

const app = express();
app.use(express.json())
app.use(cors());
//#region routers
app.use('/login', login)
app.use('/add_user', add_user)
app.use('/get_user', get_user)
app.use('/add_order', add_order)
app.use('/get_orders', get_orders)
app.use('/add_product', add_product)
app.use('/all_products', all_products)
app.use('/edit_product', edit_product)
app.use('/add_cartItem', add_cartItem)
app.use('/edit_cartItem', edit_cartItem)
app.use('/all_cartItems', all_cartItems)
app.use('/delete_product', delete_product)
app.use('/delete_cartItem', delete_cartItem)
app.use('/', (req: Request, res: Response) => {
  res.status(404).send('endpoint not supported');
});
//#endregion

const port = process.env.SERVER_PORT;
const host = process.env.SERVER_HOST;
const db_url = process.env.DB_URL;
mongoose.connect(`mongodb://localhost:27017/bananadb`) //dotenv
// mongoose.connect(db_url) *does'nt work with env*
  .then(() => console.log("Connected to MongoDB"))
  .catch(err => console.error("Error connecting to MongoDB Atlas:", err));
app.listen(port, () => {
  console.log(`Server listening at http://${host}:${port}`)
});
