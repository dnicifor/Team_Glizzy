ocfrApp = new Vue({
  el: '#index',
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
      },

      certInfo: [],

      newCert: {
        CertificationName: '',
      	CertifyingAgency: '',
      	ExpirationPeriod: ''
      },

      certAssign: [],

      newAssign: {
        PersonID: '',
        CertificationID: '',
        AssignmentDate: ''
      },

      memDetails: [],
      memReport: [],
    },

    // Created Functions
    created() {
      this.fetchMember();
      this.fetchMemDetails();  //(viewMem php)
      this.fetchMemReport(); //(memStaion.php)
      this.fetchCert(); //(certifications.php)
      this.fetchCertDetails(); //(viewCert.php)
      this.fetchCertReport(); //(expiredCerts.php)
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

      //Members

      fetchMember() {
        fetch('api/view/members.php')
          .then(response => response.json())
          .then(json => {
            this.memInfo=json;
            console.log(this.memInfo);
          });
        },

      fetchMemDetails() {
        fetch('api/Detail_view/viewMem.php')
          .then(response => response.json())
          .then(json => {
            this.memDetails=json;
            console.log(this.memDetails);
          });
      },

      fetchMemReport() {
        fetch('api/Detail_view/viewMem.php')
          .then(response => response.json())
          .then(json => {
            this.memReport=json;
            console.log(this.memReport);
          });
      },

      deleteMember(mid) {
        console.log(mid);
        fetch('api/data_entry/members/delete.php', {
          method:'POST',
          body: JSON.stringify({
            "PersonID": mid
          }),
          headers: {
            "Content-Type": "application/json; charset=utf-8"
          }
        })
        .then( response => response.json() )
        .then( json => {
          console.log("Returned from post:", json);
          this.memInfo=json;
        });
        console.log("Deleting (POSTing)...!");
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



      //Certification

      fetchCert() {
        fetch('api/view/certifications.php')
          .then(response => response.json())
          .then(json => {
            this.certInfo=json;
            console.log(this.certInfo);
          });
        },



      },
  });
