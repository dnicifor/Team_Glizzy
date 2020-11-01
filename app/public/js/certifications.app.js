var app = new Vue({
  el: '#certsample',
  data: {
    certifications: [],

    newCert: {
      CertificationID: '',
    	CertificationName: '',
    	CertifyingAgency: '',
    	ExpirationPeriod: '',
    }
  },
  methods: {
    fetchUser() {
      fetch('api/data_entry/')
      .then(response => response.json())
      .then(json => {
        this.certifications=json;
        console.log(this.certifications);
      });
    },
      createCert(){
        fetch('api/data_entry/addCert.php', {
          method: 'POST',
          body: JSON.stringify(this.newCert),
          headers: {
            "Content-Type":"application/json; charset=utf-8"

          }
        })
        .then(response => response.json())
        .then( json => {
          console.log("Returned from post:", json);
          this.certifications = json;
          this.newCert = this.newIdData();
        });
        console.log("Creating (POSTing)...!");
        console.log(this.newCert);

      },
      newIdData() {
        return {
          CertificationID: '',
        	CertificationName: '',
        	CertifyingAgency: '',
        	ExpirationPeriod: '',
        }
      }
    },

    created(){
      this.fetchUser();


    }
  });
