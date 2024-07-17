const sequelize = require('../db');
const {DataTypes} = require('sequelize');

const User = sequelize.define( 'user', {
    user_id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    email: {type: DataTypes.STRING, unique: true},
    password: {type: DataTypes.STRING},
    name: {type: DataTypes.STRING, allowNull: false},
    surname: {type: DataTypes.STRING, allowNull: false},
    middle_name: {type: DataTypes.STRING, allowNull: false},
    country: {type: DataTypes.STRING, allowNull: false},
    city: {type: DataTypes.STRING, allowNull: false},
    role: {type: DataTypes.STRING, allowNull: false, defaultValue: "user"},
});

const Ticket = sequelize.define( 'ticket', {
    ticket_id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    ticketquantity: {type: DataTypes.INTEGER},
    totalprice: {type: DataTypes.INTEGER},
}); 

const Category = sequelize.define( 'category', {
    category_id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    category_name: {type: DataTypes.STRING},
});

const Events = sequelize.define( 'events', {
    event_id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    event_name: {type: DataTypes.STRING, allowNull: false},
    ticketprice: {type: DataTypes.INTEGER, allowNull: false},
    eventdatetime: {type: DataTypes.DATE, allowNull: false},
    event_description: {type: DataTypes.STRING, allowNull: false}, 
    event_city: {type: DataTypes.STRING, allowNull: false},
    event_location: {type: DataTypes.STRING, allowNull: false},
    totalticketquantity: {type: DataTypes.INTEGER, allowNull: false},
    img: {type: DataTypes.STRING, allowNull: false}
});

const Order = sequelize.define( 'order', {
    order_id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
});

const Status = sequelize.define( 'status', {
    status_id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    event_name: {type: DataTypes.STRING, allowNull: false},
});


const Basket = sequelize.define( 'basket', {
    basket_id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
});


User.hasMany(Ticket);
Ticket.belongsTo(User);

Ticket.hasMany(Order);
Order.belongsTo(Ticket);

Status.hasMany(Ticket);
Ticket.belongsTo(Status);

Events.hasMany(Ticket);
Ticket.belongsTo(Events);

Category.hasMany(Events);
Events.belongsTo(Category);

User.hasMany(Basket);
Basket.belongsTo(User);

module.exports = {
    User,
    Ticket,
    Category,
    Events, 
    Order, 
    Status, 
    Basket
}






