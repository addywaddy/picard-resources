require('sys');

function arrayToPath (ary) {
  return "/" + ary.join("/");
}

GLOBAL.resource = function(name, handler) {
  var resource = {
    ancestors: typeof(this.ancestors) == "undefined" ? [name] : this.ancestors.concat(name),

    get: function(handler) {
      GLOBAL.get(arrayToPath(this.ancestors), handler)
    },

    post: function(handler) {
      GLOBAL.post(arrayToPath(this.ancestors), handler)
    },

    member: function(param_key, handler) {

      var resource = this

      var member = {

        ancestors: resource.ancestors.concat(param_key),

        get: function(handler) {
          resource.get.call(this, handler)
        },

        put: function(handler) {
          GLOBAL.put(arrayToPath(this.ancestors), handler)
        },

        del: function(handler) {
          GLOBAL.del(arrayToPath(this.ancestors), handler)
        },

        resource: function(name, handler) {
          GLOBAL.resource.call(this, name, handler)
        }

      }
      handler.call(member)
    }
  }
  handler.call(resource)
}
