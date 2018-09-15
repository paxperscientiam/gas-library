function JsonResponseHandler(url: string, query = {}, params = {muteHttpExceptions: true}, cacheName: string) {
    if (!(this instanceof JsonResponseHandler)) {
        return new JsonResponseHandler(url: string, query = {}, params = {muteHttpExceptions: true});
    }

    if (Object.keys(query).length > 0) {
        const strQuery = "?" + Object.keys(query).map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(query[key])).join("&");
        url = url + strQuery;
    }

    try {
        const response = UrlFetchApp.fetch(url, params);
        const json = response.getContentText();
        const data = JSON.parse(json);
        //
        this.data = data;
    } catch (e) {
        this.data = {};
    }
}
