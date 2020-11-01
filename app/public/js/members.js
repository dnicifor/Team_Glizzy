memberApp = new Vue({
  el: '#members',
  data: {
      memInfo: [],

      newMember: {
        FirstName: '',
        LastName: '',
        Email: '',
        PhoneNumber: '',
        DateOfBirth: '',
        StartDate: '',
        Gender: '',
        RadioNumber: '',
        StationNumber: '',
        ActiveStatus: ''
      }
    },

    created() {
      this.fetchMember();
    },

    // created() {
    //   this.deleteMember();
    // },
    //
    // created() {
    //   this.editMember();
    // },
    //
    // created() {
    //   this.addMember();
    // },

    methods: {
      fetchMember() {
        fetch('api/view/members.php')
          .then(response => response.json())
          .then(json => {
            this.memInfo=json;
            console.log(this.memInfo);
          });
        },

      // deleteMember() {
      //   fetch('api/data_entry/members/delete.php')
      //     .then(response => response.json())
      //     .then(json => {
      //       this.memInfo=json;
      //       console.log(this.memInfo);
      //     });
      // },
      //
      // editMember() {
      //   fetch('api/data_entry/members/update.php')
      //     .then(response => response.json())
      //     .then(json => {
      //       this.memInfo=json;
      //       console.log(this.memInfo);
      //     });
      // },
      //
      // addMember() {
      //   fetch('api/data_entry/members/add.php', {
      //     method:'POST',
      //     body: JSON.stringify(this.newMember),
      //     headers: {
      //         "Content-type": "application/json; charset=utf-8"
      //     }
      //   })
      //   .then(response => response.json())
      //   .then( json => {
      //     console.log("Returned from post:", json);
      //     this.memInfo = json;
      //     this.newMember = this.newMemberData();
      //   });
      //
      //   console.log("Creating (POSTing)...!");
      //   console.log(this.newMember);
      //   },
      //
      //   newMemberData() {
      //     return {
      //       FirstName: "",
      //       LastName: "",
      //       Email: "",
      //       PhoneNumber: "",
      //       DateOfBirth: "",
      //       StartDate: "",
      //       Gender: "",
      //       RadioNumber: "",
      //       StationNumber: "",
      //       ActiveStatus: ""
      //     }
      //   }
      },
  });
