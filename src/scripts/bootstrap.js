(function() {
    /**
     * We can bootstrap like this: angular.bootstrap("#cseWidget", ['cseWidget']), which looks
     * for the element with id="cseWidget". However the jqlite version of angular only supports
     * element tags so without jquery this will raise "selectors not implemented" exception. To
     * solve it use the document.querySelector and wrap the element.
     */
    var elem = document.querySelector("#cseWidget");
    angular.bootstrap(angular.element(elem), ['cseWidget']);
}).call(this);
