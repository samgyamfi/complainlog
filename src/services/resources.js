import request from './request.js';

class Resource {
    constructor(uri) {
        this.uri = uri;
    }
    list(query) {
        if (query) {
            return request({
                url: '/' + this.uri + '?' + new URLSearchParams(query).toString(),
                method: 'get',
            });
        } else {
            return request({
                url: '/' + this.uri,
                method: 'get',
            });
        }
    }
    get(id) {
        return request({
            url: '/' + this.uri + '/' + id,
            method: 'get',
        });
    }
    store(resource) {
        return request({
            url: '/' + this.uri,
            method: 'post',
            data: resource,
        });
    }
    update(resource, id) {
        return request({
            url: '/' + this.uri + '/' + id,
            method: 'put',
            data: resource,
        });
    }
    destroy(id) {
        return request({
            url: '/' + this.uri + '/' + id,
            method: 'delete',
        });
    }
}

export { Resource as default };