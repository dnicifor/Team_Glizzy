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
        CertificationID: '',
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
      member:{},
      memDetails: [],
      memReport: [],
      activeMember:null,
      certDetails: [],
      certReport: [],
      activeCert:null,

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

    methods: {

      //Members

      changeMember (event) {
            this.selectedMember = event.target.options[event.target.options.selectedIndex].text
          },

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
        fetch('api/view/memStation.php')
          .then(response => response.json())
          .then(json => {
            this.memReport=json;
            console.log(this.memReport);
          });
      },

      deleteMember(deleteMember) {
        console.log(deleteMember);
        fetch("api/data_entry/members/deleteMem.php", {
          method:'POST',
          body: JSON.stringify({
            "PersonID": deleteMember
          }),
          headers: {
            "Content-Type": "application/json; charset=utf-8"
          }
        })  
        .then( response => response.json() )
        .then( json => {
          console.log("Returned from post:", json);
          this.memInfo.push(json[0]);
        });
        window.location.href = 'members.html'
        console.log("Deleting (POSTing)...!");
      },


      addMember() {
        fetch('api/data_entry/members/addMem.php', {
          method:'POST',
          body: JSON.stringify(this.newMember),
          headers: {
            "Content-Type": "application/json; charset=utf-8"
          }
        })
        .then( response => response.json() )
        .then( json => {
          console.log("Returned from post:", json);
          this.memInfo.push(json[0]);
          this.newMember = this.newMemberData();
        });
        window.location.href = 'members.html'
        console.log("Creating (POSTing)...!");
        console.log(this.newMember);
      },

      newMemberData() {
        return{
          FirstName:"",
          LastName:"",
          Email:"",
          PhoneNumber:"",
          DateOfBirth:"",
          StartDate:"",
          Gender:"",
          RadioNumber:"",
          StationNumber:"",
          ActiveStatus:""
        }
      },

      editMember() {
      window.location.href = 'memberedit.html?PersonID='+member.PersonID;
    },


      //Certification

      fetchCert() {
        fetch('api/view/certifications.php')
          .then(response => response.json())
          .then(json => {
            this.certInfo=json;
            console.log(this.certInfo);
          });
        },

      fetchCertDetails() {
        fetch('api/Detail_view/viewCert.php')
          .then(response => response.json())
          .then(json => {
            this.certDetails=json;
            console.log(this.certDetails);
          });
        },

      fetchCertReport() {
        fetch('api/view/expiredCerts.php')
          .then(response => response.json())
          .then(json => {
            this.certReport=json;
            console.log(this.certReport);
          });
        },

      deleteCertification(deleteCertification) {
        console.log(deleteCertification);
        fetch('api/data_entry/certifications/deleteCert.php', {
          method:'POST',
          body: JSON.stringify({
            "CertificationID": deleteCertification
          }),
          headers: {
            "Content-Type": "application/json; charset=utf-8"
          }
        })
        .then( response => response.json() )
        .then( json => {
          console.log("Returned from post:", json);
          this.certInfo=json;
        });
        console.log("Deleting (POSTing)...!");
      },

      addCert() {
        fetch('api/data_entry/certifications/addCert.php', {
          method:'POST',
          body: JSON.stringify(this.newCert),
          headers: {
            "Content-Type": "application/json; charset=utf-8"
          }
        })
        .then( response => response.json() )
        .then( json => {
          console.log("Returned from post:", json);
          this.certInfo.push(json[0]);
          this.newCert = this.newCertData();
        });

        console.log("Creating (POSTing)...!");
        console.log(this.newCert);
      },

      newCertData() {
        return{
          CertificationName:"",
          CertifyingAgency:"",
          ExpirationPeriod:""
        }
      },

      editCert() {
        fetch('api/certifications/updateCert.php', {
          method:'POST',
          body: JSON.stringify(this.activeCert),
          headers: {
            "Content-Type": "application/json; charset=utf-8"
            }
          })
          .then( response => response.json() )
          .then( json => {
            console.log("Returned from post:", json);
            this.activeCert=json;
          });

          console.log("Updating (POSTing)...!");
          console.log(this.activeCert);
        },

      //CertificationAssignment???
      addCertAssign() {
        fetch('api/certifications/assignCert.php', {
          method:'POST',
          body: JSON.stringify(this.newCertAssign),
          headers: {
            "Content-Type": "application/json; charset=utf-8"
          }
        })
        .then( response => response.json() )
        .then( json => {
          console.log("Returned from post:", json);
          this.certAssign=json;

          this.newCertAssign = this.newCertAssignData();
        });

        console.log("Creating (POSTing)...!");
        console.log(this.newCertAssign);
      },

      newCertAssignData() {
        return{
          PersonID:"",
          CertificationID:"",
          AssignmentDate:""
        }
      },

    },

  });
