var obj = {
    locales: {
        en: 'English',
        ru: 'Russian',
        es: 'Spanish',
        fr: 'French',
        cn: 'Simplified Chinese',
        jp: 'Japanese',
        de: 'German',
        ua: 'Ukrainian'
    },
    getLocales: function (data) {
        var locales = this.locales;

        if (typeof data !== 'undefined') {
            if (data.select) {
                data.select.unshift(locales);
                locales = _.pick.apply(_, data.select);
            }
            if (data.ignore) {
                data.ignore.unshift(locales);
                locales = _.omit.apply(_, data.ignore);
            }
        }

        return _.extend(locales);
    }
};

var localesManager = {
    locales: {
        en: 'English',
        ru: 'Russian',
        es: 'Spanish',
        fr: 'French',
        cn: 'Simplified Chinese',
        jp: 'Japanese',
        de: 'German',
        ua: 'Ukrainian',
        pt: 'Portuguese'
    },
    getLocales: function(obj) {
        var result = localesManager.locales;

        if (typeof obj !== 'undefined') {

            if (obj.select) {
                var toSelect = obj.select,
                    arrLength = toSelect.length,
                    i = 0;

                for (i; i < arrLength; i++) {
                    result[toSelect[i]] = localesManager.locales[toSelect[i]];
                }
            }

            if (obj.ignore) {
                if (!obj.select) {
                    result = localesManager.locales;
                }

                var ignored = obj.ignore;
                var resultClone = {};

                for (var key in result) {
                    if (ignored.indexOf(key) === -1) {
                        resultClone[key] = result[key];
                    }
                }

                result = resultClone;
            }

        }

        return result;
    }
};

var empty = obj.getLocales();
var select = obj.getLocales({ select: ['en', 'ru', 'es']});
var ignore = obj.getLocales({ ignore: ['en', 'ru', 'es']});
var mix = obj.getLocales({ select: ['en', 'ru', 'es'], ignore: ['en']});

console.log(empty);
console.log(select);
console.log(ignore);
console.log(mix);