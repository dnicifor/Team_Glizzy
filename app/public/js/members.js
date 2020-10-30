memberApp = new Vue({
  el: '#members',
  data: {
    mem: [{
      FirstName: '',
      LastName: '',
      Email: '',
      PhoneNumber: '',
      DateOfBirth: '',
      StartDate: '',
      Gender: '',
      RadioNumber: '',
      StationNumber: '',
      ActiveStatus: '',
    }],

    created() {
      this.fetchMember();
    },

    methods: {
      fetchMember() {
        fetch('api/Reports/memReport.php')
          .then(response => response.json())
          .then(json => {
            this.mem=json;
            console.log(this.mem);
          });
        },
      },
    },
  })
