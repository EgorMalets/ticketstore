import {makeAutoObservable} from 'mobx';

export default class EventStore {
    constructor() {
        this._categorys = []
        this._events = []
        this._selectedCategory = {}
        this._page = 1
        this._totalCount = 0
        this._limit = 2
        makeAutoObservable(this)
    }

    setCategorys(categorys) {
        this._categorys = categorys
    }

    setEvents(events) {
        this._events = events
    }

    setSelectedCategory(category) {
        this._selectedCategory = category;
    }

    setPage(page) {
        this._page = page
    }

    setTotalCount(count) {
        this._totalCount = count;
    }

    get categorys() {
        return this._categorys
    }

    get events() {
        return this._events
    }

    get selectedCategory() {
        return this._selectedCategory
    }

    get totalCount() {
        return this._totalCount
    }

    get page() {
        return this._page
    }

    get limit() {
        return this._limit
    }
}