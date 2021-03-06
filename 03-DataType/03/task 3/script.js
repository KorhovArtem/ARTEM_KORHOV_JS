    var obj = {
        x:1,
        obj: {
            x: 1,
            f: function(x){
                return x*x;
            }
        }
    }
    , copy

    function deepCopy(obj){
        if (typeof obj !== 'object'){
            return obj;
        }
        var result = {}
        , prop

        for( prop in obj){
            result[prop] = deepCopy(obj[prop]);
        }
        return result;
    }

    copy = deepCopy(obj);
    obj.obj.f = function(x) {
        return x*x*x;
    }
    console.log(obj.obj.f(2));
    console.log(copy.obj.f(2));
