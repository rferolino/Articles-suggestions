(function () {
    require({
        shim: {
            'controllers/cseSuggestionsController': {
                deps: ['cseWidget', 'services/suggestionService']
            },
            'services/suggestionService': {
                deps: ['cseWidget']
            },
            'libs/angular-resource': {
                deps: ['libs/angular']
            },
            'libs/createDialog': {
                deps: ['libs/angular']
            },
            'filters/pageFilter': {
                deps: ['cseWidget']
            },
            'filters/timeMoment': {
                deps: ['cseWidget']
            },
            'cseWidget': {
                deps: ['libs/angular', 'libs/angular-resource']
            },
            'config': {
                deps: ['cseWidget']
            },
            'run': {
                deps: ['cseWidget']
            }
        }
    }, ['require','libs/moment', 'libs/createDialog', 'controllers/cseSuggestionsController', 'filters/pageFilter', 'filters/timeMoment','config','run'], function (require) {
        return angular.element(document).ready(function () {
            return require(['bootstrap']);
        });
    });

}).call(this);
