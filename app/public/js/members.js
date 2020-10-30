memberApp = new Vue({
  el: '#members',
  data: {
    mem: [{
      FirstName: '',
      LastName: '',
      EmailL: '',
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
      fetch('api/Reports/')
        .then(response => response.json())
        .then(json => {
          this.mem=json;
          console.log(this.mem);
        });
      },
    },
  },

/*  mounted: function() {
          axios.get('https://jsonplaceholder.typicode.com/users')
              .then(response => {
                this.members = response.data;
                console.log(response);
              })
              .catch(error => {
                console.log(error);
              });*/
  /*
  created(){
    this.fetchInfo();
  },

  methods: {
    fetchInfo: function(){
      fetch('https://randomuser.me/api/')
      .then(response => response.json())
      .then(data => {
        var memberInfo = data.results[0];
        console.log(memberInfo);
        this.userFirst = userInfo.first;
        this.userLast = userInfo.last;
        this.userDob = userInfo.dob;
        this.userGender = userInfo.gender;
        this.userStart = userInfo.start;
        this.userPosition = userInfo.Position;
        this.userActive = userInfo.active;
        this.userRadio = userInfo.radio;
      });
    },
  },*/

  })
