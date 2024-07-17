const uuid = require('uuid');
const path = require('path');
const { Events } = require('../models/models');
const ApiError = require('../error/ApiError');
const moment = require('moment')

class EventsController {
    async create(req, res, next) {
        try {
            const { event_name, ticketprice, eventdatetime, event_description, event_city, event_location, totalticketquantity, categoryCategoryId } = req.body;
            const { img } = req.files;
            let fileName = uuid.v4() + ".jpg";
            img.mv(path.resolve(__dirname, '..', 'static', fileName));
            console.log({ event_name, ticketprice, eventdatetime: moment(eventdatetime).format(), event_description, event_city, event_location, totalticketquantity, categoryCategoryId, img: fileName })
            const event = await Events.create({ event_name, ticketprice, eventdatetime: moment(eventdatetime).format(), event_description, event_city, event_location, totalticketquantity, categoryCategoryId, img: fileName }).catch(error => { console.log(error); return error });
            if(event instanceof Error){
                next(ApiError.badRequest(e.message));
            }
            return res.json(event)
        } catch (e) {
            next(ApiError.badRequest(e.message));
        }
    }

    async getAll(req, res) {
        let { categoryCategoryId, limit, page } = req.query;
        page = page || 1;
        limit = limit || 9;
        let offset = page * limit - limit;
        let eventss;
        if (!categoryCategoryId) {
            eventss = await Events.findAndCountAll({ limit, offset });
        }
        if (categoryCategoryId) {
            eventss = await Events.findAndCountAll({ where: { categoryCategoryId }, limit, offset });
        }
        return res.json(eventss);

    }

    async getOne(req, res) {
        const { event_id } = req.params;
        const event = await Events.findOne(
            {
                where: { event_id },
            },
        )
        return res.json(event);
    }
}

module.exports = new EventsController()