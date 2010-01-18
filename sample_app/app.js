require('./config/env')

resource("projects", function() {

  this.get(function() {
    return {text: "Projects"}
  })

  this.post(function() {
    return {text: "POST Projects"}
  })

  this.member(":project_id", function() {
    this.get(function(params) {
      return {text: "GET Project No. " + params.project_id}
    })

    this.put(function(params) {
      return {text: "PUT Project No. " + params.project_id}
    })

    this.del(function(params) {
      return {text: "DELETE Project No. " + params.project_id}
    })

    this.resource("users", function() {
      this.get(function(params) {
        return {text: "GET Project No. " + params.project_id + " users"}
      })
    })

    this.resource("documents", function() {
      this.get(function(params) {
        return {text: "GET Project No. " + params.project_id + " documents"}
      })

      this.post(function(params) {
        return {text: "POST Project No. " + params.project_id + " documents"}
      })

      this.member(":document_id", function() {
        this.get(function(params) {
          return {text: "GET Project No. " + params.project_id + ", Document No. " + params.document_id}
        })
        this.put(function(params) {
          return {text: "PUT Project No. " + params.project_id + ", Document No. " + params.document_id}
        })
        this.del(function(params) {
          return {text: "DELETE Project No. " + params.project_id + ", Document No. " + params.document_id}
        })
      })
    })

  })

})