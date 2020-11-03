var memberEditApp = new Vue({
  el: '#memberEditApp',
  data: {
    member: {},
    Person: {}
  },
  methods: {
    getGuid() {
      var params = (new URL(document.location)).searchParams;
      this.member.PersonID = params.get("PersonID");
    },
    fetchMemberbyGUID() {
      fetch('api/data_entry/members/editlist.php?PersonID='+ this.member.PersonID)
      .then( response => response.json() )
      .then( json => { this.member = json[0] } )
    },
    handleUpdate() {
      fetch('api/members/updateMem.php', {
        method: 'POST',
        body: JSON.stringify(this.member),
        headers: {
          "Content-Type": "application/json; charset=utf-8"
        }
      })
      window.alert("This member was edited");
      window.alert("We will go back to Member List");
      window.location.href = 'members.html';
    }
  },
  created() {
    this.getGuid();
    this.fetchMemberbyGUID();
  }
});
