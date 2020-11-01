var app = new Vue({
  el: '#certs',
  data: {
    certInfo: [],

    newCert: {
      CertificationID: '',
    	CertificationName: '',
    	CertifyingAgency: '',
    	ExpirationPeriod: ''
    }
  },

  created() {
    this.fetchMember();
  },

  methods: {
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
