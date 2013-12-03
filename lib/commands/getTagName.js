module.exports = function getTagName (cssSelector, callback) {

    var self = this;

    this.element("css selector", cssSelector, function(err,result) {

        if(err === null && result.value) {

            self.elementIdName(result.value.ELEMENT, function(err,result) {
                if (typeof callback === "function") {
                    callback(err,result.value.toLowerCase());
                }
            });

        } else {

            if (typeof callback === "function") {
                callback(err,result);
            }

        }

    });
};
