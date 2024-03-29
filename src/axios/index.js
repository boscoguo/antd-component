import JsonP from 'jsonp'
export default class Axios {
    static jsonp(options) {
        // es6 promise resolve means success , reject means fail
        return new Promise((resolve, reject) => {
            JsonP(options.url, {
                param: "callback"
            }, function (err, response) {
                // todo
                // debugger
                if (response.status === "success") {
                    resolve(response)
                }else{
                    reject(response.message)
                }
            })
        })
    }
}